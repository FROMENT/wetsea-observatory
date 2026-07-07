import type { EditorialKit } from "./schema";
import { FACT_LABELS, BRAND } from "./schema";

const MMSS = /^\d{2}:\d{2}$/;
const len = (s: string) => [...s].length; // count code points, not UTF-16 units

function toSeconds(ts: string): number {
  const [m, s] = ts.split(":").map(Number);
  return m * 60 + s;
}

/**
 * Returns a list of hard-rule violations. Empty list == valid.
 * These rules cannot be expressed in the structured-output JSON Schema,
 * so they are enforced here and fed back into the generation retry loop.
 */
export function validateKit(k: EditorialKit): string[] {
  const v: string[] = [];

  if (len(k.titre) > 60) v.push(`titre is ${len(k.titre)} chars (max 60)`);
  if (len(k.hook_intro) > 200) v.push(`hook_intro is ${len(k.hook_intro)} chars (max 200)`);
  if (len(k.ecran_de_fin_cta) > 80) v.push(`ecran_de_fin_cta is ${len(k.ecran_de_fin_cta)} chars (max 80)`);

  if (k.faits_marquants.length !== 3)
    v.push(`faits_marquants must be exactly 3 (got ${k.faits_marquants.length})`);
  for (const [i, f] of k.faits_marquants.entries())
    if (!FACT_LABELS.includes(f.label as any))
      v.push(`faits_marquants[${i}].label invalid: ${f.label}`);

  const ch = k.chapitrage_youtube;
  if (ch.length < 3) v.push("chapitrage_youtube needs at least 3 chapters");
  if (ch.length === 0 || ch[0].timestamp !== "00:00")
    v.push('first chapter timestamp must be "00:00"');
  if (ch.length === 0 || ch[0].titre !== "Introduction")
    v.push('first chapter titre must be "Introduction"');

  let prev = -1;
  for (const c of ch) {
    if (!MMSS.test(c.timestamp)) {
      v.push(`chapter timestamp "${c.timestamp}" is not MM:SS`);
      continue;
    }
    const s = toSeconds(c.timestamp);
    if (s <= prev) v.push(`chapters not strictly chronological at "${c.timestamp}"`);
    prev = s;
  }

  // Referential integrity: every fact's source_ref must resolve to a golden source.
  const docs = new Set(k.sources_or.map((s) => s.document));
  for (const [i, f] of k.faits_marquants.entries())
    if (!docs.has(f.source_ref))
      v.push(`faits_marquants[${i}].source_ref "${f.source_ref}" is not a sources_or document`);

  // Editorial anti-drift: the brand canon bans certain phrases outright
  // ("n'emploie jamais ..."). The system prompt only *asks* the model to avoid
  // them; enforce it here so a drifted phrasing cannot slip through the retry
  // loop or the /publish re-validation. Scan the model-authored fields only —
  // not sources_or claims, which are verbatim external quotes.
  const authored = [
    k.titre,
    k.hook_intro,
    k.ecran_de_fin_cta,
    ...k.faits_marquants.map((f) => f.fait),
    ...k.chapitrage_youtube.map((c) => c.titre),
  ]
    .join("\n")
    .toLowerCase();
  for (const phrase of BRAND.WetSeaTech.forbidden_phrases)
    if (authored.includes(phrase.toLowerCase()))
      v.push(`forbidden phrase "${phrase}" appears in the kit (brand canon bans it)`);

  return v;
}
