describe('Set up', () => {
    it.skip('Test case 1', () => {
        cy.log('Testcase 1')
    })

    it.only('Test case 2', () => {
        cy.log('Testcase 2')
    })

    it('Test case 3', () => {
        cy.log('Testcase 3')
    })
})