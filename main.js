console.log("js-loaded");

let pScore;
 let results;


let btnEl1 = document.querySelector("#buttonOne");
let btnEl2 = document.querySelector("#buttonTwo");
let btnEl3 = document.querySelector("#buttonThree");
let btnEl4 = document.querySelector("#buttonFour");



let myQuestions = [ 
 {
    question: "What is the capital of Canada?",
    answers: [
    {option: "Toronto", correct: false},
    {option: "Montreal", correct: false},
    {option: "Ottawa", correct: true},
    {option: "Vancouver", correct: false}
]
},
 {
    question: "How many eyes does a Bee have?",
    answers: [
    {option: "5", correct: true},
    {option: "2", correct: false},
    {option: "4", correct: false},
    {option: "3", correct: false}
]
}, 
 {
    question: "How many ribs are in human body?",
    answers: [
    {option: "20", correct: false},
    {option: "24", correct: true},
    {option: "22", correct: false},
    {option: "18", correct: false}
]
}, 
 {
    question: "What animal have same teeth as humans?",
    answers: [
    {option: "Giraffe", correct: true},
    {option: "Lion", correct: false},
    {option: "Bear", correct: false},
    {option: "Horse", correct: false}
]
},  
 {
    question: "Which is the only edible food that never goes bad?",
    answers: [
    {option: "Rice", correct: false},
    {option: "Seeds", correct: false},
    {option: "Dried Beans", correct: false},
    {option: "Honey", correct: true}
]
}
];

let qEl = document.querySelector("#ques");
qEl.innerHTML = myQuestions[0].question

 function init() {

   myQuestions.forEach(question){
    return 
     
   }
}
 
    