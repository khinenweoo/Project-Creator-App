import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        sourcemap: false, // This can help avoid source-map related issues
    },
    css: {
        devSourcemap: false
    },
    server: {
        hmr: {
            overlay: false // This will prevent some development-only errors from showing
        }
    }
});
