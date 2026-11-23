
let n = 10;

for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === true) {
        console.log(num);
    }
}
