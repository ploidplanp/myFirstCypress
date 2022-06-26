describe('Assertion', function () {
    it('Assert String', () => {
        const expected_string = 'Test String Data'
        const data = 'Test String Data'
        expect(data).to.equal(expected_string)
        // or
        expect(data).to.eq(expected_string)
    })

    it('Assert deep equal JSON', () => {
        const expected_json = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": "Fixtures are a great way to mock data for responses to routes"
          }
          
        const data = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": "Fixtures are a great way to mock data for responses to routes"
          }
        
          // .to.equal เหมาะสำหรับ string, number type
          // json ใช้ .to.deep.equal
        expect(data).to.deep.equal(expected_json)
        expect(data.name).to.equal(expected_json.name)
    })

    it('Disorder Array', () => {
        const expected_data = [1, 2, 3]
        const data = [5, 4, 3, 2, 1]
        expect(data).to.include.members(expected_data)
    })

    it('Assert deep include JSON', () => {
        const expected_json = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
          }
          
        const data = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": []
          }

        expect(data).to.include(expected_json)
    })

    it('Assert JSON Key', () => {
        const expected_json_key = ['email', 'name']
        const expected_json = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
        }
        const data = {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": []
        }

        expect(data).to.include.all.key(expected_json_key)
        // or
        expect(data).to.include.all.key(Object.keys(expected_json))
    })
})