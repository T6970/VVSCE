import { insertAfter, insertBefore } from "./cursor.js"
import { loadConfig } from "./loader.js"

const main = async () => {
  const editor = document.getElementById("editor")

  let lang
  lang = await loadConfig("js")
  console.log(lang)

  for (const [original, {before, after}] of Object.entries(lang.keyOverride)) {
    editor.addEventListener("keydown", (e) => {
      if (e.key === original) {
        e.preventDefault()
        insertBefore(before)
        insertAfter(after)
      }
    })
  }

  editor.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return
    for (const indentChar of lang.indentChars) {
      const cursorPos = editor.selectionStart
      const beforeLength = editor.innerText.slice(0,cursorPos)
      if (editor.innerText.slice((beforeLength - indentChar.length), cursorPos) === indentChar) {
        insertBefore(`\n${" ".repeat(lang.tabSize)}`)
        insertAfter("\n")
      }
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  main()
})