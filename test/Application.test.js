const testReq= require("supertest")
const app =require("../src/app")

describe("Test the main page", () => {
    test("Respond with a message", async () => {
      const response = await testReq(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe(
        "This project is done by shubham ,chirag,shubham shankyan,hk mishra"
      );
    });
  });