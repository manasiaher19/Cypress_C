const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://practice.automationtesting.in/"
    },
    env: {
        uid: 'manasi@gmail.com',
        pass: 'Manasi@19',
    },
})