import fs from "fs/promises";
let a = await fs.readFile("sukriti.txt");
console.log(a.toString())
