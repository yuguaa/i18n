import compiler from 'vue-template-compiler'
import transformHtml from './transformHtml'
import transformJs from './transformJs'
export default function transformVue(fileData, options) {
  const { sourceCode } = fileData
  const sfc = compiler.parseComponent(sourceCode)
  let result = {}
  if (sfc.script) {
    result = {
      ...result,
      ...transformJs({ ...fileData, sourceCode: sfc.script.content }, options)
    }
  }
  if (sfc.template) {
    result = {
      ...result,
      ...transformHtml({ ...fileData, sourceCode: sfc.template.content }, options)
    }
  }
  return result
}
