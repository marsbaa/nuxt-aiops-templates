import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// path to templates folder
export const templatesPath = path.join(__dirname, "templates");

export function getTemplateContent(relativePath) {
  return fs.readFileSync(path.join(templatesPath, relativePath), "utf-8");
}
