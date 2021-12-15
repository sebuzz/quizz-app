const button = document.querySelector(".ShowAnswer");

const answer = document.querySelector(".Answer");

const buttonSelected = "ShowAnswer";

const answerShowing = "Answer--showing";

button.addEventListener("click", ev => {
	answer.classList.toggle("Answer--showing");
});
