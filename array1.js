var String1 = ['bubun', 'repeat'];
var result = String1.reduce(function (a, b) { return a + b; });
console.log(result);
var result1 = "";
for (var i = result.length - 1; i >= 0; i--) {
    result1 = result1 + result[i];
}
console.log(result1);
