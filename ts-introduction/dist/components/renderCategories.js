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
        });
        const radioLabelEl = document.createElement("label");
        radioLabelEl.setAttribute("for", `category-${category}`);
        radioLabelEl.innerText = category;
        categoryEl.appendChild(radioInputEl);
        categoryEl.appendChild(radioLabelEl);
        categoriesContainerEl.appendChild(categoryEl);
    });
};
