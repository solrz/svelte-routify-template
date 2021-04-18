
// vite.config.js
const svelte = require('@sveltejs/vite-plugin-svelte')
const { defineConfig } = require('vite')

module.exports = defineConfig(({ command, mode }) => {
    const isProduction = mode === 'production'
    return {
        optimizeDeps: {
            exclude: [
                '@roxi/routify',
            ],
        },
        plugins: [
            svelte({
                hot: !isProduction,
                emitCss: true
            })
        ],
        build: {
            minify: isProduction
        }
    }
})
