// You can import your modules
// import index from '../src/index'
import "reflect-metadata";
import nock from "nock";
// Requiring our app implementation
// import myProbotApp from "../src";
// import { Probot, ProbotOctokit } from "probot";
import { useContainer } from "typeorm";
import { Container } from "typedi";
// Requiring our fixtures
// import payload from "./fixtures/issues.opened.json";
//
// const issueCreatedBody = { body: "Thanks for opening this issue!" };
const typeorm = require("typeorm");
// const fs = require("fs");
// const path = require("path");
//
// const privateKey = fs.readFileSync(
//   path.join(__dirname, "fixtures/mock-cert.pem"),
//   "utf-8"
// );

// TODO: Clean up the unused code temporarily left here.
describe("Ti Sync Bot", () => {
  // let probot: any;

  beforeAll(() => {
    useContainer(Container);
  });

  beforeEach(() => {
    nock.disableNetConnect();
    typeorm.createConnection = jest.fn().mockResolvedValue(null);

    // probot = new Probot({
    //   appId: 123,
    //   privateKey,
    //   // disable request throttling and retries for testing
    //   Octokit: ProbotOctokit.defaults({
    //     retry: { enabled: false },
    //     throttle: { enabled: false },
    //   }),
    // });
    // Load our app into probot
    // probot.load(myProbotApp);
  });

  test("creates a comment when an issue is opened", async () => {});
  //
  // test("creates a comment when an issue is opened", async (done) => {
  //   const mock = nock("https://api.github.com")
  //     // Test that we correctly return a test token
  //     .post("/app/installations/2/access_tokens")
  //     .reply(200, {
  //       token: "test",
  //       permissions: {
  //         issues: "write",
  //       },
  //     })
  //
  //     // Test that a comment is posted
  //     .post("/repos/hiimbex/testing-things/issues/1/comments", (body: any) => {
  //       done(expect(body).toMatchObject(issueCreatedBody));
  //       return true;
  //     })
  //     .reply(200);
  //
  //   // Receive a webhook event
  //   await probot.receive({ name: "issues", payload });
  //
  //   expect(mock.pendingMocks()).toStrictEqual([]);
  // });

  afterEach(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

// For more information about testing with Jest see:
// https://facebook.github.io/jest/

// For more information about using TypeScript in your tests, Jest recommends:
// https://github.com/kulshekhar/ts-jest

// For more information about testing with Nock see:
// https://github.com/nock/nock
