describe('Setup Teardown', () => {

    before(() => {
        // ทำเริ่มแรกครั้งเดียว (ก่อนเริ่มเทสเคส)
        cy.log('Test Suite Set Up')
    })

    after(() => {
        // ทำตอนสุดท้ายครั้งเดียว (หลังเทสเคสสุดท้าย)
        cy.log('Test Suite Tear Down')
    })

    beforeEach(() => {
        // ทำก่อนเริ่มทำแต่ละเทสเคส
        cy.log('Test case set up')
    })

    afterEach(() => {
        // ทำหลังเทสเคสทุกอัน
        cy.log('Test case tear down')
    })
    
    it('Testcase 1', () => {
        cy.log('Testcase 1')
    })

    it('Testcase 2', () => {
        cy.log('Testcase 2')
    })

    it('Testcase 3', () => {
        cy.log('Testcase 3')
    })
})