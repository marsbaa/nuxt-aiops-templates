import { readFileSync } from "fs";
import { join } from "path";

export function loadTemplate(path) {
  return readFileSync(join(process.cwd(), "templates", path), "utf-8");
}