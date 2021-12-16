// refactored scripts
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
