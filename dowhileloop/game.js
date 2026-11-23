const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 7;

function guessNumber() {
    rl.question("Guess the number (1 to 10): ", (answer) => {
        let guess = Number(answer);

        if (guess === secretNumber) {
            console.log("Correct! You guessed the number.");
            rl.close();
        } else {
            console.log("Wrong guess! Try again.");
            guessNumber();
        }
    });
}

guessNumber();