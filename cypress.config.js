const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin') //for file download
const { verifyDownloadTasks } = require('cy-verify-downloads'); // for verify file download

module.exports = defineConfig({
  // includeShadowDom: true,
  chromeWebSecurity: false,  //for multi tab or multi-window 
  reporter: 'cypress-mochawesome-reporter', //for mochawesome repoter
  video: true,
  e2e: {
    setupNodeEvents(on, config) {

      on('task', { downloadFile }) // for file download
      on('task', verifyDownloadTasks); // for verify file downloads
      require('cypress-mochawesome-reporter/plugin')(on); //for mochawsome repoter
      
      // implement node event listeners here
      //task1 (11.Cytask)-------------------
      on('task', {
        mytask1() {
          console.log('***Hello***')
          return null
        }
      })

      //task2
      on('task', {
        mytask2(nm) {
          console.log(`Hii ${nm} How are you?`)
          return null
        }
      })

      //task3
      on('task', {
        addition({ a, b }) {
          c = a + b
          console.log(c)
          return null
        }
      })
    },
  },
});
