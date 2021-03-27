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

export {
  blockTime,
  getAsyncProcesses1,
};
