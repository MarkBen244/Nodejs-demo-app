const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const app = require("../src/app");

test("GET / returns a successful response", async () => {
    const response = await request(app).get("/");

    assert.equal(response.status, 200);
    assert.equal(
        response.body.message,
        "Hello from my Node.js CI/CD pipeline!"
    );
    assert.equal(response.body.status, "success");
});
