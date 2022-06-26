const commonRequest = require('../../support/commonRequest.js')
const statusCode = require('../../fixtures/common/httpStatus.json')
const commonPath = require('../../fixtures/common/commonPath.json')

describe('API Request', () => {
    it('Get Simple API', () => {
        let myurl = 'https://jsonplaceholder.typicode.com/users'
        // let paramurl = 'https://jsonplaceholder.typicode.com/users?param1=$variable'
        // paramurl = paramurl.replace('$variable', 'test')
        //cy.log(paramurl)

        cy.request({
            method: 'GET',
            url: myurl
        }).then(response => {
            expect(response.status).to.equal(200)
        })
    })

    it.skip('POST API with Header', () => {
        let url = 'https://postman-api-learner.glitch.me/info'
        cy.request({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                'name': 'prd'
            }
        }).then(response => {
            expect(response.status).to.equal(200)
            cy.log(response.body)
            expect(response.body.data.name).to.equal('prd')
        })
    })

    it('Lab 1 API', () => {
        let url = 'https://api.jsonbin.io/b/61b1ca2962ed886f915cd39f'
        cy.request({
            method: 'GET',
            url: url,
            headers: {
                'secret-key': '$2b$10$Am0NHvvqt9I.NtuJPGebU.ORWVQb.lE/l12SiXhSeQGME5cpHJ1RS'
            }
        }).then(response => {
            expect(response.status).to.equal(200)
            cy.fixture('response.json').then(expected_response => {
                expect(response.body).to.deep.equal(expected_response)
            })
        })
    });

    it('Lab 1 API using commonRequest form support file', () => {
        let headers = {
            'secret-key': '$2b$10$Am0NHvvqt9I.NtuJPGebU.ORWVQb.lE/l12SiXhSeQGME5cpHJ1RS'
        }
        commonRequest.request_get(commonPath.postRequestWithHeader, headers).then(response => {
            expect(response.status).to.equal(statusCode.httpStatusCode.success)
            cy.fixture('response.json').then(expected_response => {
                expect(response.body).to.deep.equal(expected_response)
            })
        })
    });

    it.only('Lab 2 API', () => {
        let headers = {
            'secret-key': '$2b$10$Am0NHvvqt9I.NtuJPGebU.ORWVQb.lE/l12SiXhSeQGME5cpHJ1RS'
        }
        commonRequest.request_get(commonPath.getRequest, headers).then(response => {
            expect(response.status).to.equal(statusCode.httpStatusCode.success)
            let data = response.body.response
            let sumFriendBalance = 0
            for(let i in data) {
                for(let j in data[i].friends){
                    sumFriendBalance += data[i].friends[j].balance
                }
            }
            cy.log(sumFriendBalance)
        })
    })
})