function filterEvenNumbers(arr: number[]): number[] {
    let result: number[] = arr.filter(item => item % 2 === 0);
    return result;
}

// Example usage
const inputArray: number[] = [1, 2, 3, 4, 5, 6];
const evenNumbers: number[] = filterEvenNumbers(inputArray);
console.log(evenNumbers);
