"use strict;"

let todoIndex = 0;

const TodoItemModel = class {
  constructor({ title, completed }) {
    this.id = todoIndex++;
    this.title = title;
    this.completed = completed;
  }
};

export {
  TodoItemModel
};
