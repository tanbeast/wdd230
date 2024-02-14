const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
    if (input.value !== "") { // Check if the input is not empty
        displayList(input.value); // Call the displayList function with the input value
        chaptersArray.push(input.value); // Add the input value to the chaptersArray
        setChapterList(chaptersArray); // Update the localStorage with the new chaptersArray
        input.value = ""; // Clear the input value
        input.focus(); // Set the focus back to the input
    }
});
function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.setAttribute("aria-label", "delete button");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", () => {
        li.remove();
        input.focus();
    });
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
chaptersArray.forEach(chapter => displayList(chapter));
