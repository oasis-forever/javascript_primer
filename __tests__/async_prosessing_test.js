"use strict;"

import {
  blockTime,
  getAsyncProcesses1,
  getAsyncProcesses2,
  handleAsyncError,
  dummyFetch
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

test("dummyFetch", () => {
  const successRes = dummyFetch("/success/sample.json");
  const failureRes = dummyFetch("/failure/sample.json");
  expect(successRes).toBe(undefined);
  expect(failureRes).toBe(undefined);
  // expect(successRes).toStrictEqual({ body: 'Response body of /success/sample.json' });
  // expect(failureRes).toBe("Not Found");
});
