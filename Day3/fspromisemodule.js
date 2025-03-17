const fs = require("fs/promises");

// fs.writeFile("./demo.txt", "I LOVE YOU ALL")
//   .then(() => {
//     console.log("File created successfully!!!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.readFile("./demo.txt", "utf-8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function resolve() {
  try {
    await fs.writeFile("./demo2.txt", "I LOVE YOU ALL 2");
    const data = await fs.readFile("./demo2.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
resolve();
