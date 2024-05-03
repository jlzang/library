let myLibrary = [];
let dialog = document.querySelector("dialog")
let showButton = document.querySelector("#add");
let form = document.querySelector("form");
let closeButton = document.querySelector("#close");
let addButton = document.querySelector("#confirm");
let errorMessage = document.querySelector(".error");

showButton.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

addButton.addEventListener("click", (event) => {
    //event.preventDefault();
    if (title.value === "" || author.value === "" || pages.value === "") {
        showErrorMessage();
        return;
    }
    dialog.close(addBook());
});

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
    let read = dialog.querySelector("input[type='radio']:checked").value;

    let newBook = new Book(title, author, pages, read);
    let libraryBook = newBook;
    myLibrary.push(libraryBook);
    newBook = null;
}

function showErrorMessage() {
    errorMessage.textContent = "*Please fill out all fields";
    errorMessage.style.color = "red";
}

/*variable for each object property, pressing addButton
triggers close event, close event saves values of each
property into respective variables*/
