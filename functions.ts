type MyCallback = (data: number) => number;

function Sum(Arr: number[], callBack: MyCallback): number {
    let sum: number = 0;

    for (const i in Arr) {
        sum += callBack(Arr[i]);
    }

    return sum;
}

const Sum2: MyCallback = (data) => (data + data);

const arr = [1, 3, 4, 5, 6, 7];

let result = Sum(arr, Sum2);
console.log(result);
