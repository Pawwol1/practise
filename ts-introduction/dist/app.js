const tasksContainerEl = document.querySelector(".tasks");
const taskInputEl = document.querySelector("#name");
const addBtnEL = document.querySelector("button");
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false
    },
    {
        name: "Siłownia",
        done: true
    },
    {
        name: "Nakarmić psa",
        done: true
    },
];
const render = () => {
    tasksContainerEl.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("li");
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
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addBtnEL.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(taskInputEl.value);
    render();
});
render();
