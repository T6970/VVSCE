const snippetButton = document.getElementById('snippetButton');
const snippet = document.getElementById('snippets');

snippet.style.display = 'none';

// Toggle snippet visibility on button click
snippetButton.addEventListener('click', () => {

  if (snippet.style.display === 'none' || snippet.style.display === '') {

    snippet.style.display = 'block';
    snippetButton.textContent = 'Hide Snippet';

  } else {

    snippet.style.display = 'none';
    snippetButton.textContent = 'Show Snippet';

  }
});

// load snippets into snippet list
const loadedSnippets = JSON.parse(await fetch('snippets/html.json').then(res => res.text()));
loadedSnippets.snippets.forEach(snippetData => {

  const snippetElement = document.createElement('div');
  snippetElement.className = 'card center';
  snippetElement.classList.add('snippet-item');

  snippetElement.innerHTML = `
    <h3>${snippetData.name}</h3>
    <div class="card darker"><code>${snippetData.code}</code></div>
    <button class="card copy darker">Copy</button>
  `;

  snippetElement.style.backgroundColor = loadedSnippets.categories[snippetData.category] || '#f0f0f0';
  snippet.appendChild(snippetElement);

  // Add copy functionality
  const copyButton = snippetElement.querySelector('.copy');

  copyButton.addEventListener('click', () => {

    navigator.clipboard.writeText(snippetData.code).then(() => {
    copyButton.textContent = 'Copied!';

      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);

    });

  });

});