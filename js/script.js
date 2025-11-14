import { insertTextAtCursor } from "./insert.js";


const sidebar    = document.getElementById("sidebar");
const snippetBox = document.getElementById("list");

// fetch and append all the snippets
(async () => {
  const response    = await fetch('/snippets/js.json');
  const snippetList = await response.json();

  if (snippetList.snippets) {
    console.log(snippetList.snippets);
  } else {
    console.error('No snippets found in JSON:', snippetList);
  };
  
  snippetList.snippets.forEach(el => {

    const eachSnippet = document.createElement('button');
    eachSnippet.content = el;

    eachSnippet.className = `card button insert`;
    eachSnippet.innerHTML = `<h2>${el.name}</h2>`;
    eachSnippet.style.backgroundColor = snippetList.categories[el.category];

    eachSnippet.addEventListener("click", () => {
      insertTextAtCursor(eachSnippet.content.code);
    });
    snippetBox.appendChild(eachSnippet);
  });
})();