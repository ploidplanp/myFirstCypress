export function request_get(path, headers) {
    cy.request({
        method: 'GET',
        url: path,
        headers: headers
    }).as('response').should(response => {

    })
    return cy.get('@response')
}