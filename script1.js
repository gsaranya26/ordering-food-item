
document.write("Menu<br>");
document.write("1. Pizza Rs 200<br>");
document.write("2. Burger Rs 300<br>");
document.write("3. Chicken Biryani Rs 250<br>");
document.write("4. Apple Juice Rs 100<br>");
document.write("5. Idli Rs 80<br>");

let choice = prompt("Enter your choice (1-5):");
let price = 0;

switch (parseInt(choice)) {
    case 1:
        price = 200;
        break;
    case 2:
        price = 300;
        break;
    case 3:
        price = 250;
        break;
    case 4:
        price = 100;
        break;
    case 5:
        price = 80;
        break;
    default:
        alert("Invalid choice");
        break;
}

if (price > 0) {
    let quantity = prompt("Enter your quantity:");
    let result = price * parseInt(quantity);
    alert("Total: Rs " + result);

    if (result > 500) {
        let discount = result * 0.1;
        let finalAmount = result - discount;
        alert("You received a 10% discount. Final amount: Rs " + finalAmount);
    }
}
