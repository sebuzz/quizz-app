const button = document.querySelector(".ShowAnswer");

const answer = document.querySelector(".Answer");

const buttonSelected = "ShowAnswer";

const answerShowing = "Answer--showing";

button.addEventListener("click", ev => {
	answer.classList.toggle("Answer--showing");
});

const bookmarks = document.querySelectorAll(".Bookmark");
console.log(bookmarks);

bookmarks.forEach((bookmark, index) => {
	// const bookmark = document.querySelector(".Bookmark");
	const bookmarkIcon = bookmark.querySelector(".Card-bookmarkIcon");
	const bookmarked = "Card-bookmarkIcon--bookmarked";

	bookmark.addEventListener("click", ev => {
		bookmarkIcon.classList.toggle(bookmarked);
	});
});
