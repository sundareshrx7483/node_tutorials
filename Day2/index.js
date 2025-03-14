// let details = {
//   name: "Sundaresh",
//   age: 22,
// };

// let address = {
//   street: "Rajajinagar",
//   City: "Bangalore",
// };

// export default details;
// export { address };

let details = {
  name: "Sundaresh",
  age: 22,
};

let address = {
  street: "Rajajinagar",
  City: "Bangalore",
};

module.exports = details;
module.exports = {
  details,
  address,
};

module.exports.a = 6;
