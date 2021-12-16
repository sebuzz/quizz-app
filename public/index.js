// refactored bookmark script
const cards = document.querySelectorAll('.js-cards');
cards.forEach((card, i) => {
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
