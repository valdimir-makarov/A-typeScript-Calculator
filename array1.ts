let String1: string[] = ['bubun', 'repeat'];
let result = String1.reduce((a, b) => a + b);
console.log(result);

let result1: string = "";
for (let i = result.length - 1; i >= 0; i--) {
    result1 = result1 + result[i];
}
console.log(result1);