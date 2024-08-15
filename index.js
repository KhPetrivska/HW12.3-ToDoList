"use strict";
const listContainer = document.querySelector(".list-container");

const arrayTasks = Array.from(listContainer.children);

arrayTasks.forEach(addDeleteButton);

function addDeleteButton(li) {
  const buttonDel = document.createElement("button");
  buttonDel.textContent = "Delete";
  buttonDel.classList.add("delete-btn");
  buttonDel.style.margin = "2px 10px";
  li.appendChild(buttonDel);
}

listContainer.addEventListener("click", function (event) {
  if (event.target.className === "delete-btn") {
    event.target.parentElement.remove();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.className === "add-btn") {
    const newTask = document.getElementById("userInput").value;
    const newlistElement = document.createElement("li");
    newlistElement.textContent = newTask;
    listContainer.appendChild(newlistElement);
    addDeleteButton(newlistElement);
    document.getElementById("userInput").value = "";
  }
});
