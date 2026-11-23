
let num = 234;
let product = 1;

for (; num > 0;) {
    let digit = num % 10;
    product = product * digit;
    num = Math.floor(num / 10);
}

console.log("Product of digits:", product);
