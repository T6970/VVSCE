const sidebar = document.createElement('div');

// card specifies appearence, sidebar specifies position and size
sidebar.className = 'card sidebar';

async function loadSnippets() {
  const response = await fetch('/snippets/js.json');
  const snippetList = await response.json();

  if (snippetList.snippets) {
    console.log(snippetList.snippets);
  } else {
    console.error('No snippets found in JSON:', snippetList);
  }
  
  snippetList.snippets.forEach(el => {
    const eachSnippet = document.createElement('button');
    eachSnippet.className = `nest card`
    eachSnippet.innerHTML = `<h2>${el.name}</h2>`
    sidebar.appendChild(eachSnippet) 
  });

  body.appendChild(sidebar)
}

loadSnippets();

