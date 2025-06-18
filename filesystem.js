const fs = require("fs");
console.log(fs);
console.log("starting");
// fs.writeFileSync("sukriti.txt", "studying yayayayay");
fs.writeFile("sukriti2.txt", "studying moree", () => {
  console.log("done");
  fs.readFile("sukriti2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("sukriti.txt", " not so fun", (e, d) => {
  console.log(d);
});
console.log("endingg");