import { insertBefore } from "./cursor.js"
import { loadConfig } from "./loader.js"

const main = async () => {
  const editor = document.getElementById("editor")

  let lang
  lang = await loadConfig("js")

  for (const [original, replace] of Object.entries(lang.keyOverride)) {
    editor.addEventListener("keydown", (e) => {
      if (e.key === original) {
        e.preventDefault()
        insertBefore(replace)
      }
    })
  }
}

main()