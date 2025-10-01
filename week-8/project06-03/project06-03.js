"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Amanda Ruff
      Date:   09/30/25

      Filename: project06-03.js
*/

// Declare reference to the useShip element
let useShip = document.getElementById("useShip");

// Add event listener to run the function when clicked
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
  // Check if the useShip checkbox is checked
  if (useShip.checked) {
    // Copy each shipping field to the corresponding billing field
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value  = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value  = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value  = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value      = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value   = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value      = document.getElementById("codeShip").value;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

// Select all text input elements within the form
let formElements = document.querySelectorAll("input[type='text']");

// Store the number of text input elements
let fieldCount = formElements.length;

// Reference the error box element
let errorBox = document.getElementById("errorBox");

// Loop through each text input element and add an event listener for invalid input
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  // Prevent the browser's default invalid input behavior
  evt.preventDefault();

  // Display the custom error message in the error box
  errorBox.textContent = "Complete all highlighted fields";
}
