let myLibrary = [];

let dialog = document.querySelector("dialog")
let showButton = document.querySelector("#add");
let form = document.querySelector("form");
let closeButton = document.querySelector("#close");
let addButton = document.querySelector("#confirm");
let errorMessage = document.querySelector(".error");

window.addEventListener("load", () => {
    let premadeBook = new Book("Stardew Valley Almanac", "ConcernedApe", "250", "yes");
    myLibrary.push(premadeBook);
    addBookToLibrary(premadeBook);
    let premadeBook2 = new Book("The Little Train That Couldn't", "Sims 4", "20", "no");
    myLibrary.push(premadeBook2);
    addBookToLibrary(premadeBook2);
    return;
});

showButton.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

addButton.addEventListener("click", () => {
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
    myLibrary.push(newBook);
    newBook = null;
}

function showErrorMessage() {
    errorMessage.textContent = "*Please fill out all fields";
    errorMessage.style.color = "red";
}

function addBookToLibrary(book) {
    let container = document.querySelector(".card-container")
    let card = document.createElement("div");
    card.classList.add("card");
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("cardTitle")
    let cardAuthor = document.createElement("div");
    let cardPages = document.createElement("div");

    let bookmark = document.createElement("div");
    let haveRead = document.createElement("input");
    haveRead.classList.add("haveRead");
    haveRead.setAttribute("type", "image");
    haveRead.setAttribute("src", "images/bookmark.svg")
    let notRead = document.createElement("input");
    notRead.classList.add("notRead");
    notRead.setAttribute("type", "image");
    notRead.setAttribute("src", "images/bookmark-outline.svg");

    let remove = document.createElement("input");
    remove.classList.add("remove");
    remove.setAttribute("type", "image");
    remove.setAttribute("src", "images/close-circle-outline.svg");
    remove.setAttribute("data-index", `${myLibrary.length - 1}`);
    remove.setAttribute("name", "remove")

    card.append(cardTitle, cardAuthor, cardPages, bookmark, remove);
    container.appendChild(card);

    cardTitle.textContent = `${book.title}`;
    cardAuthor.textContent = `by ${book.author}`;
    cardPages.textContent = `${book.pages} pages`;

    if (book.read === "yes") {
        bookmark.appendChild(haveRead)
    } else if (book.read === "no") {
        bookmark.appendChild(notRead)
    };

    haveRead.addEventListener("click", () => {
        bookmark.removeChild(haveRead);
        bookmark.appendChild(notRead)
        book.read = "no";
        return;
    });

    notRead.addEventListener("click", () => {
        bookmark.removeChild(notRead);
        bookmark.appendChild(haveRead)
        book.read = "yes";
        return;
    });

    remove.addEventListener("click", function () {
        let i = remove.dataset.index;
        myLibrary.splice(i, 1);
        this.parentNode.parentNode.removeChild(this.parentNode);
        return;
    });
};

//future features: change read status through Book object prototype rather through functions