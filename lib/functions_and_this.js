"user strict;"

const getGreetingMessage = (userName) => {
  const user = {
    name: userName,
    greet() {
      return `Hi, I'm ${this.name}. Nice to see you!`;
    }
  }
  return user.greet();
};

function greet(msg) {
  return `Hi, I'm ${this.name}. ${msg}`;
};

export {
  getGreetingMessage,
  greet
};
