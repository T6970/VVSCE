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

export const isCursorIn = (div) => {
  const selection = window.getSelection();

  if (!selection.rangeCount) return false;
  const node = selection.anchorNode;

  if (!node) return false;

  let currentNode = node;
  while (currentNode) {
      if (currentNode === div) return true;
      currentNode = currentNode.parentNode;
  }

  return false;
}