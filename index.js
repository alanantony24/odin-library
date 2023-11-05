//Accessing elements
const showDialogButton = document.getElementById("showDialogButton");
const addBookDialog = document.getElementById("addBookDialog");
const addBookForm = addBookDialog.querySelector(".addBookForm");
var div = document.getElementById("outputCards");

//data is stored in this list
const myLibrary = [];

//object constructor
class Book {
  constructor(title, author, pages, isRead) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

//accesses the form elements, creates the new object and stores it in the list
function addBooksToLibrary() {
  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var numberOfPages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  const bookData = new Book(author, title, numberOfPages, read);

  myLibrary.push(bookData);
  //localStorage.setItem("bookData", JSON.stringify(bookData));
}

//resets the flexbox with removed cards, and also avoids duplicate cards generation
const resetBooksGrid = () => {
  div.innerHTML = "";
};

//everytime this function is called, it resets the flexbox with an empty string. Then it runs the for loop
//and generates each book object as a card.
function displayBooks() {
  resetBooksGrid();
  for(var i = 0; i < myLibrary.length; i++) {
    var book = myLibrary[i];
    console.log(book)
    div.innerHTML =
      div.innerHTML +
      `
    <div class="bookCard" data-book=${i}>
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <div class="cardButtons">
      <button onClick=readToggle(${i}) id="readToggleBtn">${
        book.isRead == true ? "Read" : "Not Read"
      }</button>
      <button onClick=removeBook(${i}) id="removeBookBtn">Remove</button>
    </div>
    </div>
    `;
  }
}

//"Show the dialog" button opens the <dialog> modally
showDialogButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  addBooksToLibrary();
  displayBooks();
  addBookDialog.close(); // Have to send the select box value here.
});

//toggles the "READ" button in the book card, updates the boolean directly in the object in the list, and calls the displayBooks() function to do a reset
//and reprint the cards after the updates.
function readToggle (i) {
  if (myLibrary[i].isRead) {
    myLibrary[i].isRead = false;
  }
  else {
    myLibrary[i].isRead = true;
  }
  displayBooks();
}

//deletes the card at the index according to the list, updates the boolean directly in the object in the list, and calls the displayBooks() function to do a reset
//and reprint the cards after the updates.
function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}
