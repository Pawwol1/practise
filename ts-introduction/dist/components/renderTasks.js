export const render = (tasks, tasksContainerEl) => {
    tasksContainerEl.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("li");
        if (task.category) {
            taskEl.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelEl = document.createElement("label");
        labelEl.innerText = task.name;
        labelEl.setAttribute("for", id);
        const checkboxEl = document.createElement("input");
        checkboxEl.type = "checkbox";
        checkboxEl.name = task.name;
        checkboxEl.id = id;
        checkboxEl.checked = task.done;
        checkboxEl.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskEl.appendChild(labelEl);
        taskEl.appendChild(checkboxEl);
        tasksContainerEl.appendChild(taskEl);
    });
};
