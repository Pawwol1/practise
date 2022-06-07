import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana na general!");
    }
    else if (category === Category.GYM) {
        console.log("Zmiana na gym!");
    }
    else if (category === Category.WORK) {
        console.log("Zmiana na work!");
    }
    else if (category === Category.HOBBY) {
        console.log("Zmiana na hobby!");
    }
    else {
        const never = category;
        console.log(never, "Nigdy tego nie zobaczysz!");
    }
};
export const renderCategories = (categories, categoriesContainerEl, inputChange) => {
    categories.forEach(category => {
        const categoryEl = document.createElement("li");
        const radioInputEl = document.createElement("input");
        radioInputEl.type = "radio";
        radioInputEl.name = "category";
        radioInputEl.value = category;
        radioInputEl.id = `category-${category}`;
        radioInputEl.addEventListener("change", () => {
            inputChange(category);
            handleCategoryChange(category);
        });
        const radioLabelEl = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;
        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};
