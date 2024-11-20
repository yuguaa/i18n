import { extname } from 'path'
import { getFiles } from '../utils/index.js'
import transformVue from './transformVue.js'
import transformJs from './transformJs.js'
import log from '../utils/log.js'
export default function transform(options) {
  const { entry, exclude } = options
  const files = [].concat(entry).reduce((acc, cur) => {
    const file = getFiles(cur, exclude).map(el => {
      return {
        filePath: el,
        entry: cur,
        ext: extname(el)
      }
    })
    return acc.concat(file)
  }, [])

  let collect = {}
  files.forEach((file, index) => {
    const { ext } = file
    if (ext === '.vue') {
      collect = {
        ...collect,
        ...transformVue(file, options)
      }
    } else if (ext === '.js') {
      collect = {
        ...collect,
        ...transformJs(file, options)
      }
    } else {
      log.error(`❌ ${file.filePath} 文件类型不支持`)
    }
  })
  log.success(`🎉 国际化收集 完成`)
  return collect
}
