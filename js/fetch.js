/**
 * 
 * @param {String} file File location.
 * @param {Function} action A function.
 */
export const loadExternalFile = (file, action) => {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => action(data))
    .catch(error => console.error('Error:', error));
}