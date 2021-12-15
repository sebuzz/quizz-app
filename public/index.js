const button = document.querySelector(".ShowAnswer");

const answer = document.querySelector(".Answer");

const buttonSelected = "ShowAnswer";

const answerShowing = "Answer--showing";

button.addEventListener("click", ev => {
	answer.classList.toggle("Answer--showing");
});

const bookmark = document.querySelector(".Bookmark");

const bookmarked = document.querySelector(".Card-bookmarkIcon--bookmarked");
