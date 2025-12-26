const loadConfig = async (filename) => {
  try {
    const raw = await fetch(filename)
    if (!raw.ok) throw new Error(`Failed to fetch ${filename}`)
    
    const lang = await raw.json()
    console.log(lang)
    return lang
  } catch (e) {
    console.error(e)
  }
}

let lang
lang = loadConfig("../conf/js.json")