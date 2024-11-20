import { globSync } from 'glob'
export function getFiles(entry, exclude) {
  return globSync(`${entry}/**/*.{js,ts,tsx,jsx,vue}`, {
    ignore: exclude || []
  })
}
