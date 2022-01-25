const request = require("supertest")("https://swapi.dev/api");
var assert = require('assert');
var expect = require("chai").expect;



describe('GET /planets/3', function() {
    it('Verifies response headers and status code', async function() {
        const response = await request.get("/planets/3");
        expect(response.statusCode).to.equal(200);
        expect(response.header["content-type"]).to.include("application/json");
        expect(response.header["vary"]).to.contain("Accept");
        expect(response.header["vary"]).to.contain("Cookie");
    })
})