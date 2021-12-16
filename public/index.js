// const button = document.querySelector(".ShowAnswer");

// const answer = document.querySelector(".Answer");

// const buttonSelected = "ShowAnswer";

// const answerShowing = "Answer--showing";

// button.addEventListener("click", ev => {
// 	answer.classList.toggle("Answer--showing");
// });

// ***************

// const bookmarks = document.querySelectorAll(".Bookmark");

// bookmarks.forEach((bookmark, index) => {
// 	const bookmarkIcon = bookmark.querySelector(".Card-bookmarkIcon");
// 	const bookmarked = "Card-bookmarkIcon--bookmarked";

// 	bookmark.addEventListener("click", ev => {
// 		bookmarkIcon.classList.toggle(bookmarked);
// 	});
// });

// const buttons = document.querySelectorAll(".ShowAnswer");
// const answer = document.querySelectorAll(".Answer");
// const answerShowing = "Answer--showing";

// buttons.forEach((button, index) => {
// 	const buttonSelected = "ShowAnswer";
// 	button.addEventListener("click", ev => {
// 		answer[index].classList.toggle(answerShowing);
// 	});
// });

const cards = document.querySelectorAll(".js-card");

const bookmarked = "Card-bookmarkIcon--bookmarked";
const answerShowing = "Answer--showing";

console.log([cards]);

// Adjust answer field height based on its content
const answerField = document.querySelectorAll(".js-answer");

window.addEventListener("load", event => {
	answerField.forEach((el, index) => {
		const height = el.scrollHeight;
		el.style.setProperty("--max-height", height + "px");

		console.log(height);
		console.log();
	});
});

cards.forEach(card => {
	//const bookmark = card.querySelector(".js-bookmark");
	const bookmarkIcon = card.querySelector(".js-bookmarkIcon");
	// Toggle Bookmark selection
	bookmarkIcon.addEventListener("click", ev => {
		bookmarkIcon.classList.toggle(bookmarked);
	});

	//Answers
	const showAnswer = card.querySelector(".js-show-answer");
	const answer = card.querySelector(".js-answer");
	// Toggle Answers
	// console.log(showAnswer);
	showAnswer.addEventListener("click", ev => {
		answer.classList.toggle(answerShowing);
	});
});
