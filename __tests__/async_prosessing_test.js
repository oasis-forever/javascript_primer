"use strict;"

jest.useFakeTimers();

import {
  blockTime,
  getAsyncProcesses1,
  getAsyncProcesses2,
  handleAsyncError,
  onFulfilled,
  onRejected,
  dummyFetch,
  throwPromise
} from "../lib/async_prosessing";

test("blockTime", () => {
  const timeout = 1000;
  const message = blockTime(timeout);
  expect(message).toBe(`${timeout} millisecond seconds have passed.`);
});

test("getAsyncProcesses1", () => {
  const timeout   = 1000;
  const millisec  = 10;
  const processes = getAsyncProcesses1(timeout, millisec);
  expect(processes).toStrictEqual([
    `A callback func will start in ${millisec} milliseconds.`,
    "A sysc process will start now.",
    // "The blocking process is starting now.",
    // "The blocking process is done."
  ]);
});

test("getAsyncProcesses2", () => {
  const timeout   = 1000;
  const millisec  = 10;
  const processes = getAsyncProcesses2(timeout, millisec);
  expect(processes).toStrictEqual([
    "The blocking process is starting now.",
    "The blocking process is done.",
    // "It took 1023 milliseconds till an async process started."
  ]);
});

test("handleAsyncError", () => {
  const message = handleAsyncError();
  expect(message).toBe(undefined);
  // expect(message).toBe("It succeeds in catching an error.");
});

test("dummyFetch", async () => {
  const successRes1 = dummyFetch("/success/sample.json").then(onFulfilled, onRejected);
  const successRes2 = dummyFetch("/success/sample.json").then();
  const failureRes1 = dummyFetch("/failure/sample.json").then(onFulfilled, onRejected);
  const failureRes2 = dummyFetch("/failure/sample.json").then(undefined, onRejected);
  const failureRes3 = dummyFetch("/failure/sample.json").catch(onRejected);
  jest.runAllTimers();
  expect(successRes1).resolves.toStrictEqual({ body: "Response body of /success/sample.json" });
  expect(successRes2).resolves.toStrictEqual({ body: "Response body of /success/sample.json" });
  expect(failureRes1).resolves.toBe("Not Found");
  expect(failureRes2).resolves.toBe("Not Found");
  expect(failureRes3).resolves.toBe("Not Found");
});

test("throwPromise", async () => {
  const error = throwPromise().catch(onRejected);
  expect(error).resolves.toThrow("An error raised");
});

test("Promise#resolve", async () => {
  const promise = Promise.resolve("This promise is resolved.");
  const val = promise.then(onFulfilled);
  expect(val).resolves.toBe("This promise is resolved.");
});

test("Promise#reject", async () => {
  const promise = Promise.reject(new Error("Rejected"));
  const val = promise.catch(onRejected);
  expect(val).resolves.toThrow("Rejected");
});

test("promiseChain", async () => {
  const message = Promise.resolve().then(() => {
    return "This is the first promise chain.";
  }).then(() => {
    return "This is the second promise chain.";
  });
  expect(message).resolves.toBe("This is the second promise chain.");
});
});
