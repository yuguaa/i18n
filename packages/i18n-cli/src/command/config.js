import fs from 'fs'
import path from 'path'
import { confirm, select, input } from '@inquirer/prompts'
import prettier from 'prettier'
import vueOptions from '../config/vue.js'
import constant from '../config/constant.js'
import log from '../utils/log.js'

/**
 * 交互式问题提示
 */
async function ask(filePath) {
  const result = {
    isCover: true,
    type: '',
    jsonPath: null
  }

  result.type = await select({
    message: '请选择项目类型',
    choices: [
      {
        name: 'vue',
        value: 'vue',
        description: '项目基于vue'
      },
      {
        name: 'react',
        value: 'react',
        description: '项目基于react,暂未实现',
        disabled: true
      },
      {
        name: 'vanilla',
        value: 'vanilla',
        description: '原生项目，暂未实现',
        disabled: true
      }
    ]
  })

  result.jsonPath = await input({
    message: '请输入国际化json文件夹路径'
  })

  let isExist = true
  try {
    fs.accessSync(filePath)
  } catch (_) {
    isExist = false
  }

  if (isExist) {
    result.isCover = await confirm({
      message: `文件已存在，是否覆盖？`
    })
  }

  return result
}

/**
 * 根据项目类型获取配置
 */
async function getConfig(type) {
  if (type === 'vue') {
    return vueOptions
  } else if (type === 'react') {
    // React 配置可以在这里扩展
    return {}
  } else if (type === 'vanilla') {
    // Vanilla 配置可以在这里扩展
    return {}
  }
}

/**
 * 创建配置文件
 */
function createConfigFile(filePath, content) {
  return fs.writeFileSync(filePath, prettier.format(content), 'utf-8')
}

/**
 * 主命令逻辑
 */
export default async function configCommand(options) {
  const filePath = path.resolve(process.cwd(), constant.i18nPath)
  const defaultJsonPath = 'src'
  const { type, isCover, jsonPath } = await ask(filePath)
  const defaultConfig = { ...(await getConfig(type)), jsonPath: jsonPath || defaultJsonPath }
  let content = `export default ${JSON.stringify(defaultConfig, null, 2)}`

  if (isCover) {
    createConfigFile(filePath, content)
    log.success('配置文件创建成功')
  }
}
