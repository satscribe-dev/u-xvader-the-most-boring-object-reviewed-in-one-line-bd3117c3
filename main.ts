// The Most Boring Object, Reviewed in One Line
// Writes one funny, true review of the dullest everyday object to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The dustpan: sweep all you like, one thin line of dust always hides under its edge, like the floor's last complaint.";

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only white space, on a single line. Fail loudly here
// instead of shipping an entry the gate would refuse.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1-200`);
if (/\n/.test(ENTRY)) throw new Error("entry must stay on one line");
if (!/\S/.test(ENTRY)) throw new Error("entry must not be only white space");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
