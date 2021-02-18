const submitButton = document.querySelector("#submit");
const toDO = document.querySelector(".to-do-class ul");
const userInput = document.querySelector("#input");

submitButton.addEventListener("click", () => {

    const userInputValue = userInput.value;
    addItem(userInputValue);
    userInput.value = "";
});

function addItem(el) {

    if (el != "") {
        const li = document.createElement("li");
        li.innerHTML = el;

        const button = document.createElement("button");
        button.id = "deleteButton";
        button.innerHTML = "X";
        li.appendChild(button);
        toDO.appendChild(li);


    } else {
        alert("enter a value!");
    }

}

toDO.addEventListener("click", (event) => {
    const item = event.target;
    const li = item.parentElement;

    if (item.tagName === "BUTTON") {
        if (item.id == "deleteButton") {
            toDO.removeChild(li);
        }
    }
});