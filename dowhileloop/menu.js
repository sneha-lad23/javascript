let choice;

do {
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    choice = 2;

    let a = 10;
    let b = 5;

    switch (choice) {
        case 1:
            console.log("Answer:", a + b);
            break;

        case 2:
            console.log("Answer:", a - b);
            break;

        case 3:
            console.log("Answer:", a * b);
            break;

        case 4:
            console.log("Answer:", a / b);
            break;

        default:
            console.log("Invalid choice");
    }

} while (false);