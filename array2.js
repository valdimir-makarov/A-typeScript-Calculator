function filterEvenNumbers(arr) {
    var result = arr.filter(function (item) { return item % 2 === 0; });
    return result;
}
// Example usage
var inputArray = [1, 2, 3, 4, 5, 6];
var evenNumbers = filterEvenNumbers(inputArray);
console.log(evenNumbers);
