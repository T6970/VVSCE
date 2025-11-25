import { lang } from "../snippets/js.js"
import { insertTextAtCursor } from "./insert.js";

const editor = document.getElementById("editor");

editor.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === "Tab") {
    insertTextAtCursor(" ".repeat(lang.config.indent))
  } else if (e.key === lang.config.blockStart) {
    insertTextAtCursor(`${lang.config.blockStart}\n${" ".repeat(lang.config.indent)}\n${lang.config.blockEnd}`);
  }
});