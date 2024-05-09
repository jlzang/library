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

addButton.addEventListener("click", () => {
    //event.preventDefault();
    if (title.value === "" || author.value === "" || pages.value === "") {
        showErrorMessage();
        return;
    };
    addBook();
    addBookToLibrary(myLibrary[myLibrary.length - 1]);

    dialog.close();
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

function addBookToLibrary(book) {
    let container = document.querySelector(".container")
    let card = document.createElement("div");
    card.classList.add("card");
    let cardTitle = document.createElement("div");
    let cardAuthor = document.createElement("div");
    let cardPages = document.createElement("div");
    let cardRead = document.createElement("div");

    cardTitle.textContent = `${book.title}`;
    cardAuthor.textContent = `by ${book.author}`;
    cardPages.textContent = `${book.pages} pages`;

    card.append(cardTitle, cardAuthor, cardPages, cardRead);
    container.appendChild(card);
}

function returnLast(array) {
    return array.at(-1);
}

/*each card is added by adding 1 to array length?*/
