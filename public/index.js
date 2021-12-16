// refactored bookmark script
const cards = document.querySelectorAll('.js-cards');


cards.forEach((card) => {
	// bookmark
	const bookmark = card.querySelector('.js-bookmark');
	const bookmarked = 'Card-bookmarkIcon--bookmarked';
	bookmark.addEventListener('click', ev => {
		bookmark.classList.toggle(bookmarked);
	});

	// show answer button
	const button = card.querySelector('.js-button');
	const answer = card.querySelector('.js-answer');
	const answerShowing = "Answer--showing";
	button.addEventListener('click', ev => {
		answer.classList.toggle(answerShowing);
	});
});


// const buttons = document.querySelectorAll(".ShowAnswer");
// const answer = document.querySelectorAll(".Answer");
// const answerShowing = "Answer--showing";

// buttons.forEach((button, index) => {
// 	const buttonSelected = "ShowAnswer";
// 	button.addEventListener("click", ev => {
// 		answer[index].classList.toggle(answerShowing);
// 	});
// });
