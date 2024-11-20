import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'YuguI18nCore',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['glob', 'chalk'],
      output: {
        globals: {
          // 如果你希望以 UMD 格式构建时，指定全局变量
          YuguI18nCore: 'YuguI18nCore'
        }
      }
    }
  }
})
