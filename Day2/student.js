const EventEmitter = require("events");

class myclass extends EventEmitter {}

let student = new myclass();

student.on("result", (grade) => {
  if (grade === "distinction") {
    console.log("Parents are happy");
  } else {
    console.log("parents are sad");
  }
});
student.on("result", (grade) => {
  if (grade === "distinction") {
    console.log("Relatives are jealous");
  } else {
    console.log("Relatives are happy");
  }
});
student.on("result", (grade) => {
  if (grade === "distinction") {
    console.log("friends ask party");
  } else {
    console.log("friends ask party");
  }
});

student.emit("result", "fail");
