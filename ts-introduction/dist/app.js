const tasksContainerEl = document.querySelector(".tasks");
const taskInputEl = document.querySelector("#name");
const addBtnEL = document.querySelector("button");
const categoriesContainerEl = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
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
const renderCategories = () => {
    categories.forEach(category => {
        const categoryEl = document.createElement("li");
        const radioInputEl = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            selectedCategory = category;
        });
        const radioLabelEl = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;
        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addBtnEL.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: taskInputEl.value, done: false, category: selectedCategory });
    render();
});
renderCategories();
render();
