const commonData = require('../../support/commonUtils')

describe('Control Flow', () => {
    it('Conditional Testing', () => {
        let number = 4
        if(number > 5) {
            cy.log('Number is greater than 5')
        } else if(number == 5) {
            cy.log('Number is equal to 5')
        } else {
            cy.log('Number is less than 5')
        }
    })

    it('Repeating ; Loop', () => {
        for(let i = 0; i < 10; i++) {
            cy.log(i + 1)
        }
    })

    it('Repeating Nested; Nested Loop', () => {
        for(let i = 0; i < 3; i++) {
            for(let j = i; j < 3; j++) {
                cy.log(i, j)
            }
        }
    })

    it('Data Driven', () => {
        let obj = {a: 1, b: 2, c: 3}
        for(let i in obj){
            cy.log(i, obj[i])
        }

    })

    it('Support Function', () => {
        cy.log(commonData.addNumber(2, 5))
    })
})