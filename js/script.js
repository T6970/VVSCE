import { Nqde } from 'https://cdn.jsdelivr.net/gh/T6970/Nqde@main/src/index.js'

Nqde.newCard("editor")
Nqde.resizeCard("editor", "800", "600")
Nqde.moveCard("editor", "20", "100")
Nqde.setContent("editor", '<div contenteditable="true">Write code here</div>')
Nqde.newCard("file")
Nqde.resizeCard("file", "15", "5")
Nqde.moveCard("file", "20", "20")
Nqde.setContent("file", 'File')
Nqde.listenFor("file", "click", () => {
  
})