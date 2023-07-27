console.log("js-loaded");

let pScore = 0;


let currentQuestion = 0;

// Storing Question
let questionEl = document.querySelector("#ques");
// Storing button Elements
let btnEl = document.querySelectorAll("#allBtns button");
// Storing next Button
let scoreEl = document.querySelector("#score");

let myQuestions = [
  {
    question: "What is the capital of Canada?",
    answers: [
      { option: "Toronto", correct: false },
      { option: "Montreal", correct: false },
      { option: "Ottawa", correct: true },
      { option: "Vancouver", correct: false }
    ]
  },
  {
    question: "How many eyes does a Bee have?",
    answers: [
      { option: "5", correct: true },
      { option: "2", correct: false },
      { option: "4", correct: false },
      { option: "3", correct: false }
    ]
  },
  {
    question: "How many ribs are in human body?",
    answers: [
      { option: "20", correct: false },
      { option: "24", correct: true },
      { option: "22", correct: false },
      { option: "18", correct: false }
    ]
  },
  {
    question: "What animal have same teeth as humans?",
    answers: [
      { option: "Giraffe", correct: true },
      { option: "Lion", correct: false },
      { option: "Bear", correct: false },
      { option: "Horse", correct: false }
    ]
  },
  {
    question: "Which is the only edible food that never goes bad?",
    answers: [
      { option: "Rice", correct: false },
      { option: "Seeds", correct: false },
      { option: "Beans", correct: false },
      { option: "Honey", correct: true }
    ]
  },
  {
    question: "What is the most common letter in the English alphabet?",
    answers: [
      { option: "A", correct: false },
      { option: "S", correct: false },
      { option: "E", correct: true },
      { option: "I", correct: false }
    ]
  },
  {
    question: "What is the driest continent?",
    answers: [
      { option: "Africa", correct: false },
      { option: "Antarctica", correct: true },
      { option: "South America", correct: false },
      { option: "Asia", correct: false }
    ]
  },
  {
    question: "Which is the only edible food that never goes bad?",
    answers: [
      { option: "Rice", correct: false },
      { option: "Seeds", correct: false },
      { option: "Dried Beans", correct: false },
      { option: "Honey", correct: true }
    ]
  }
];



function init() {
  renderQuestion();
}

function renderQuestion() {
  // Accessing the question from the array
  questionEl.innerHTML = myQuestions[currentQuestion].question

  // Accessing the option element from the array
  optionEl = myQuestions[currentQuestion].answers;

  btnEl.forEach(function(btn, index) {
    btn.innerText = myQuestions[currentQuestion].answers[index].option;
  })
  scoreEl.innerHTML = "Current Score: " + pScore;
}

btnEl.forEach(function(btn) {
  btn.addEventListener("click", handleClick)
});



function handleClick(event) {

 currentElementVal = event.target.innerHTML
  
 userRes = myQuestions[currentQuestion].answers.find((answer) => {
  return currentElementVal === answer.option

} )

  if (userRes.correct === true){
    pScore++;
  }
  currentQuestion++;
  if (currentQuestion < myQuestions.length) {
    renderQuestion();
  }
  else {
    let triviaContainer = document.querySelector(".container");
    triviaContainer.innerHTML = `<h1>You're Done! You got ${pScore} questions correct.</h1>`
  }
}

function resetGame() {
  currentQuestion = 0;
  pScore = 0;
  btnEl.forEach(function(btn) {
  });
  renderQuestion();
}
init();






