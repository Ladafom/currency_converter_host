import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        currencyConverter: 'http://localhost:5001/assets/currencyConverter.js',
        currencies: 'http://localhost:5002/assets/currencies.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'react-country-flag', '@table-library/react-table-library'],
    }),
  ],
  build: {
    target: 'esnext', 
  },
  server: {
    port: 5000,
  },
});