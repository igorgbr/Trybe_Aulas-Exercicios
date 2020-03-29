/* let n = 15;

for (i = 1; i < n; i += 1){
    console.log("*".repeat(n))
} */

let n = 5;
let symbol = "*";
let inputLine = '';

for (let i = 0; i < n; i += 1) {
    inputLine += symbol;
}
for(let i = 0; i < n; i += 1) {
    console.log(inputLine)
}