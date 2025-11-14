import { insertTextAtCursor, isCursorIn } from "./insert.js";
import { appendSnippets } from "./snippet.js";


const sidebar    = document.getElementById("sidebar");
const snippetBox = document.getElementById("list");
const editor     = document.getElementById("editor");

appendSnippets('/snippets/js.json', snippetBox);