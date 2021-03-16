import { makeAutoObservable } from "mobx";

// Model the application state.
class Timer {
  description = "";
  list = [];
  createdAt = "";
  finishedAt = "";

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();
