import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from '@rollup/plugin-babel'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'YuguI18nCore',
      fileName: 'index',
      formats: ['es', 'amd', 'umd', 'iife', 'cjs', 'esm']
    },
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
          extensions: ['.js', '.ts'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['defaults', 'not ie <= 11', 'last 2 versions']
                }
              }
            ]
          ]
        })
      ]
    }
  }
})
