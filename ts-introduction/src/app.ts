const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const taskInputEl: HTMLInputElement = document.querySelector("#name");
const addBtnEL: HTMLButtonElement = document.querySelector("button");
const categoriesContainerEl: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
    },
    {
        name: "Siłownia",
        done: true,
        category: "gym"
    },
    {
        name: "Nakarmić psa",
        done: true,
    },
];

const render = () => {
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

const renderCategories = () => {

    categories.forEach(category => {
        const categoryEl: HTMLElement = document.createElement("li");

        const radioInputEl: HTMLInputElement = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            selectedCategory = category;
        })

        const radioLabelEl: HTMLLabelElement = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;

        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};

const addTask = (task: Task) => {
    tasks.push(task);
}

addBtnEL.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask({name: taskInputEl.value, done: false, category: selectedCategory});
    render();
});

renderCategories();
render();