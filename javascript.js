let myLibrary = [];
let dialog = document.querySelector("dialog")
let showButton = document.querySelector("#add");
let addButton = document.querySelector("#confirm");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close(addBook())
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
let title = dialog.querySelector("#title").value;
let author = dialog.querySelector("#author").value;
let pages = dialog.querySelector("#pages").value;
let read = dialog.querySelector("input[type='radio']:checked").id;

let newBook = new Book(title, author, pages, read);
let libraryBook = newBook;
myLibrary.push(libraryBook);
newBook = null;
}

/*variable for each object property, pressing addButton
triggers close event, close event saves values of each
property into respective variables*/
