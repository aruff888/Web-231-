/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Amanda Ruff
      Date:   09/17/25

      Filename: project04-04.js
*/

// Enable strict mode to enforce stricter JavaScript syntax and behavior
"use strict";

// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
// Use "input" event so it reacts immediately as user types
cashBox.addEventListener("input", runTheRegister);
billBox.addEventListener("input", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
   changeBox.value = 0;
   document.getElementById("bill20").innerHTML = 0;
   document.getElementById("bill10").innerHTML = 0;
   document.getElementById("bill5").innerHTML = 0;
   document.getElementById("bill1").innerHTML = 0;
   document.getElementById("coin25").innerHTML = 0;
   document.getElementById("coin10").innerHTML = 0;
   document.getElementById("coin5").innerHTML = 0;
   document.getElementById("coin1").innerHTML = 0;
   document.getElementById("warning").innerHTML = "";
}

// Function to run the cash register
function runTheRegister() {
   zeroTheRegister(); // Reset the values before running the new calculation
   
   // Convert input values from strings to floats for correct math
   let cashValue = parseFloat(cashBox.value);
   let billValue = parseFloat(billBox.value);

   let changeValue = cashValue - billValue;  // Calculate the change 

   try {
      // Check if the cash amount is less than the bill amount
      if (changeValue < 0) {
         // Throw an exception if cash is not enough to cover the bill
         throw new Error("Cash amount doesn’t cover the bill");
      }

      // If no error, display the formatted change value and calculate the currency units
      changeBox.value = formatCurrency(changeValue); // Format and display the change as currency
      calcChange(changeValue); // Call the function to calculate the required units of change (bills and coins)

   } catch (error) {
      // If an error is thrown, set the warning message to the error message
      document.getElementById("warning").innerHTML = error.message;
      changeBox.value = ""; // Clear the change value box if there's an error
   }
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
   // Determine the number of $20 bills
   let bill20Amt = determineCoin(changeValue, 20);
   document.getElementById("bill20").innerHTML = bill20Amt;
   changeValue -=  bill20Amt*20;

   // Determine the number of $10 bills   
   let bill10Amt = determineCoin(changeValue, 10);
   document.getElementById("bill10").innerHTML = bill10Amt;
   changeValue -=  bill10Amt*10;
   
   // Determine the number of $5 bills
   let bill5Amt = determineCoin(changeValue, 5);
   document.getElementById("bill5").innerHTML = bill5Amt;
   changeValue -=  bill5Amt*5;
   
   // Determine the number of $1 bills
   let bill1Amt = determineCoin(changeValue, 1);
   document.getElementById("bill1").innerHTML = bill1Amt;
   changeValue -=  bill1Amt*1;
   
   // Determine the number of quarters
   let coin25Amt = determineCoin(changeValue*100, 25);
   document.getElementById("coin25").innerHTML = coin25Amt;
   changeValue -= coin25Amt*0.25;
   
   // Determine the number of dimes
   let coin10Amt = determineCoin(changeValue*100, 10);
   document.getElementById("coin10").innerHTML = coin10Amt;
   changeValue -= coin10Amt*0.10;
   
   // Determine the number of nickels
   let coin5Amt = determineCoin(changeValue*100, 5);
   document.getElementById("coin5").innerHTML = coin5Amt;
   changeValue -= coin5Amt*0.05;
   
   // Determine the number of pennies
   // The Math.round() method rounds the value to the nearest integer
   let coin1Amt = Math.round(changeValue*100);
   document.getElementById("coin1").innerHTML = coin1Amt;
}

/* ================================================================= */

// Function to determine the largest whole number of currency units that 
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
   // The parseInt() function returns the integer value of the ratio
   return parseInt(cashValue/currencyUnit);
}

// Function to display a numeric value as a text string in the format ##.##
function formatCurrency(value) {
    return value.toFixed(2);
}
