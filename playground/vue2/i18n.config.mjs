export default {
  entry: ["src"],
  exclude: [],
  supportedLocales: ["zh-CN", "en-US"],
  importCode: "import { intl } from '@yugu/i18n-vue';",
  i18nObject: "intl",
  i18nMethod: "$t",
  i18nPrefix: "i18n",
  jsonPath: "src",
};
