//5: Electricity Bill Calculator

let units = 150;
let bill = 0;
let category = 2;

switch (category) {
    case 1:
        bill = units * 2;
        break;

    case 2:
        bill = (100 * 2) + ((units - 100) * 3);
        break;

    case 3:
        bill = (100 * 2) + (100 * 3) + ((units - 200) * 5);
        break;

    default:
        console.log("Invalid category");
}

if (category >= 1 && category <= 3) {
    console.log("Units used:", units);
    console.log("Electricity bill: ₹", bill); 
}
   

 
