// Function for adding a new item to list.
function newElement() {
  const input = document.getElementById("task");
  const inputValue = input.value.trim();
  const list = document.getElementById("list");

  if (inputValue === "") {
    // Firstly, it checks if the input is empty or not. Error toast appears at screen if the input is empty.
    const errorToast = document.querySelector(".toast.error");
    $(errorToast).toast("show");
  } else {
    // If the input is valid, the new item gets created here.
    const li = document.createElement("li");
    li.textContent = inputValue;

    // Adding a close button to list item.
    const span = document.createElement("span");
    span.textContent = "\u00D7"; // '\u00D7' is a unicode for the 'X' symbol.
    span.className = "close";
    // ***A click function to remove list item.
    span.onclick = function () {
      this.parentElement.remove();
    };
    li.appendChild(span);

    // ***Another click function to make list item appear as done.
    li.onclick = function () {
      this.classList.toggle("checked");
    };
    list.appendChild(li);

    // Success toast appears when valid input items are added.
    const successToast = document.querySelector(".toast.success");
    $(successToast).toast("show");

    input.value = "";
  }
}

// Adding a close button to existing items.
const existingListItems = document.querySelectorAll("#list li");
existingListItems.forEach((item) => {

  const span = document.createElement("span");
  span.textContent = "\u00D7"; // '\u00D7' is a unicode for the 'X' symbol.
  span.className = "close";
  span.onclick = function () {
    this.parentElement.remove();
  };
  item.appendChild(span);

  item.onclick = function () {
    this.classList.toggle("checked");
  };
});
