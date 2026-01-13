# 📚 Library App

A simple JavaScript library application that allows users to add, display, update, and remove books from a personal library.  
This project focuses on **data-driven UI**, **event delegation**, and **object-oriented JavaScript**.

Built as part of a learning exercise to practice JavaScript fundamentals and DOM manipulation.

---

## 🚀 Features

- Add new books using a modal form
- Display all books as individual cards
- Remove books from the library
- Toggle a book’s read status (`Read` / `Not Read`)
- Each book has a unique, stable identifier (UUID)
- UI automatically re-renders based on application state

---

## 🧠 Concepts Practiced

- Constructor functions and prototypes
- Object-oriented JavaScript
- Array methods (`push`, `find`, `findIndex`, `splice`)
- Event delegation
- DOM manipulation
- Form handling and `event.preventDefault()`
- Data attributes (`data-id`)
- Separation of application state and UI logic

---

## 🛠️ Technologies Used

- HTML
- CSS
- Vanilla JavaScript (ES6)
- `<dialog>` element for modal form
- `crypto.randomUUID()` for unique IDs

---

## 📂 Project Structure
.
├── index.html
├── style.css
├── script.js
└── README.md
---

## 🧩 How It Works

- All books are stored in a single array (`myLibrary`), which acts as the source of truth.
- The UI is rendered by looping over this array and creating DOM elements dynamically.
- User interactions (remove / toggle read status) are handled using **event delegation**.
- Each book card is linked to its data object using a `data-id` attribute.

---

## ▶️ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/library-app.git

2. Open index.html in your browser.
3. Click Add a new Book to start adding books to your library.

---

## 🧪 Future Improvements
1. Persist data using localStorage
2. Edit existing book details
3. Filter or sort books
4. Improve form validation
5. Convert constructor functions to ES6 classes
6. Add animations or improved styling

## 📖 What I Learned
This project helped reinforce:
1. How to structure JavaScript applications
2. How to manage state separately from the UI
3. How to write cleaner, more maintainable code
4. How real-world JavaScript apps handle user interactions

## 📜 License
This project is open source and available under the MIT License.

---




