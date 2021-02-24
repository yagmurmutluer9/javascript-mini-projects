const butterfly_text = document.querySelector("#butterfly_text");
const bottom_text = document.querySelector("#bottom_text");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
const pic = document.querySelector(".pic");



function createMeme(val1, val2) {

    let ItemUpper = document.createElement("p");
    ItemUpper.setAttribute("id", "txtItemUpper");
    ItemUpper.innerHTML = val1;
    let ItemBottom = document.createElement("p");
    ItemBottom.setAttribute("id", "txtItemBottom");
    ItemBottom.innerHTML = val2;

    let txtItemUpper = document.querySelector("#txtItemUpper");

    if (pic.contains(txtItemUpper)) {
        alert("first reset it!");
    } else {
        pic.appendChild(ItemUpper);
        pic.appendChild(ItemBottom);
    }


}

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    let val1 = bottom_text.value;
    let val2 = butterfly_text.value;

    if (val1.length > 0 && val2.length > 0) {
        createMeme(val1, val2);
    } else {
        alert("enter fills");
    }
    butterfly_text.value = "";
    bottom_text.value = "";

});

resetBtn.addEventListener("click", e => {
    e.preventDefault();

    let ItemUpper = document.querySelector("#txtItemUpper");

    if (pic.contains(ItemUpper)) {

        pic.removeChild(txtItemUpper);
        pic.removeChild(txtItemBottom);
    } else {

        alert("first submit it!");
    }

});