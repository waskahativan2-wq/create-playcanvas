import { defineConfig } from 'vite';

// the CLI's own build (unbuild) owns dist/, so the app builds elsewhere
export default defineConfig({
    build: {
        outDir: 'dist-app'
    }
});
