const showButton = document.getElementById("showDialog");
const bookDialog = document.getElementById("bookDialog");
const outputBox = document.querySelector("output");
const selectEl = bookDialog.querySelector("select");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  bookDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialog.addEventListener("close", (e) => {
  outputBox.value =
    bookDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${bookDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  bookDialog.close(selectEl.value); // Have to send the select box value here.
});