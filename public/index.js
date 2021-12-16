// const button = document.querySelector(".ShowAnswer");

// const answer = document.querySelector(".Answer");

// const buttonSelected = "ShowAnswer";

// const answerShowing = "Answer--showing";

// button.addEventListener("click", ev => {
// 	answer.classList.toggle("Answer--showing");
// });

// const bookmarks = document.querySelectorAll(".Bookmark");

// bookmarks.forEach((bookmark, index) => {
// 	const bookmarkIcon = bookmark.querySelector(".Card-bookmarkIcon");
// 	const bookmarked = "Card-bookmarkIcon--bookmarked";

// 	bookmark.addEventListener("click", ev => {
// 		bookmarkIcon.classList.toggle(bookmarked);
// 	});
// });

// refactored bookmark script
const cards = document.querySelectorAll('.js-cards');
cards.forEach((card, i) => {
	console.log(card, i);
	const bookmark = card.querySelector('.js-bookmark');
	const bookmarked = 'js-bookmarked';
	bookmark.addEventListener('click', ev => {
		bookmark.classList.toggle(bookmarked);
	});
});


const buttons = document.querySelectorAll(".ShowAnswer");
const answer = document.querySelectorAll(".Answer");
const answerShowing = "Answer--showing";

buttons.forEach((button, index) => {
	const buttonSelected = "ShowAnswer";
	button.addEventListener("click", ev => {
		answer[index].classList.toggle(answerShowing);
	});
});
