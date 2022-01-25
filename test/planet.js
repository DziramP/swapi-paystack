const request = require("supertest")("https://swapi.dev/api");
const chai = require("chai");
const expect = require("chai").expect;
const should = require("chai").should();
chai.use(require('chai-json-schema'));
const planets = require('../schema/planetSchema');

describe('GET /planets/3', function() {
    it('Verifies response headers and status code', async function() {
        const response = await request.get("/planets/3");
        expect(response.statusCode).to.equal(200);
        expect(response.header["content-type"]).to.include("application/json");
        expect(response.header["vary"]).to.contain("Accept");
        expect(response.header["vary"]).to.contain("Cookie");
    })

    it('Verifies the response data', async function() {
        const response = await request.get("/planets/3");
        should.exist(response.body);
        response.body.should.be.a('object');
        expect(response.body.should.have.property('url'));
        expect(response.body.should.have.property('climate'));
        expect(response.body.should.have.property('population'));
        expect(response.body.should.have.property('diameter'));
        expect(response.body.should.have.property('orbital_period'));
        expect(response.body.should.have.property('rotation_period'));
    })

     // it('Verifies response time', async function() {
    //     var response = await request.get("/planets/3");
    //     const responseTime = response.time();
    //     expect(responseTime).to.be.at.most(3)
    // })
})