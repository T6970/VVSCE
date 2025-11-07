const syntaxTree = [];

const snippetList = document.getElementById('snippets');

fetch('snippets/js.json')
  .then(response => response.json())
  .then(data => {
    data.snippets.forEach(snippet => {
      const snippetElement = `
        <div class="card">
          <h3>${snippet.name}</h3>
          <pre class="center"><code>${snippet.code}</code></pre>
        </div>
      `;

      snippetList.innerHTML += snippetElement;
    });
  })
  .catch(error => {
    console.error('Error loading snippets:', error);
  });
