import path from 'path'
import { getFiles } from '../utils/index.js'
import transformVue from './transformVue.js'
/**
 * @description transform //TODO
 * @param {Object} options
 * 需要返回国际化的中文json
 * 需要对ast进行处理，提取中文并且注入import语句到代码中
 */
export default function transform(options) {
  const { entry, exclude } = options
  console.log(`🚀 ~ entry, exclude:`, entry, exclude)
  const files = [].concat(entry).reduce((acc, cur) => {
    const file = getFiles(cur, exclude).map(file => {
      return {
        filePath: file,
        entry: cur,
        ext: path.extname(file)
      }
    })
    return acc.concat(file)
  }, [])
  files.forEach(file => {
    console.log(`🚀 ~ file:`, file.ext)
  })
}
