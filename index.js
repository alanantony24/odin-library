const showDialogButton = document.getElementById("showDialogButton");
const addBookDialog = document.getElementById("addBookDialog");
const confirmBtn = addBookDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showDialogButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

function save() {
  var author = document.getElementById('author').value;
  var title = document.getElementById('title').value;
  var numberOfPages = document.getElementById('pages').value;
  var read = document.getElementById('read').value;

  const bookData = {
    author: author,
    title: title,
    numberOfPages: numberOfPages,
    read: read
  }
  localStorage.setItem("bookData", JSON.stringify(bookData));
}

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  save();
  addBookDialog.close(); // Have to send the select box value here.
});