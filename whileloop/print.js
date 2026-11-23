let n = 10;
let num = 2;

while (num <= n) {
    let i = 2;
    let isPrime = true;

    while (i < num) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime === true) {
        console.log(num);
    }

    num++;
}