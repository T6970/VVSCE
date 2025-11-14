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
    eachSnippet.color = snippetList.categories[el.category];
    eachSnippet.style.backgroundColor = eachSnippet.color;

    eachSnippet.addEventListener("click", () => {
      if (isCursorIn(editor)) insertTextAtCursor(eachSnippet.content.code);
    });
    eachSnippet.addEventListener("mousedown", () => {

      function darken(hex, percent) {
        hex = hex.replace('#', '');
        const num = parseInt(hex, 16);
      
        let r = (num >> 16) - ((num >> 16) * (percent / 100));
        let g = ((num >> 8) & 0x00FF) - (((num >> 8) & 0x00FF) * (percent / 100));
        let b = (num & 0x0000FF) - ((num & 0x0000FF) * (percent / 100));
      
        r = Math.max(0, Math.round(r));
        g = Math.max(0, Math.round(g));
        b = Math.max(0, Math.round(b));
      
        const newHex =
          '#' +
          (r.toString(16).padStart(2, '0')) +
          (g.toString(16).padStart(2, '0')) +
          (b.toString(16).padStart(2, '0'));
      
        return newHex;
      }
        
      eachSnippet.style.backgroundColor = darken(eachSnippet.color, 30)

    });
    eachSnippet.addEventListener("mouseup", () => {
      eachSnippet.style.backgroundColor = eachSnippet.color
    });
    eachSnippet.addEventListener("mouseleave", () => {
      eachSnippet.style.backgroundColor = eachSnippet.color
    });


    target.appendChild(eachSnippet);
  });
};