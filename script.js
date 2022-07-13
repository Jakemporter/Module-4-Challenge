var rootEl = $("#root");

var answerOptions = rootEl.children("section").children("ol");
var questionAsked = rootEl.children("section").children("h2");
var info = rootEl.children("#alert").children("h2");
var scoreEl = rootEl.children("#score").children("h4");

var questions = [
  "Commonly used data types Do Not include:",
  "The condition in an if / else statement is enclosed with _____.",
  "Arrays in Javascript can be used to store ____.",
  "String values must be enclosed within ___ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];

var answers = [
  ["Strings", "Booleans", "Alerts", true, "Numbers"],
  ["Quotes", "Curely Brackets", "Parenthesis", true, "Square Brackets"],
  ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above", true],
  ["Commas", "Curly Brackets", "Quotes", true, "Parenthesis"],
  ["Javascript", "Terminal/Bash", "For Loops", "Console.log", true],
];
var score = 0;

var secondsLeft = 60;
function countdown() {
  var timeEl = rootEl.children("header").children("#Timer");
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text(secondsLeft + " seconds left.");
    if (secondsLeft === 0) {
      info.text("Game Over");
      clearInterval(timerInterval);
    }
  }, 1000);
  game();
}
var startGame = rootEl.children("section").children("#Start-Game");

startGame.on("click", countdown);

button1 = answerOptions.children("li").children("#Answer-One");
button2 = answerOptions.children("li").children("#Answer-Two");
button3 = answerOptions.children("li").children("#Answer-Three");
button4 = answerOptions.children("li").children("#Answer-Four");
buttonList = answerOptions.children("li").children("button");

time = new Date();
time = time.getDate();

i = 0;
var player;
var highScores = [];
function game() {
  if (i >= questions.length) {
    player = window.prompt("Enter Initials");
    alert("Score = questions correct + time left");
    score += secondsLeft;
    highScores.push(player + ": " + score);
    localStorage.setItem(`player${time}`, player);
    localStorage.setItem(`Score${player}`, highScores);
    console.log(localStorage.getItem(`Score${player}`));
    window.location.href = "./high-scores.html";
    return;
  }
  startGame.css("display", "none");
  if (secondsLeft > 0) {
    while (i < questions.length) {
      console.log(secondsLeft);
      questionAsked.text(questions[i]);
      if (answers[i][1] === true) {
        button1.attr("correct", true);
        button1.text(answers[i][0]);
        button1.attr("data-answer", answers[i][0]);
        button2.text(answers[i][2]);
        button2.attr("data-answer", answers[i][2]);
        button3.text(answers[i][3]);
        button3.attr("data-answer", answers[i][3]);
        button4.text(answers[i][4]);
        button4.attr("data-answer", answers[i][4]);
      } else if (answers[i][2] === true) {
        button1.text(answers[i][0]);
        button1.attr("data-answer", answers[i][0]);
        button2.text(answers[i][1]);
        button2.attr("correct", true);
        button2.attr("data-answer", answers[i][1]);
        button3.text(answers[i][3]);
        button3.attr("data-answer", answers[i][3]);
        button4.text(answers[i][4]);
        button4.attr("data-answer", answers[i][4]);
      } else if (answers[i][3] === true) {
        button1.text(answers[i][0]);
        button1.attr("data-answer", answers[i][0]);
        button2.text(answers[i][1]);
        button2.attr("data-answer", answers[i][1]);
        button3.text(answers[i][2]);
        button3.attr("correct", true);
        button3.attr("data-answer", answers[i][2]);
        button4.text(answers[i][4]);
        button4.attr("data-answer", answers[i][4]);
      } else if (answers[i][4] === true) {
        button1.text(answers[i][0]);
        button1.attr("data-answer", answers[i][0]);
        button2.text(answers[i][1]);
        button2.attr("data-answer", answers[i][1]);
        button3.text(answers[i][2]);
        button3.attr("data-answer", answers[i][2]);
        button4.text(answers[i][3]);
        button4.attr("data-answer", answers[i][3]);
        button4.attr("correct", true);
      }
      break;
    }
  }
}
buttonList.on("click", function (event) {
  console.log($(event.target).attr("data-answer"));
  console.log($(event.target).attr("correct"));
  if ($(event.target).attr("correct")) {
    info.text("Correct");
    i++;
    score++;
    scoreEl.text("Score: " + score);
    game();
  } else {
    info.text("Incorrect");
    i++;
    scoreEl.text("Score: " + score);
    secondsLeft -= 10;
    game();
  }
});

var rootEl2 = $("#root2");
function highScoresPage(event) {
  var listEl = rootEl2.children("header").children("#high-score-list");
  event.preventDefault();
  var player = localStorage.getItem(`player${time}`);
  var highScore = localStorage.getItem(`Score${player}`);
  $.each(listEl, function () {
    highScores.push(highScore);
  });
  listEl.text(highScores);
  console.log(rootEl2);
  //rootEl.children("header").children("ol").children("li").text(localStorage.getItem("Score"));
  // console.log(localStorage.getItem(`Score${player}`));
  // listEl.append("<li>" + localStorage.getItem(`Score${player}`) + "</li>");
  var clearEl = rootEl2.children("header").children("#clear");
  clearEl.on("click", clear);
}
var loadButtonEl = rootEl2.children("header").children("#load");
loadButtonEl.on("click", highScoresPage);

function clear() {
  localStorage.clear();
  location.reload();
}

highScoresPage;
