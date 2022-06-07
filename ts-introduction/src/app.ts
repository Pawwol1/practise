import {Category, Task} from "./types/types.js";
import {render as renderTasks} from "./components/renderTasks.js";
import {renderCategories} from "./components/renderCategories.js";
import {TaskClass} from "./classes/taskClass.js";

const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const taskInputEl: HTMLInputElement = document.querySelector("#name");
const addBtnEL: HTMLButtonElement = document.querySelector("button");
const categoriesContainerEl: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.GYM, Category.WORK, Category.HOBBY];

// const tasks: Task[] = [
//     {
//         name: "Wyrzucić śmieci",
//         done: false,
//         category: Category.WORK
//     },
//     {
//         name: "Siłownia",
//         done: false,
//         category: Category.GYM
//     },
//     {
//         name: "Nakarmić psa",
//         done: true,
//         category: Category.HOBBY
//     },
// ];

const tasks: Task[] = [
    new TaskClass("Wyrzuć smieci", false, Category.WORK),
    new TaskClass("Siłownia", false, Category.GYM),
    new TaskClass("Nakarm psa", true, Category.HOBBY)
    ];

const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
};

addBtnEL.addEventListener("click", (e: Event) => {
    e.preventDefault();
    // addTask({name: taskInputEl.value, done: false, category: selectedCategory});
    const newTask = new TaskClass(taskInputEl.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!");
    renderTasks(tasks, tasksContainerEl);
});

renderCategories(categories, categoriesContainerEl, updateSelectedCategory);
renderTasks(tasks, tasksContainerEl);
