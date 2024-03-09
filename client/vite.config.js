import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   root: path.resolve(__dirname, '..'), 
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3001', 
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''),
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, '..'), 
//     },
//   },
// });

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
