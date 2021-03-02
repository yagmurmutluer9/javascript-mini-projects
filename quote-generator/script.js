const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const submitBtn = document.querySelector(".generate");



function getQuotes() {
    let randomNum = Math.floor(Math.random() * 1643);
    fetch("https://type.fit/api/quotes")
        .then(
            res => res.json().then(
                data => {
                    let randomNum = Math.floor(Math.random() * data.length);
                    let selectedQuote = data[randomNum];
                    quote.innerHTML = selectedQuote.text;
                    author.innerHTML = selectedQuote.author;

                })

        );

    setTimeout(() => submitBtn.classList.add("active"), 3000);

}

function newQuote(e) {
    if (!e.target.matches("button.active")) return;
    getQuotes();
    submitBtn.classList.remove("active");
}


window.addEventListener("load", getQuotes);
submitBtn.addEventListener("click", newQuote);