const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://practice.automationtesting.in/"
    },
    env: {
        uid: 'aher@gmail.com',
        pass: 'manasiAher@19',
    },
})