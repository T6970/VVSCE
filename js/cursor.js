export const insertBefore = (text) => {
  const sel = window.getSelection()
  if (!sel.rangeCount) return

  const range = sel.getRangeAt(0)
  range.insertNode(document.createTextNode(text))
  range.collapse(false)
}