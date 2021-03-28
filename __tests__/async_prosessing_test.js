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
  throwPromise,
  asyncTask1,
  asyncMultiply,
  getPromiseInCallbackFunc,
  asyncTask2,
  delay
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
  // Flag of resource availability
  let isLoading = true;
  const result_1 = dummyFetch("/success/sample.json")
  .then(onFulfilled).catch(onRejected).finally(() => {
    isLoading = false;
    return isLoading;
  });
  expect(result_1).resolves.toStrictEqual({ body: "Response body of /success/sample.json" });
  // Get some resources
  const responses = [];
  const result_2 = dummyFetch("/success/A.json")
  .then(response => {
    responses.push(response);
    return dummyFetch("/success/B.json");
  }).then(response => {
    responses.push(response);
  }).then(() => {
    return responses;
  });
  expect(result_2).resolves.toStrictEqual([
    { body: "Response body of /success/A.json" },
    { body: "Response body of /success/B.json" }
  ]);
  const fetchedPromise1 = Promise.all([
    dummyFetch("/success/A.json"),
    dummyFetch("/success/B.json")
  ]);
  const result_3 = fetchedPromise1.then(responses => {
    return responses;
  });
  expect(result_3).resolves.toStrictEqual([
    { body: "Response body of /success/A.json" },
    { body: "Response body of /success/B.json" }
  ]);
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

test("asyncTask1", async () => {
  const message = asyncTask1(11).then(onFulfilled).catch(onRejected);
  expect(message).resolves.toBe("The value fulfills the requirement.");
});

test("asyncMultiply", async () => {
  const product = Promise.resolve(1).then(asyncMultiply).then(asyncMultiply);
  expect(product).resolves.toBe(100);
});

test("getPromiseInCallbackFunc", async () => {
  const vals = getPromiseInCallbackFunc();
  expect(vals).resolves.toStrictEqual([2, 3]);
});

test("asyncTask2", async () => {
  const result_1 = asyncTask2(20);
  const result_2 = asyncTask2(9);
  expect(result_1).resolves.toStrictEqual(["Promise#then", "Promise#finally"]);
  expect(result_2).resolves.toStrictEqual(["Promise#catch", "Promise#finally"]);
});

test("delay", async () => {
  const promise_1 = delay(1);
  const promise_2 = delay(2);
  const promise_3 = delay(3);
  const result = Promise.all([promise_1, promise_2, promise_3]).then(values => {
    return values;
  });
  jest.runAllTimers();
  expect(result).resolves.toStrictEqual([1, 2, 3]);
});
