import fs from "fs";
import path from "path";
import QcApp from "./QcApp";

export default function Page() {
  const htmlPath = path.join(process.cwd(), "app", "body-content.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  return <QcApp html={html} />;
}
