// ================
// Aplication State
// ================

// Arrays that stores all book objects.
// This is the single souce where the data store for the app.

const myLibrary = [];

// ============================
// Book Constructor & Prototype
// ============================

// Constructor function for creating Book Objects.
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

// Returns a formatted string describing the book.
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages}, is ${this.read}.`;
};

// Toggles the read status between "Read" and "Not Read"
Book.prototype.readStatus = function () {
  this.read = this.read === "Read" ? "Not Read" : "Read";
};

// =============================
// Library Logic (State Updates)
// =============================

// Creates a new book and add it to the library array.
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// ============
// UI Rendering
// ============

// Renders all books in my library array to DOM.
// Clears and rebuilds the UI from current state.
function display() {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>My Library</h1>";

  // Create a card for each book.
  for (const book of myLibrary) {
    const content = document.createElement("div");
    content.style.border = "solid 1px blue";
    content.style.borderRadius = "20px";
    content.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p><p>${book.pages}</p><p>${book.read}</p><button type = "submit" data-id = "${book.id}">Remove Book</button><button type = "submit" data-id = ${book.id}>Toogle Read Status</button>`;
    container.appendChild(content);
  }
}

// ===============================
// Event Delegation (Book Actions)
// ===============================


// Single click listener for all book actions
const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  
//   Handle book removal
    if (
    event.target.tagName === "BUTTON" &&
    event.target.textContent === "Remove Book"
  ) {
    const bookId = event.target.dataset.id;
    const index = myLibrary.findIndex((book) => book.id === bookId);

    if (index !== -1) {
      myLibrary.splice(index, 1);
      display();
    }
  }

//   Handle Read Status Toogle
  if (
    event.target.tagName === "BUTTON" &&
    event.target.textContent === "Toogle Read Status"
  ) {
    const bookId = event.target.dataset.id;
    const book = myLibrary.find((book) => book.id === bookId);
    if (book) {
      book.readStatus();
      display();
    }
  }
});

// ======================
// Dialog & Form Handling
// ======================

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".showForm");
const closeButton = document.querySelector(".closeForm");
const submitButton = document.querySelector(".submitButton");


// Open the modal form
showButton.addEventListener("click", () => {
  dialog.showModal();
});


// Close the modal form
closeButton.addEventListener("click", () => {
  dialog.close();
});


// Handle new book submission
submitButton.addEventListener("click", (event) => {
  let book_Title = document.querySelector("#bookTitle").value;
  let book_Author = document.querySelector("#bookAuthor").value;
  let book_Pages = document.querySelector("#bookPages").value;
  let book_Status = document.querySelector("#bookStatus").value;

  addBookToLibrary(book_Title, book_Author, book_Pages, book_Status);
  display();
  event.preventDefault();
  dialog.close();
});
