import {Task, Category} from "./types/types.js";
import {render as renderTasks} from "./components/renderTasks.js";
import {renderCategories} from "./components/renderCategories.js";

const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const taskInputEl: HTMLInputElement = document.querySelector("#name");
const addBtnEL: HTMLButtonElement = document.querySelector("button");
const categoriesContainerEl: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

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

const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addBtnEL.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask({name: taskInputEl.value, done: false, category: selectedCategory});
    renderTasks(tasks, tasksContainerEl);
});

renderCategories(categories, categoriesContainerEl, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);