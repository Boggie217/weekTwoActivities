console.log("   |    |")
console.log("   |    |")
console.log("   |    |")
console.log("------------")
console.log("   |    |")
console.log("   |    |")
console.log("   |    |")
console.log("------------")
console.log("   |    |")
console.log("   |    |")
console.log("   |    |")





let userAge = 25;
let userName = "Aloy";
let favouriteColor = "purple";

console.log(`Hi my name is ${userName}, i am ${userAge} years old and my favourite color is ${favouriteColor}`)




let breakfast = "cereal"
let lunch = "sausages"
let dinner = "pizza"

console.log(`today for breakfast i had ${breakfast}, for lunch i had ${lunch} and for dinner i had ${dinner}`)

const startDate = new Date('2024-02-02');
const endDate = new Date('2023-03-07');

// Calculate the time difference in milliseconds
const timeDiff = endDate.getTime() - startDate.getTime();

// Convert milliseconds to days
const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

console.log('Number of days:', daysDiff);

//don't know how to the board with varname. I'll research it
let age = 17
let country = "uk"
if (age > 17 && country == "uk"){
    console.log("Yes i can serve you")
}
else {console.log("You aren't old enough")}




const topping = prompt("Enter a pizza topping:");

switch (topping) {
  case "Cheese":
    console.log(`${topping} is an important ingredient for my pizza.`);
    break;
  case "Ham & mushroom":
    console.log(`${topping} is an important ingredient for my pizza.`);
    break;
  case "Pepperoni":
    console.log(`${topping} is an important ingredient for my pizza.`);
    break;
  case "Pineapple":
    console.log(`${topping} should not be on a pizza.`);
    break;
  default:
    console.log(`I don't have a preference for ${topping} on my pizza.`);
    break;
}