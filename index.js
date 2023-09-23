const showDialogButton = document.getElementById("showDialogButton");
const addBookDialog = document.getElementById("addBookDialog");
const confirmBtn = addBookDialog.querySelector("#confirmBtn");
var div = document.getElementById("outputCards");

const myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBooksToLibrary() {
  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var numberOfPages = document.getElementById("pages").value;
  var read = document.getElementById("read").value;

  const bookData = new Book(author, title, numberOfPages, read);

  myLibrary.push(bookData);
  //localStorage.setItem("bookData", JSON.stringify(bookData));
}

const resetBooksGrid = () => {
  div.innerHTML = "";
};

function displayBooks() {
  resetBooksGrid();
  myLibrary.forEach((book) => {
    div.innerHTML =
      div.innerHTML +
      `
    <div class="bookCard">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <div class="cardButtons">
      <button>Read</button>
      <button>Remove</button>
    </div>
    </div>
    `;
  });
}

// "Show the dialog" button opens the <dialog> modally
showDialogButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  addBooksToLibrary();
  displayBooks();
  addBookDialog.close(); // Have to send the select box value here.
});
