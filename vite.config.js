import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        project: 'project.html' // ✅ Include your extra HTML page
      }
    }
  }
});