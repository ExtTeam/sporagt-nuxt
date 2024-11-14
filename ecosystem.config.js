module.exports = {
    apps: [
        {
            name: 'NUXT_STARTER',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}