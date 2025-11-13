export const insertTextAtCursor = (text) => {
  const sel = window.getSelection();
  
  if (!sel.rangeCount) return; // No cursor selected
  
  const range = sel.getRangeAt(0);
  range.deleteContents();

  const textNode = document.createTextNode(text);
  range.insertNode(textNode);

  // Move the cursor right after the inserted text
  range.setStartAfter(textNode);
  range.collapse(true);

  // Update selection
  sel.removeAllRanges();
  sel.addRange(range);
}