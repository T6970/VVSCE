import { lang } from "../snippets/js.js"
import { insertTextAtCursor } from "./insert.js";

const editor = document.getElementById("editor");

editor.addEventListener("keydown", (e) => {
  if (e.key === lang.config.blockStart) {
    e.preventDefault()
    insertTextAtCursor(`${lang.config.blockStart}\n${" ".repeat(lang.config.indent+1)}\n${lang.config.blockEnd}`)
  }
})