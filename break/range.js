let num = 10;

while (num <= 20) {
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
        console.log("First prime number:", num);
        break;
    }

    num++;
}