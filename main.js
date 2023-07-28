console.log("js-loaded");

let pScore = 0;
let currentQuestion = 0;

let questionEl = document.querySelector("#ques");
let btnEl = document.querySelectorAll("#allBtns button");
let scoreEl = document.querySelector("#score");

let myQuestions = [
  {
    question: "1. What is the capital of Canada?",
    answers: [
      { option: "Toronto", correct: false },
      { option: "Montreal", correct: false },
      { option: "Ottawa", correct: true },
      { option: "Vancouver", correct: false }
    ]
  },
  {
    question: "2. How many eyes does a Bee have?",
    answers: [
      { option: "5", correct: true },
      { option: "2", correct: false },
      { option: "4", correct: false },
      { option: "3", correct: false }
    ]
  },
  {
    question: "3. How many ribs are in human body?",
    answers: [
      { option: "20", correct: false },
      { option: "24", correct: true },
      { option: "22", correct: false },
      { option: "18", correct: false }
    ]
  },
  {
    question: "4. What animal have same teeth as humans?",
    answers: [
      { option: "Giraffe", correct: true },
      { option: "Lion", correct: false },
      { option: "Bear", correct: false },
      { option: "Horse", correct: false }
    ]
  },
  {
    question: "5. What is the most common letter in the English alphabet?",
    answers: [
      { option: "A", correct: false },
      { option: "S", correct: false },
      { option: "E", correct: true },
      { option: "I", correct: false }
    ]
  },
  {
    question: "6. What is the driest continent?",
    answers: [
      { option: "Africa", correct: false },
      { option: "Antarctica", correct: true },
      { option: "South America", correct: false },
      { option: "Asia", correct: false }
    ]
  },
  {
    question: "7. What is the national flower of Japan?",
    answers: [
      { option: "Cherry Blossom", correct: true },
      { option: "Lotus", correct: false },
      { option: "Orchid", correct: false },
      { option: "Rose", correct: false }
    ]
  },
  {
    question: "8. What is the capital of Brazil?",
    answers: [
      { option: "Buenos Aires", correct: false },
      { option: "Rio De Janerio", correct: false },
      { option: "Sao Paulo", correct: false },
      { option: "Brasilla", correct: true }
    ]
  },
  {
    question: "9. How many legs does a spider have?",
    answers: [
      { option: "Four", correct: false },
      { option: "Six", correct: false },
      { option: "Eight", correct: true },
      { option: "Ten", correct: false }
    ]
  },
  {
    question: "10. How many bones are there in an adult human hand?",
    answers: [
      { option: "Fourteen", correct: false },
      { option: "Eighteen", correct: true },
      { option: "Twenty Seven", correct: false },
      { option: "Thirty", correct: false }
    ]
  },
  {
    question: "11. How many muscles are there in an human body?",
    answers: [
      { option: "458", correct: false },
      { option: "665", correct: false },
      { option: "600", correct: true },
      { option: "542", correct: false }
    ]
  },
  {
    question: "12. How many time zones are in Russia?",
    answers: [
      { option: "8", correct: false },
      { option: "11", correct: true },
      { option: "7", correct: false },
      { option: "9", correct: false }
    ]
  },
  {
    question: "13. Which year the Titanic sink?",
    answers: [
      { option: "1904", correct: false },
      { option: "1912", correct: true },
      { option: "1916", correct: false },
      { option: "1922", correct: true }
    ]
  },
  {
    question: "14. Which continent has the most countries?",
    answers: [
      { option: "Asia", correct: false },
      { option: "Africa", correct: true },
      { option: "South America", correct: false },
      { option: "Europe", correct: false }
    ]
  },
  {
    question: "15. Where is the biggest cave in USA?",
    answers: [
      { option: "West Virgina", correct: false },
      { option: "Kentucky", correct: true },
      { option: "California", correct: false },
      { option: "Virginia", correct: true }
    ]
  },
  {
    question: "16. How many justices serve on the United States Supreme Court?",
    answers: [
      { option: "7", correct: false },
      { option: "9", correct: true},
      { option: "13", correct: false },
      { option: "11", correct: false }
    ]
  },
  {
    question: "17.The Hoover Dam, an engineering marvel is located on which river?",
    answers: [
      { option: "Colorado River", correct: true },
      { option: "Mississippi River", correct: false },
      { option: "Ohio River", correct: false },
      { option: "Columbia River", correct: false }
    ]
  },
  {
    question: "18. What is the largest freshwater lake by surface area in the United States?",
    answers: [
      { option: "Lake Superior", correct: true },
      { option: "Lake Michigan", correct: false },
      { option: "Lake Erie", correct: false },
      { option: " Lake Huron", correct: false }
    ]
  },
  {
    question: "19. What is the national bird of the United States?",
    answers: [
      { option: "American Robin", correct: false },
      { option: "Blue Jay", correct: false },
      { option: "Falcon", correct: false },
      { option: "Bald Eagle", correct: true }
    ]
  },  
  {
    question: "20. Which city hosted the 2000 Summer Olympics?",
    answers: [
      { option: "Rome, Italy", correct: false },
      { option: "Tokoyo, Japan", correct: false },
      { option: "CapeTown, South Africa", correct: false },
      { option: "Sydney, Australia", correct: true }
    ]
  },  
];

function init() {
  renderQuestion();
}

function renderQuestion() {

  questionEl.innerHTML = myQuestions[currentQuestion].question
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
    triviaContainer.innerHTML = `<h1>Game Finished! You got ${pScore} correct answers.</h1>`
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






