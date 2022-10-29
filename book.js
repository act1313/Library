// title, author, # of pages, and read or not
let bookContainer = document.querySelector('.books');
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookReadStatus = document.querySelector("#readStatus");

let myLibrary = [];
let num = 0;

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
    // add the book
    let book = document.createElement('div');
    book.classList.add('book');
    book.classList.add(`${num}`);

    bookContainer.appendChild(book);

    // add the info to the book
    let titleOfBook = document.createElement('h1');
    let authorOfBook = document.createElement('h1');
    let pagesOfBook = document.createElement('h1');
    let readBook = document.createElement('h1');
    
    titleOfBook.innerHTML = `${bookInfo.title}`;
    authorOfBook.innerHTML = `${bookInfo.author}`;
    pagesOfBook.innerHTML = `${bookInfo.pages}`;

    // add book info to book element
    book.appendChild(titleOfBook);
    book.appendChild(authorOfBook);
    book.appendChild(pagesOfBook);
    
    var readBookCheck = document.createElement('input');
    readBookCheck.type = "checkbox";
    readBookCheck.name = "readBookBox";
    readBookCheck.id = "readBookBox";

    var label = document.createElement('label')
    label.htmlFor = "readBookBox";
    label.appendChild(document.createTextNode('Read'));

    book.appendChild(readBookCheck);
    book.appendChild(label);
    
    
    let booksInLibrary = document.querySelectorAll('.book');
    console.log(booksInLibrary.length);
    
    if (booksInLibrary.length <= 3) {
        bookContainer.style.cssText = 
        `
            display: inline-grid;
            grid-template-columns: repeat(${booksInLibrary.length}, 1fr);
            gap: 1px;
        `;
    } else {
        bookContainer.style.cssText = 
        `
            display: inline-grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
        `;
    }
}