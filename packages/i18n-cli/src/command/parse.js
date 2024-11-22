import { transform } from '@yugu/i18n-core'
import { getI18nConfig } from '../utils/index.js'
import constant from '../config/constant.js'
export default async function parseCommand(options) {
  const config = await getI18nConfig(constant.i18nPath)
  options = {
    ...config.default,
    ...options
  }
  transform(options)
}
