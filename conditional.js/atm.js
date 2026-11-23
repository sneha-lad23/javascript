//4: Menu-driven ATM Program

let balance = 5000;
let choice = 1;
let amount = 1000; 

switch (choice) {
    case 1:
        console.log("Your balance is:", balance);
        break;

    case 2:
        balance = balance + amount;
        console.log("Amount deposited:", amount);
        console.log("New balance:", balance);
        break;

    case 3:
        if (amount <= balance) {
            balance = balance - amount;
            console.log("Amount withdrawn:", amount);
            console.log("Remaining balance:", balance);
        } else {
            console.log("Insufficient balance");
        }
        break; 

    case 4: 
        console.log("Thank you for using ATM");
        break;

    default:
        console.log("Invalid choice");
}    


