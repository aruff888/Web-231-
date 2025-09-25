"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Amanda Ruff
      Date:   09/25/25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Add onclick event handler to startQuiz button
startQuiz.onclick = function() {
    // Show the quiz overlay
    overlay.setAttribute("class", "showquiz");

    // Start the countdown, repeating every 1 second
    timeID = setInterval(countdown, 1000);
};

// Function to update the quiz clock every second
function countdown() {
    if (timeLeft === 0) {
        // Stop the countdown
        clearInterval(timeID);

        // Check the answers when time runs out
        let totalCorrect = checkAnswers();

        if (totalCorrect === correctAnswers.length) {
            // Student got 100%
            alert("Congratulations! You got 100%!");
        } else {
            // Student got some incorrect answers
            let totalIncorrect = correctAnswers.length - totalCorrect;
            alert(`You got ${totalIncorrect} out of ${correctAnswers.length} questions incorrect.`);

            // Reset the quiz
            timeLeft = quizTime;
            quizClock.value = timeLeft;
            overlay.setAttribute("class", "hidequiz");
        }
    } else {
        // Decrease the value of timeLeft by 1
        timeLeft--;

        // Set quizClock.value to the updated timeLeft
        quizClock.value = timeLeft;
    }
}




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

