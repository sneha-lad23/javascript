let balance = 5000;
let choice = 1;
let amount = 1000;

do {
    console.log("1. Check Balance");
    console.log("2. Withdraw Money");

    switch (choice) {
        case 1:
            console.log("Your Balance:", balance);
            break;

        case 2:
            if (amount <= balance) {
                balance = balance - amount;
                console.log("Money Withdrawn:", amount);
                console.log("Remaining Balance:", balance);
            } else {
                console.log("Insufficient Balance");
            }
            break;

        default:
            console.log("Invalid Choice");
    }

    choice = 0;

} while (choice !== 0);