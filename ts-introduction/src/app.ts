const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const taskInputEl: HTMLInputElement = document.querySelector("#name");
const addBtnEL: HTMLButtonElement = document.querySelector("button");

const tasks: {
    name: string;
    done: boolean;
}[] = [
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
        const taskEl: HTMLElement = document.createElement("li");
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

const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false});
}

addBtnEL.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask(taskInputEl.value);
    render();
});

render();