import { Nqde } from 'https://cdn.jsdelivr.net/gh/T6970/Nqde@main/src/index.js'

Nqde.newCard("editor")
Nqde.resizeCard("editor", "800", "600")
Nqde.moveCard("editor", "20", "100")
Nqde.setContent("editor", '<div contenteditable="true">Write code here</div>')
Nqde.newCard("file")
Nqde.resizeCard("file", "25", "20")
Nqde.moveCard("file", "20", "20")
Nqde.setContent("file", 'File')
Nqde.listenFor("file", "click", () => {
  Nqde.newCard("file context menu")
  Nqde.resizeCard("file context menu", "200", "600")
  Nqde.moveCard("file context menu", "20", "120")
  Nqde.setContent("file context menu", '<div>New File</div><div>Open File</div><div>Save File</div>')
  Nqde.listenFor("editor", "click", () => {
    Nqde.deleteCard("file context menu")
  })
})