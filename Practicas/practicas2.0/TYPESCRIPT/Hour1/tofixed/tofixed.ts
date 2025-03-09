let num: number = 5.678;
console.log(num.toFixed()); // 6

let num2: number = 5.678;
console.log(num2.toFixed(2)); // 5.68
console.log(num2.toFixed(1)); // 5.7
console.log(num2.toFixed(0)); // 6

let num3: number = 4.5;
let fixedNum: string = num3.toFixed(2);

console.log(typeof fixedNum); // string
