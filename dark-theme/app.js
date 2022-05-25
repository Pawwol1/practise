const switchBtn = document.querySelector("header button");
const body = document.querySelector("body");
let mode = localStorage.getItem("mode");


switchBtn.addEventListener('click', () => {
    mode === "dark" ? body.classList.remove("dark") : body.classList.add("dark");
    mode === "dark" ? body.classList.add("light") : body.classList.remove("light");
    mode === "dark" ? mode = "light" : mode = "dark";
    localStorage.setItem("mode", mode);
});

mode === "dark" && body.classList.add("dark");
mode === "light" && body.classList.add("light");

