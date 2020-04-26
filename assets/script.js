const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const highScore= document.getElementById("highScore");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scoreContainer = document.getElementById("scoreContainer");

let questions = [
    { question : "Inside which HTML do we put the JavaScript?",
    choiceA : "<script>",
    choiceB : "<scripting>",
    choiceC : "<js>",
    correct : "A"
    },
    { question : "Where is the correct place to insert a JavaScript?",
    choiceA : "The <body> section",
    choiceB : "<Both the <head> and <body> section",
    choiceC : "The <head> section",
    correct : "B"

    },
    { question : "How do you call a functionnamed myFunction?",
    choiceA : "myFunction()",
    choiceB : "call function myFunction()",
    choiceC : "call myFunction()",
    correct : "A"

    }

];

const lastQuestion = questions,length - 1;
let runningQuestion = 0;

question.innerHtML = "<p>" + 