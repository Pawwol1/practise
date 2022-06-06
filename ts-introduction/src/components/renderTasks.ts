import {Task} from "../types/types.js";

export const render = (tasks: Task[], tasksContainerEl: HTMLElement) => {
    tasksContainerEl.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl: HTMLElement = document.createElement("li");
        if (task.category) {
            taskEl.classList.add(task.category);
        }
        const id: string = `task-${index}`;

        const labelEl: HTMLLabelElement = document.createElement("label");
        labelEl.innerText = task.name;
        labelEl.setAttribute("for", id);

        const checkboxEl: HTMLInputElement = document.createElement("input");
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