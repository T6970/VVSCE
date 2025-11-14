import { insertTextAtCursor, isCursorIn } from "./insert.js";

/**
 * Fetch and append snippets.
 * @param {String} url A filepath or URL to the target file.
 * @param {Object} target Target element to append the snippets.
 */

export const appendSnippets = async (url, target) => {
  const response    = await fetch(url);
  const snippetList = await response.json();

  if (snippetList.snippets) {
    console.log(snippetList.snippets);
  } else {
    console.error('No snippets found in JSON:', snippetList);
  };

  const editor     = document.getElementById("editor");

  snippetList.snippets.forEach(el => {

    const eachSnippet = document.createElement('button');
    eachSnippet.content = el;

    eachSnippet.className = `card button insert`;
    eachSnippet.innerHTML = `<h2>${el.name}</h2>`;
    eachSnippet.style.backgroundColor = snippetList.categories[el.category];

    eachSnippet.addEventListener("click", () => {
      if (isCursorIn(editor)) insertTextAtCursor(eachSnippet.content.code);
    });
    target.appendChild(eachSnippet);
  });
};