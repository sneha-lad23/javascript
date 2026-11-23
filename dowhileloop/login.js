const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let password;
    let attempts = 0;
    let correctPassword = "1234";

    do {
        password = await new Promise((resolve) => {
            rl.question("Enter password: ", resolve);
        });

        attempts++;

        if (password === correctPassword) {
            console.log("Login successful!");
            break;
        } else {
            console.log("Wrong password!");
        }

    } while (attempts < 3);
 
    if (password !== correctPassword) {
        console.log("Your 3 attempts are over.");
    }

    rl.close();
}

main();