"use strict;"

const blockTime = (timeout) => {
  const startTime = Date.now();
  while (true) {
    const diff = Date.now() - startTime;
    if (timeout <= diff) {
      return `${timeout} millisecond seconds have passed.`;
    }
  }
};

const getAsyncProcesses1 = (timeout, millisec) => {
  const processes = [];
  processes.push(`A callback func will start in ${millisec} milliseconds.`)
  setTimeout(() => {
    processes.push("The blocking process is starting now.");
    blockTime(timeout);
    processes.push("The blocking process is done.");
  }, millisec);
  processes.push("A sysc process will start now.");
  return processes;
};

const getAsyncProcesses2 = (timeout, millisec) => {
  const processes = [];
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    processes.push(`It took ${endTime - startTime} milliseconds till an async process started.`);
  }, millisec);
  processes.push("The blocking process is starting now.");
  blockTime(timeout);
  processes.push("The blocking process is done.");
  return processes;
};

const handleAsyncError = () => {
  setTimeout(() => {
    try {
      throw new Error("Error");
    } catch (error) {
      return "It succeeds in catching an error.";
    }
    return "It failed to catch an error.";
  }, 10)
};

const fetchCallback = (error, response) => {
  if (error) {
    return error.message;
  } else {
    return response;
  }
};

const dummyFetch = (file_path) => {
  setTimeout(() => {
    if (file_path.startsWith("/success")) {
      return fetchCallback(null, { body: `Response body of ${file_path}` });
    } else {
      return fetchCallback(new Error("Not Found"));
    }
  }, 1000)
};

export {
  blockTime,
  getAsyncProcesses1,
  getAsyncProcesses2,
  handleAsyncError,
  dummyFetch
};
