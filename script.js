//A. To-Do List Logic:
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Task complete on click
  li.onclick = () => li.style.textDecoration = "line-through";

  document.getElementById("taskList").appendChild(li);
  taskInput.value = ""; // clear input box
}

//B. Motivational Quote (API):
// Step 1: Apne motivational quotes ka array banao
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Believe in yourself and all that you are.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "Small steps every day lead to big results.",
  "Hard work beats talent when talent doesn’t work hard."
];

// Step 2: Button click pe random quote dikhane wala function
function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quoteText").textContent = `"${randomQuote}"`;
}

