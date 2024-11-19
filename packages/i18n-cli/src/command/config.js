const fs = require('fs')
const path = require('path')
const { confirm, select, input } = require('@inquirer/prompts')
const vueOptions = require('../config/vue')
const prettier = require('prettier')
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
async function getConfig(type) {
  if (type === 'vue') {
    return vueOptions
  } else if (type === 'react') {
  } else if (type === 'vanilla') {
  }
}
function createConfigFile(filePath, content) {
  return fs.writeFileSync(filePath, prettier.format(content), 'utf-8')
}
module.exports = async function configCommand(options) {
  const filePath = path.resolve(process.cwd(), 'i18n.config.js')
  const defaultJsonPath = 'src'
  const { type, isCover, jsonPath } = await ask(filePath)
  const defaultConfig = { ...(await getConfig(type)), jsonPath: jsonPath || defaultJsonPath }
  let content = `module.exports = ${JSON.stringify(defaultConfig)}`
  if (isCover) {
    createConfigFile(filePath, content)
  }
}
