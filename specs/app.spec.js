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
        name: "Test Guest",
        rsvp: true,
        meal: "vegan",
        song_suggestion: "Dancing in the Moonlight",
        plus_one_name: "John Smith",
        plus_one_meal: "vegetarian"
      };
      return request
        .post("/api/rsvp")
        .send(input)
        .expect(201)
        .then(({ body: { rsvp } }) => {
          expect(rsvp).to.be.an("object");
          expect(rsvp.name).to.equal("Test Guest");
        });
    });
    it("GET responds with status 200 and an array of all guest rsvps", () => {
      return request
        .get("/api/rsvp")
        .expect(200)
        .then(({ body: { rsvps } }) => {
          expect(rsvps).to.be.an("array");
        });
    });
    it("GET responds with status: 200 and an array filtered by attendance", () => {
      return request.get("/api/rsvp?attendance=true").expect(200);
    });
  });
  describe("/login", () => {
    it("POST responds with auth true and jwt token if passwords match", () => {
      const input = {
        password: "JCwedding2606"
      };
      return request
        .post("/api/login")
        .send(input)
        .expect(201)
        .then(({ body: { auth, token } }) => {
          expect(auth).to.equal(true);
          expect(token).to.be.a("string")
        });
    });
  });
});
