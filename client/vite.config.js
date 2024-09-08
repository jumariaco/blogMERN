import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import {compression, tarball} from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /*compression(),
    tarball()*/
  ],
  /*build: {
    sourcemap:true
  }*/
})
