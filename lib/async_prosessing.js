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

export {
  blockTime
};
