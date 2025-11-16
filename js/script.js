import { appendSnippets } from "./snippet.js";

let tab = "html";

const sidebar    = document.getElementById("sidebar");
const snippetBox = document.getElementById("list");
const editor     = document.getElementById("editor");

appendSnippets('/snippets/js.json', snippetBox);

const htmlTab    = document.getElementById("html-tab"   );
const cssTab     = document.getElementById("css-tab"    );
const jsTab      = document.getElementById("js-tab"     );
const previewTab = document.getElementById("preview-tab");

/**
 * Initialize tabs.
 * @param {*} tabButton 
 * @param {*} toTab 
 */
const initTab = (tabButton, toTab) => {
  tabButton.addEventListener("click", () => {
    tab = toTab;
  })
};

initTab(htmlTab, "html");
initTab(cssTab,  "css" );
initTab(jsTab,   "js"  );

previewTab.addEventListener("click", () => {

})

