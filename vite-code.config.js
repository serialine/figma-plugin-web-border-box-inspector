import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/code/code.ts'),
      },
      output: {
        manualChunks: undefined,
        entryFileNames: 'code.js',
      },
    },
    outDir: './dist/src/code',
  },
})
