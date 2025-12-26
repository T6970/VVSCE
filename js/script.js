import { insert } from "./cursor.js"

const loadConfig = async (filename) => {
  try {
    const raw = await fetch(`../conf/${filename}.json`)
    if (!raw.ok) throw new Error(`Failed to fetch ${filename}`)
    
    const lang = await raw.json()
    console.log(lang)
    return lang
  } catch (e) {
    console.error(e)
  }
}


const main = async () => {
  const editor = document.getElementById("editor")

  let lang
  lang = await loadConfig("js")

  for (const [original, replace] of Object.entries(lang.keyOverride)) {
    editor.addEventListener("keydown", (e) => {
      if (e.key === original) {
        e.preventDefault
        console.log(replace)
        insert(replace)
      }
    })
  }
}

main()