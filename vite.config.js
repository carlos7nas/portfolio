import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' deixa os caminhos relativos, então o site funciona na raiz
// (carlos7nas.github.io) ou dentro de uma subpasta.
export default defineConfig({
  base: './',
  plugins: [react()],
});
