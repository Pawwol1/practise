import { render as renderTasks } from "./components/renderTasks.js";
import { renderCategories } from "./components/renderCategories.js";
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addBtnEL.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({ name: taskInputEl.value, done: false, category: selectedCategory });
    renderTasks(tasks, tasksContainerEl);
});
renderCategories(categories, categoriesContainerEl, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);
