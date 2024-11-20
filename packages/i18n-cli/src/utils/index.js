import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url';
import log from './log.js'
const checkFileExist = filePath => {
  try {
    fs.accessSync(filePath)
    return true
  } catch (err) {
    return false
  }
}

async function getI18nConfig(filePath) {
  if (checkFileExist(filePath)) {
    filePath = path.resolve(process.cwd(), filePath)
    const fileUrl = pathToFileURL(filePath).href;
    return import(fileUrl)
  } else {
    log.error(`${filePath}文件不存在,请先生成配置文件`)
    process.exit(1)
  }
}

export { checkFileExist, getI18nConfig }
