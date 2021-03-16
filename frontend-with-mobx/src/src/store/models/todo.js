import { makeAutoObservable } from "mobx";

class toDo {
  list = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(description, createdAt, finishedAt) {
    this.list.unshift([description, createdAt, finishedAt]);
  }

  reset() {
    this.list = [];
  }
}

export default toDo;
