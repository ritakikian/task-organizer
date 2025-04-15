const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filters button");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeButton);
  taskList.appendChild(li);
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addButton.click();
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filters .active")?.classList.remove("active");
      button.classList.add("active");
  
      const filter = button.dataset.filter;
      const tasks = taskList.querySelectorAll("li");
  
      tasks.forEach((task) => {
        const isCompleted = task.classList.contains("completed");
  
        if (
          filter === "all" ||
          (filter === "completed" && isCompleted) ||
          (filter === "pending" && !isCompleted)
        ) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
      });
    });
  });
  
