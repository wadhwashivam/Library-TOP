const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, is ${this.read}.`;
};

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function display(){
    const container = document.querySelector(".container");
    container.style.border = "solid 1px red";
    container.innerHTML = "<h1>My Library</h1>"

    for (const book of myLibrary){
        const content = document.createElement("div");
        content.style.border = "solid 1px blue";
        content.style.borderRadius = "20px"
        content.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.pages}</p><p>${book.read}</p>`;
        container.appendChild(content);
    }
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".showForm");
const closeButton = document.querySelector(".closeForm");
const submitButton = document.querySelector(".submitButton");

showButton.addEventListener("click", () =>{
    dialog.showModal();
});

closeButton.addEventListener("click", () =>{
    dialog.close();
});



submitButton.addEventListener("click", (event) =>{
    let book_Title = document.querySelector("#bookTitle").value;
    let book_Author = document.querySelector("#bookAuthor").value;
    let book_Pages= document.querySelector("#bookPages").value;
    let book_Status = document.querySelector("#bookStatus").value;
    
    addBookToLibrary(book_Title, book_Author, book_Pages, book_Status);
    display();
    event.preventDefault();
});


