/* let n = 5;

for (i = n; i > 0; i -= 1){
    console.log("*".repeat(n - i))
} */

let n = 5;
let symbol = "*";
let inputLine = '';

for (let i = 1; i <= n; i +=1){
    inputLine += symbol;
    console.log(inputLine)
}