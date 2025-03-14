const EventEmitter = require("events");

const eventemitter = new EventEmitter();

class myclass extends eventemitter {}

let students = myclass();
students.on("result", () => {
  console.log("Parents will be Happy");
});
students.emit("result");
