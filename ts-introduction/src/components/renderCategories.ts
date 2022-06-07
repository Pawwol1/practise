import {Category} from "../types/types.js";

const handleCategoryChange = (category: Category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana na general!");
    } else if (category === Category.GYM) {
        console.log("Zmiana na gym!")
    } else if (category === Category.WORK) {
        console.log("Zmiana na work!")
    } else if (category === Category.HOBBY) {
        console.log("Zmiana na hobby!")
    } else {
        const never: never = category;
        console.log(never, "Nigdy tego nie zobaczysz!");
    }
}

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
            handleCategoryChange(category);
        })

        const radioLabelEl: HTMLLabelElement = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;

        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};

