interface Calculator {
add:(a:number,b:number)=>number
}

const calculator: Calculator = {
  add: (a, b) => a + b,

};

console.log(calculator.add(2, 4));
