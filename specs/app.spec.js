process.env.NODE_ENV = "test";
const { app } = require("../app");
const request = require("supertest")(app);
const chai = require("chai");
const { expect } = chai;
const { connection } = require("../connection");

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/rsvp", () => {
    it("POST responds with status: 201 and the new guest obj", () => {
      const input = {
        name: "test name",
        attendance: true,
        meal: "vegan"
      };
      return request
        .post("/api/rsvp")
        .send(input)
        .expect(201)
        .then(({ body: { rsvp } }) => {
          expect(rsvp).to.be.an("object");
          expect(rsvp.name).to.equal("test name");
        });
    });
  });
});
