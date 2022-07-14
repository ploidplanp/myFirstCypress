describe('DATABASE', () => {
    it('TC01: database connect', () => {
        let query_text = "SELECT * FROM test_global"
        // let data_res = cy.pgDB(query_text, '')
        // cy.log(data_res)
        cy.task("pgDB", { "query": query_text }).then(queryResponse => {
            cy.log(queryResponse)
        });
    });
})