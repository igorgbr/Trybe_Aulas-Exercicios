let n = 7;
let lineInput = [];
let baseMatrix = [];
let symbol = '*';
let matrix = [];
let midOfMatrix = (n + 1) / 2;
let controlLeft = 1;
let controlRight = n - 2;
for (let lineColumn = 0; lineColumn < n; lineColumn++) {
  baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex++) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput[lineColumn] = symbol;
    } else {
      lineInput[lineColumn] = ' ';
    }
  }
  matrix[lineIndex] = lineInput;
  controlLeft++;
  controlRight--;
  lineInput = [];
  if (controlLeft > controlRight) break;
}
let result = '';
for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex--) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
}