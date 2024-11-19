import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'YuguI18nCore',
      fileName: 'index',
      formats: ['es', 'amd', 'umd', 'iife', 'cjs', 'esm']
    },
    rollupOptions: {
      external: [
        'fs', // 这里可以列出你不想打包的 Node.js 核心模块
        'path', // 如果你的库依赖了 Node.js 核心模块，应该将它们列为外部依赖
        'glob'
      ],
      output: {
        globals: {
          // 如果你希望以 UMD 格式构建时，指定全局变量
          YuguI18nCore: 'YuguI18nCore'
        }
      }
    }
  }
})
