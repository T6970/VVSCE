export const insertBefore = (text) => {
  const sel = window.getSelection()
  if (!sel.rangeCount) return

  const range = sel.getRangeAt(0)
  range.insertNode(document.createTextNode(text))
  range.collapse(false)
}

export const insertAfter = (text) => {
  const sel = window.getSelection()
  if (!sel.rangeCount) return

  const range = sel.getRangeAt(0)
  range.insertNode(document.createTextNode(text))
  range.setStartAfter(textNode);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}