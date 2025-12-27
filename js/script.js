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
}

main()