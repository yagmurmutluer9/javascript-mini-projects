const slider = document.querySelector(".slider");
const slider_updown = document.querySelector(".slider_updown");
const after_container = document.querySelector(".after-image-container");
const before_container = document.querySelector(".before-image-container");
const container = document.querySelector(".container");


const sliderMove = (e) => {
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    let x_cor = e.layerX;
    let y_cor = e.layerY;
    after_container.style.width = x_cor + "px";
    after_container.style.height = y_cor + "px";
    slider.style.left = x_cor + "px";
    slider_updown.style.top = y_cor + "px";


    if (x_cor < 30) {
        after_container.style.width = "0px";
        slider.style.left = "0px";
    }

    if (x_cor + 30 > width) {
        after_container.style.width = width + "px";
        slider.style.left = width + "px";
    }

    if (y_cor < 30) {
        after_container.style.height = "0px";
        slider_updown.style.top = "0px";
    }

    if (y_cor + 30 > height) {
        after_container.style.height = height + "px";
        slider_updown.style.top = height + "px";
    }
}

container.addEventListener("mousemove", sliderMove);