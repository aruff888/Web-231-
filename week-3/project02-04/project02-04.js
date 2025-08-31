/*    JavaScript 7th Edition 
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Amanda Ruff
      Date:  08/31/2025 

      Filename: project02-04.js
*/

// Menu item prices
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;

// Sales tax rate
const SALES_TAX = 0.07;  

// Event handlers for menu items (moved OUTSIDE calcTotal)
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

function calcTotal() {
  // Start cost at 0
  let cost = 0;

  // Check which items are selected
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Add costs using comparison operator
  cost += (buyChicken ? CHICKEN_PRICE : 0);
  cost += (buyHalibut ? HALIBUT_PRICE : 0);
  cost += (buyBurger ? BURGER_PRICE : 0);
  cost += (buySalmon ? SALMON_PRICE : 0);
  cost += (buySalad ? SALAD_PRICE : 0);

  // Display the food total
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Calculate tax
  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Calculate total cost
  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

