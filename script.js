let flashcards = [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" },
  { question: "What is JavaScript?", answer: "Programming language of the Web" }
];

let currentIndex = 0;
let showingAnswer = false;

function showCard() {
  const card = document.getElementById("card-content");
  const content = showingAnswer
    ? flashcards[currentIndex].answer
    : flashcards[currentIndex].question;
  card.innerText = content;
}

function showAnswer() {
  showingAnswer = !showingAnswer;
  showCard();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingAnswer = false;
  showCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingAnswer = false;
  showCard();
}

window.onload = showCard;