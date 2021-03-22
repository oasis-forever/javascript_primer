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

export {
  getGreetingMessage
};
