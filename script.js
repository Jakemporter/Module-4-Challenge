var rootEl = $("#root");

var answerOptions = rootEl.children("section").children("ol");
var questionAsked = rootEl.children("section").children("h2");

var questions = [
  "Commonly used data types Do Not include:",
  "The condition in an if / else statement is enclosed with _____.",
  "Arrays in Javascript can be used to store ____.",
  "String values must be enclosed within ___ when being assigned to variables.",
];

var questionOneAnswers = ["Strings", "Booleans", "Alerts", "Numbers"];
var questionTwoAnswers = ["Quotes", "Curely Brackets", "Parenthesis", "Square Brackets"];
var questionThreeAnswers = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"];
var questionFourAnswers = ["Commas", "Curly Brackets", "Quotes", "Parenthesis"];
var questionFiveAnswers = [];

questionAsked.text(questions[0]);

answerOptions.children("#Answer-One").text();

function countdown() {
  var timeEl = rootEl.children("header").children("#Timer");
  var secondsLeft = 60;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text(secondsLeft + " seconds left.");
    if (secondsLeft === 0) {
      rootEl.children("#alert").children("h2").text("Game Over");
      clearInterval(timerInterval);
    }
  }, 1000);
}
var startGame = rootEl.children("section").children("#Start-Game");

startGame.on("click", countdown);
