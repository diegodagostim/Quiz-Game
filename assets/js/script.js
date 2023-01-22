//Arrys of question and answers
var quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Toulouse",
      b: "Paris",
      c: "Nice",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the main language in UK?",
    answers: {
      a: "Spanihs",
      b: "French",
      c: "English",
    },
    correctAnswer: "c",
  },
  {
    question: "What is color of the white horse of the King?",
    answers: {
      a: "Brown",
      b: "White",
      c: "Black",
    },
    correctAnswer: "b",
  },
  {
    question: "What are the colors of the japanese flag?",
    answers: {
      a: "Gray and White",
      b: "White and Red",
      c: "Red and Blue",
    },
    correctAnswer: "b",
  },
];

//Project variables
var question = document.querySelector("question");
var choices = document.querySelector("choices");
var winCounter = 0;
var loseCounter = 0;
var timer;
var timerCount;

//Add quiz mains function and children functions

//call the function
