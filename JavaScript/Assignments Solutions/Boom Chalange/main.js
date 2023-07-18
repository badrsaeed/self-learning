let addbtn = document.querySelector(".add-btn");
let inputs = document.querySelector(".input-task");
let tasks = document.querySelector(".task-container");
let deletebtn;

window.onload = (e) => {
  if (window.localStorage.length > 0) {
    for (let i = 0; i < window.localStorage.length; i++) {
      creatTasks(`${window.localStorage.getItem(window.localStorage.key(i))}`);
    }
  } else {
    console.log("Empty");
  }
};

addbtn.addEventListener("click", (e) => {
  if (inputs.value.length > 0 && inputs.value !== " ") {
    creatTasks(`${inputs.value}`);
    storeAtLocalStorage();
  }
});
// window.localStorage.clear();
let storeAtLocalStorage = () => {
  window.localStorage.setItem(`${new Date().valueOf()}`, `${inputs.value}`);
  console.log("Stored");
};

let delterTaskFromLocalStorage = (value) => {
  window.localStorage.removeItem(value);
};

let creatTasks = function (value) {
  let newtask = document.createElement("div");
  deletebtn = document.createElement("button");
  let deletetext = document.createTextNode(`Delete`);
  let text = document.createTextNode(`${value}`);

  newtask.classList.add("newtask");
  deletebtn.classList.add("delete-btn");

  deletebtn.appendChild(deletetext);
  newtask.appendChild(text);
  newtask.appendChild(deletebtn);
  tasks.style.height = "fit-content";
  tasks.appendChild(newtask);
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    delterTaskFromLocalStorage();
    console.log("deleted");
  } else {
    console.log("another");
  }
});
