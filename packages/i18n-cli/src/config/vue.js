export default {
  entry: ['src'], // 国际化扫描文件夹
  exclude: [], // 国际化扫描排除文件夹
  supportedLocales: ['zh-CN', 'en-US'], // 国际化支持语言
  importCode: "import { intl } from '@yugu/i18n-vue';", // 国际化引入代码
  i18nObject: 'intl', // 国际化对象
  i18nMethod: '$t', // 国际化方法
  i18nPrefix: 'i18n' // 国际化前缀同时也是md5加密的盐
}
