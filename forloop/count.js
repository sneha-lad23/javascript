let num = 12345;
let count = 0;

for (; num > 0;) {
    count++;
    num = Math.floor(num / 10);
}

console.log("Total digits:", count);