# API TEST

This is a simple project that performns regression test on an API 

### How to test

- You need npm or yarn to install packages in this application.

``` bash
git clone https://github.com/DziramP/swapi-paystack.git
```
``` bash
cd swapi-paystack 
```
``` bash
yarn 
```
OR
``` bash
npm install
```

Then fnally,
``` bash
npm run test
```

#### Packages used
- chai (for testing)
- chai-json-schema (to validate the response schema of the API)
- mocha (run our test script)
- perf_hooks (to check the response time of a request)
- supertest (to make http calls to the server) 

### Schema

- The test schema can be found under the schema folder