const fs = require("fs");

//METHODS
// 1.writeFileSync
// 2.readFileSync
// 3.appendFileSync
// 4.unlinkSync
// 5.mkdirSync
// 6.rmdirSync

//Tocreate a file with content
// fs.writeFileSync(
//   "./content.txt",
//   "Ajith Kumar, fondly known as Thala 💪, is a Tamil cinema superstar 🎬 with a massive fan following. He is a versatile actor known for movies like Mankatha, Vedalam, and Viswasam 🔥. Apart from acting, he is a passionate car racer 🏎️ and a philanthropist ❤️. With no social media presence, he remains a humble and stylish icon ⭐."
// );

//to fetch the data from the file
// const data = fs.readFileSync("./content.txt", "utf-8");

// fs.appendFileSync("./content.txt", "\n THALA POLA VARUMA");
// const data = fs.readFileSync("./content.txt", "utf-8");
// console.log(data);

// fs.unlinkSync("./content.txt");
// fs.mkdirSync("./Lawda");
fs.rmdirSync("./Lawda");

///CREATING REACT APP USING NODEJS FS MODULES
// fs.mkdirSync("./React-App");
// fs.mkdirSync("./React-App/public");
// fs.mkdirSync("./React-App/src");
// fs.mkdirSync("./React-App/src/components");
// fs.writeFileSync("./React-App/src/components/Home.jsx", "");
// fs.writeFileSync("./React-App/src/components/App.jsx", "");
// fs.writeFileSync("./React-App/Main.jsx", "");
// fs.writeFileSync("./React-App/index.html", "");
// fs.writeFileSync("./React-App/package.json", "");
