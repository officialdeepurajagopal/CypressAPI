import assert  from '../../assertions/assertions.js'
import request from '../../reqests/requests.js'

describe('Test Apis', () =>{
    it('Get User List', () =>{
        cy.request(request.getUsers)
        .should((response) => {
            let email = JSON.stringify(response.body.data.email);
            assert.checkEquals(response.status, 200);
            assert.checkEquals(email.replace(/\"/g, ""), "janet.weaver@reqres.in")
        });
    })
})