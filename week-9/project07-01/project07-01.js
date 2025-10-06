"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Amanda Ruff
      Date:   10/06/25

      Filename: project07-01.js
*/

document.getElementById("signup").addEventListener("submit", function(e) {
   // Step 4: Prevent the form from submitting and reloading the page
   e.preventDefault();

   // Step 5: Create regular expression variables
   let regex1 = /[A-Z]/;      // Uppercase letter
   let regex2 = /\d/;         // Digit
   let regex3 = /[!$#%]/;     // Special character

   // Step 6: Create if...else statement for password validation
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters.";
   } else if (!regex1.test(pwd)) {
      feedback.textContent = "Your password must include an uppercase letter.";
   } else if (!regex2.test(pwd)) {
      feedback.textContent = "Your password must include a number.";
   } else if (!regex3.test(pwd)) {
      feedback.textContent = "Your password must include one of the following: !$#%.";
   } else {
      // All conditions met — submit the form
      document.getElementById("signup").submit();
   }
});
