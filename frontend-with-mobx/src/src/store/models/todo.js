import { makeAutoObservable } from "mobx";

class toDo {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(description, createdAt, finishedAt) {
    this.list = [[description, createdAt, finishedAt], ...this.list];
  }

  reset() {
    this.list = [];
  }
}

export default toDo;
