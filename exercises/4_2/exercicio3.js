/* let num = 5;
let n = num + 1;

for (i = n; i > 0; i -= 1){
    console.log(" ".repeat(n + i) + "*".repeat(n - i))
} */

let n = 5;
let symbol = "*";
let inputLine = '';
let inputPosition = n;

for (let i = 0; i < n; i += 1) {
    for (let j = 0; j <= n; j += 1){
        if (j < inputPosition) {
            inputLine += ' ';
        } else {
            inputLine += symbol;
        }
    }

    inputPosition -= 1;
    console.log(inputLine)
    inputLine = '';
}