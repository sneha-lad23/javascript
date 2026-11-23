const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    let choice;

    do {
        console.log("Program is running...");

        choice = await new Promise((resolve) => {
            rl.question("Do you want to continue? (Y/N): ", resolve);
        });

    } while (choice.toUpperCase() === "Y");

    console.log("Program stopped.");
    rl.close();
}

main();