// title, author, # of pages, and read or not
let bookContainer = document.querySelector('.books');
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookReadStatus = document.querySelector("#readStatus");

let myLibrary = [];

let number = 0;

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
    let checkMark = document.getElementById("readStatus");
    
    // add the book
    let book = document.createElement('div');
    book.classList.add('book');

    bookContainer.appendChild(book);

    let readStatusDiv = document.createElement('div');

    // add the info to the book
    let titleOfBook = document.createElement('h1');
    let authorOfBook = document.createElement('h1');
    let pagesOfBook = document.createElement('h1');
    let readBook = document.createElement('h1');
    let deleteBook = document.createElement('button');

    titleOfBook.innerHTML = `${bookInfo.title}`;
    authorOfBook.innerHTML = `${bookInfo.author}`;
    pagesOfBook.innerHTML = `${bookInfo.pages}`;
    deleteBook.innerHTML = "Delete";

    deleteBook.onclick = () => { 
        let parent = deleteBook.parentElement;
        parent.remove();
    };

    // add book info to book element
    book.appendChild(titleOfBook);
    book.appendChild(authorOfBook);
    book.appendChild(pagesOfBook);
    book.appendChild(deleteBook);
    
    var readBookCheck = document.createElement('input');
    readBookCheck.type = "checkbox";
    readBookCheck.name = "readBookBox";
    readBookCheck.id = "readBookBox";
    readBookCheck.classList.add(`${number}`);

    readBookCheck.onclick = (event) => {
        let labelInfo = '';

        if (event.target.checked == true) {
            labelInfo = 'Read';
            console.log(labelInfo)
        } else {
            labelInfo = 'Not Read';
        }
        let name = event.target.className;

        console.log(name);
        let label = document.getElementsByClassName(`${name}label`);

        console.log(label)
        label[0].innerHTML = labelInfo;
    };

    let labelValue = "";

    if (checkMark.checked) {
        labelValue = "Read";
        readBookCheck.checked = true;
    } else {
        labelValue = "Not Read"
    }

    var label = document.createElement('label')
    label.htmlFor = "readBookBox";
    label.id = "readBookLabel";
    label.appendChild(document.createTextNode(`${labelValue}`));
    label.classList.add(`${number}label`)

    readStatusDiv.appendChild(readBookCheck);
    readStatusDiv.appendChild(label);
    
    book.appendChild(readStatusDiv);
    
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

    number += 1;
}
