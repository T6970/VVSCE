const loadConfig = async (filename) => {
  try {
    const raw = await fetch(`../conf/${filename}.json`)
    if (!raw.ok) throw new Error(`Failed to fetch ${filename}`)
    
    const lang = await raw.json()
    return lang
  } catch (e) {
    console.error(e)
  }
}