var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "aniket",
    score: 6,
  },

  {
    name: "ritesh",
    score: 3,
  },
]

// array of objects
var questions = [{
  question: "what is the real name of doctor strange ? ",
  answer: "Stephen Vincent Strange"
}, {
  question: "what is real name of hulk ? ",
  answer: "Robert Bruce Bannerr"
},

{
  question: "how many infinity stones are there avengers ? ",
  answer: "six"
},

                 {
  question: "what is the name of planet of thor ? ",
  answer: "Asgard"
},
                  {
  question: "real name of caption marvel  ? ",
  answer: "Carol Danvers"
},
                 
                 
{
  question: "Do you know what's Spiderman's real name?",
  answer: "Peter Parker"
}];

function welcome() {
 var userName = readlineSync.question("May i have your name please:  ");

  console.log("Hey welcome  " + userName + "  there is a quiz for you to proove that you are a marvel universe fan");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("have a look at the high scores ");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();

