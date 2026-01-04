const inputBox = document.getElementById("input-box");
const addButton = document.querySelector(".btn");
const list = document.getElementById("list");

addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task!");
        return;
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const li = document.createElement("li");
    li.textContent = inputBox.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DLT";
    li.appendChild(checkbox);

    li.appendChild(deleteBtn);
    list.appendChild(li);

    inputBox.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});