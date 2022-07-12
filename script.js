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

var secondsLeft = 60;
function countdown() {
  var timeEl = rootEl.children("header").children("#Timer");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text(secondsLeft + " seconds left.");
    if (secondsLeft === 0) {
      rootEl.children("#alert").children("h2").text("Game Over");
      clearInterval(timerInterval);
    }
  }, 1000);
  questionOne();
}
var startGame = rootEl.children("section").children("#Start-Game");

startGame.on("click", countdown);
function wrongAnswer() {
  secondsLeft - 10;
}

function questionOne() {
  if (secondsLeft > 0) {
    questionAsked.text(questions[0]);
    answerOptions.children("#Answer-One").children("button").text(questionOneAnswers[0]);
    answerOptions.children("#Answer-Two").children("button").text(questionOneAnswers[1]);
    answerOptions.children("#Answer-Three").children("button").text(questionOneAnswers[2]);
    answerOptions.children("#Answer-Four").children("button").text(questionOneAnswers[3]);
  }
  var answerOne = answerOptions.children("#Answer-One").children("button");
  var answerTwo = answerOptions.children("#Answer-Two").children("button");
  var answerThree = answerOptions.children("#Answer-Three").children("button");
  var answerFour = answerOptions.children("#Answer-Four").children("button");
  answerOne.on("click", wrongAnswer);
}
function questionTwo() {}
