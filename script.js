console.log("Tasks App");

let taskForm = document.getElementById("taskForm");

let taskInput = document.getElementById("taskInput");

let incompleteTasks = document.getElementById("incomplete-tasks");

let completedTasks = document.getElementById("completed-tasks");

let bubble = new Audio("Assets/bubble.mp3");

console.log(incompleteTasks);

let taskcount = document.getElementById("taskcount");

// console.log(taskcount);

let count = 0;
taskcount.innerText = `( ${count} )`;

let headCompleted = document.getElementById("heading-completed");

completedTasks.style.visibility = "hidden";

let dropdown = document.getElementById("dropdown")
console.log(dropdown);


headCompleted.addEventListener("click", () => {
  console.log("Clicked Completed");

  if (completedTasks.style.visibility === "hidden") {
    completedTasks.style.visibility = "visible";
    dropdown.classList.remove("fa-arrow-up")
    dropdown.classList.add("fa-arrow-down")

  } else {
    completedTasks.style.visibility = "hidden";
    dropdown.classList.remove("fa-arrow-down")
    dropdown.classList.add("fa-arrow-up")
  }
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = taskInput.value;
  console.log(data);


  

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.className = "box";

  const taskName = document.createElement("span");

  taskName.id = "taskName";
  checkbox.type = "checkbox";

  incompleteTasks.append(li);
  li.append(checkbox);
  li.append(taskName);

  taskName.innerText = data;

  taskInput.value = "";

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      count += 1;
      li.remove();
      const lidone = document.createElement("li");

      const taskdone = document.createElement("span");

      completedTasks.append(lidone);
      lidone.append(taskdone);

      taskdone.innerText = `✔️ ${taskName.innerText}`;

      taskcount.innerText = `( ${count} )`;

      bubble.play();      
    }
  });
});
