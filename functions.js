function Sum(Arr, callBack) {
    var sum = 0;
    for (var i in Arr) {
        sum += callBack(Arr[i]);
    }
    return sum;
}
var Sum2 = function (data) { return (data + data); };
var arr = [1, 3, 4, 5, 6, 7];
var result = Sum(arr, Sum2);
console.log(result);
