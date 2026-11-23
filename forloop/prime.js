
let num = 7;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime === true) {
    console.log("Prime number");
} else {
    console.log("Not a prime number");
}
