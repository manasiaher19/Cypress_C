///<reference types="cypress"/>

describe('Verify Read Write in cypress', () => {

    it('Read Write in Cy', () => {

        let str1 = "Manasi "
        let str2 = "Aher"
        //reading from file
        cy.readFile("cypress/e2e/10.ReadWriteFile/FiletoRead.txt").then((data) => {
            cy.log(data)
        })

        //Writing in file
        cy.writeFile("cypress/e2e/10.ReadWriteFile/WriteInFile.txt", str1)
        cy.readFile('cypress/e2e/10.ReadWriteFile/WriteInFile.txt').then((data) => {
            cy.log(data)
        })

        //Writing in file -2
        cy.writeFile("cypress/e2e/10.ReadWriteFile/WriteInFile.txt", str2, { flag: 'a+' })
        cy.readFile('cypress/e2e/10.ReadWriteFile/WriteInFile.txt').then((Data) => {
            cy.log(Data)
        })
        //{ flag: 'a+' }: This will append the contents at the end of the file instead of overwriting it.
    })

    it('Verify file Read Write for Flipcart', () => {

        cy.visit('https://www.flipkart.com/search?q=samsung&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.writeFile('cypress/e2e/10.ReadWriteFile/DatafromFlipcart.csv', `Name , Prize \n`)
        cy.get('[class="yKfJKb row"]').each((ele) => {
            let Mname = ele.find('[class="KzDlHZ"]').text()
            let Mprize = ele.find('[class="Nx9bqj _4b5DiR"]').text().replace("₹", "").replaceAll(",", "")
            // cy.log(Mprize)
            cy.writeFile('cypress/e2e/10.ReadWriteFile/DatafromFlipcart.csv', `${Mname} ${Mprize} \n`, { flag: 'a+' })
        })
    })

    it('Write data from Amazon', () => {

        cy.visit('https://www.amazon.com/s?k=samsung+phone&crid=8B2100ZJYW8Z&sprefix=samsung+phon%2Caps%2C442&ref=nb_sb_noss_2')
        cy.writeFile('cypress/e2e/10.ReadWriteFile/DataFromAmazon.csv', `Name , Prize \n`)
        cy.get('[class="a-section"]').each((Ele) => {
            let MName = Ele.find('[class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"]').text()
            let MPrize = Ele.find('[class="a-price"]').text().replace("INR", "").replaceAll(",", "")
            // console.log(MName)
            // console.log(MPrize)
            cy.writeFile('cypress/e2e/10.ReadWriteFile/DataFromAmazon.csv', `${MName}  ${MPrize} \n`, { flag: 'a+' })

        })
    })

    it.only('Write Songs list from Gana', () => {
        cy.visit('https://gaana.com/artist/kishore-kumar/songs')
        cy.writeFile('cypress/e2e/10.ReadWriteFile/SongsFromGana.txt', `Kishor Kumar Songs \n`)
        cy.get('[class="artistDetailData"]').each((Songs) => {
            let SongsList = Songs.find('[class="t_over _plyCr"]>span').text()
            cy.writeFile('cypress/e2e/10.ReadWriteFile/SongsFromGana.txt', `${SongsList} \n`, { flag: 'a+' })
        })
    })
})