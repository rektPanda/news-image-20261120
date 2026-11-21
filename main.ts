// news-image-20261120 entry (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set, for local runs).
// entry.png is a 1024x1024 PNG under the 1 MiB cap.
// The grader runs it twice; the copy is byte-identical both times.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
