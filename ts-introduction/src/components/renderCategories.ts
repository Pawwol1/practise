import {Category} from "../types/types.js";

export const renderCategories = (
    categories: Category[],
    categoriesContainerEl: HTMLElement,
    inputChange: (category: Category) => void) => {

    categories.forEach(category => {
        const categoryEl: HTMLElement = document.createElement("li");

        const radioInputEl: HTMLInputElement = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            inputChange(category);
        })

        const radioLabelEl: HTMLLabelElement = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;

        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};