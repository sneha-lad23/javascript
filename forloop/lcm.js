
let num1 = 4;
let num2 = 6;
let lcm = num1 > num2 ? num1 : num2;

for (; ; lcm++) {
    if (lcm % num1 === 0 && lcm % num2 === 0) {
        break;
    }
}

console.log("LCM:", lcm);
