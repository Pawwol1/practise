const PICTURES = document.querySelectorAll(".picture img");
const POP_UP = document.querySelector(".pop_up");
const POP_UP_CLOSE = document.querySelector(".pop_up__close");
const POP_UP_IMG = document.querySelector(".pop_up__img");
const ARROW_RIGHT = document.querySelector(".pop_up__arrow--right");
const ARROW_LEFT = document.querySelector(".pop_up__arrow--left");

let tempImgIndex;

const slideRight = () => {
    tempImgIndex === PICTURES.length - 1 ? tempImgIndex = 0 : tempImgIndex++;
    POP_UP_IMG.src = PICTURES[tempImgIndex].src;
};

const slideLeft = () => {
    tempImgIndex === 0 ? tempImgIndex = PICTURES.length - 1 : tempImgIndex--;
    POP_UP_IMG.src = PICTURES[tempImgIndex].src;
};

const closePopUp = () => {
    POP_UP.classList.add("fade");
    setTimeout(() => {
        POP_UP.classList.add("hidden");
        POP_UP.classList.remove("fade");
    }, 333)
    PICTURES.forEach( (el) => {
        el.setAttribute("tabindex", "0")
    });
};

PICTURES.forEach((picture, index) => {
    const showPopUp =  () => {
        POP_UP.classList.remove("hidden");
        POP_UP_IMG.src = picture.getAttribute("src");
        tempImgIndex = index;
        PICTURES.forEach( (el) => {
            el.setAttribute("tabindex", "-1")
        });
    };
    picture.addEventListener("click", showPopUp)
    picture.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.keyCode === 13) {
            showPopUp();
        }
    });
});

POP_UP_CLOSE.addEventListener("click", closePopUp);

ARROW_RIGHT.addEventListener("click", slideRight);

ARROW_LEFT.addEventListener("click", slideLeft);

POP_UP.addEventListener("click", (e) => {
    if (e.target === POP_UP) {
        closePopUp();
    }
})

document.addEventListener("keydown", (e) => {
    if (!POP_UP.classList.contains("hidden")) {
        if (e.code === "ArrowRight" || e.keyCode === 39) {
            slideRight();
        }
        if (e.code === "ArrowLeft" || e.keyCode === 37) {
            slideLeft();
        }
        if (e.code === "Escape" || e.keyCode === 27) {
            closePopUp();
        }
    }
});