const sidebar    = document.getElementById("sidebar");
const snippetBox = document.getElementById("list");

(async () => {
  const response    = await fetch('/snippets/js.json');
  const snippetList = await response.json();

  if (snippetList.snippets) {
    console.log(snippetList.snippets);
  } else {
    console.error('No snippets found in JSON:', snippetList);
  }
  
  snippetList.snippets.forEach(el => {
    const eachSnippet = document.createElement('button');
    eachSnippet.className = `nest card button insert`
    eachSnippet.innerHTML = `<h2>${el.name}</h2>`
    snippetBox.appendChild(eachSnippet)
  });
})();