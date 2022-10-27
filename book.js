// title, author, # of pages, and read or not
let bookContainer = document.querySelector('.books');
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookReadStatus = document.querySelector("#readStatus");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = () => {
        console.log(title + " by " + author + ", " + pages + " pages, " + readStatus);
    };
}

function addBookToLibrary() {
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let readStatus = bookReadStatus.checked; 

    let book = new Book(title, author, pages, readStatus);
    book.info();
    
    addBook(book);
}

function addBook(bookInfo) {
    let book = document.createElement('div');
    book.classList.add('book');

    book.innerHTML =

    bookContainer.appendChild(book);

    let booksInLibrary = document.querySelectorAll('.book');
    console.log(booksInLibrary.length);
    
    if (booksInLibrary.length > 3) {
        bookContainer.style.cssText = 
        `
            display: inline-grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
        `;
    } else {
        bookContainer.style.cssText = 
        `
            display: inline-grid;
            grid-template-columns: repeat(books.length, 1fr);
            gap: 1px;
        `;
    }
}