// Test Suite
describe('My First Test Suite', function () {
    // Test Case
    it('Does not do much!', () => {
        const sum = 1 + 1
        // ค่าที่เราจะ expect จริง ๆ มันเป็นเท่าไหร่
        cy.log(sum).then(() => {
            expect(2).to.equal(sum)
        })
    })

    it('Constant', () => {
        const constData = 2 + 2
        cy.log(constData)
        sum1 = 5
        cy.log('change consData :', constData)
    })

    it('Variable', () => {
        // it's ok to log verData when not def value yet
        cy.log(varData)
        var varData = 2
        cy.log(varData)
    })

    it('let', () => {
        // can't find let Data in cy.log(letData)
        cy.log(letData)
        let letData = 2
        cy.log(letData)
        letData = 1
        cy.log(letData)
    })

    it('Aliases', () => {
        cy.fixture('example.json').then(loadData => {
            cy.log(loadData)
            // console.log(loadData)
        })
    })
})