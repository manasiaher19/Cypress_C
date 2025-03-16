// npm install xml2js

///<reference types="cypress"/>

const XMLtoJS = require("xml2js")
const parser = new XMLtoJS.Parser({ explicitArray: false })
describe("SOAP api in cypress", () => {
    it("FahrenheitToCelsius conversionn", function () {
        const Data = '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>100</Fahrenheit></FahrenheitToCelsius></soap12:Body></soap12:Envelope>'
        cy.request({
            url: 'https://www.w3schools.com/xml/tempconvert.asmx',
            method: "POST",
            body: Data,
            headers: {
                "Content-Type": "text/xml",
                "accept": "*/*"
            }

        })
            .then((xmlRes) => {
                cy.log(xmlRes)
                parser.parseString(xmlRes.allRequestResponses[0]['Response Body'], (err, resRes) => {
                    if (err) {
                        cy.log(err)
                    }
                    else {
                        cy.log(res)
                        cy.log(res['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult'])
                        expect(res['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult']).to.eq('37.7777777777778')
                    }
                })

            })
    })
})
