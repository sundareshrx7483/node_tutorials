const EventEmitter = require("events");

let emitter = new EventEmitter();

//This is an asynchronous function which lets event emit only once
emitter.once("eat", () => {
  console.log("I am going to eat apple at once in a day");
});
emitter.once("eat", () => {
  console.log("I am going to eat apple at once in a day");
});

// emitter.emit("eat");
// emitter.emit("eat");

console.log(emitter.listenerCount("eat"));
console.log(EventEmitter);
