const cards = document.querySelectorAll(".js-card");

const bookmarked = "Card-bookmarkIcon--bookmarked";
const answerShowing = "Answer--showing";

const defaultState = JSON.stringify({
	bookmarked: false,
});

// Adjust answer field height based on its content
const answerField = document.querySelectorAll(".js-answer");

window.addEventListener("load", event => {
	answerField.forEach((el, index) => {
		const height = el.scrollHeight;
		el.style.setProperty("--max-height", height + "px");
	});
});

cards.forEach(card => {
	// Get checkbox for each card
	const checkbox = card.querySelector(".js-bookmark");

	const cardId = card.id;

	// Check in localStorage If cardObj exists by cardObj id
	// If True
	// Get bookmarked value
	// If bookmarked value true/false
	// Set checkbox.checked = bookmarkStatus
	// If False
	// Create cardObj

	const bookmarkIcon = card.querySelector(".js-bookmarkIcon");

	// Set current checkbox checked to true if exists

	// Retrieve the JSON string
	// const userStr = localStorage.getItem('user');

	// Parse JSON string to object
	// const userObj = JSON.parse(userStr);

	// Print object attributes
	// console.log(userObj.name);  // Alex
	// console.log(userObj.job);    // Software Engineer

	// Get bookmark status from JSON

	const cardObj = JSON.parse(localStorage.getItem(cardId) ?? defaultState);
	checkbox.checked = cardObj.bookmarked;
	// Toggle Bookmark selection
	checkbox.addEventListener("change", event => {
		// Get bookmark status
		const bookmarkStatus = event.target.checked;

		// Save bookmark status
		const cardObj = { bookmarked: bookmarkStatus };
		localStorage.setItem(cardId, JSON.stringify(cardObj));
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
