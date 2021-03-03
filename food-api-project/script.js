const categories = document.querySelector(".categories");



const getCategories = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => {
            res.json().then(data => {

                Object.values(data).forEach(value => {
                    value.forEach(meal => {
                        let title = meal.strCategory;
                        let url = meal.strCategoryThumb;
                        templateCategory(title, url);


                    });
                });

            });

        });
}


const templateCategory = (title, url) => {
    let template = `<div class = "col-sm-5 category">
        <h3> ${title} </h3> 
        <img src = ${url}>
        </div>`

    categories.innerHTML += template;
}

window.addEventListener("load", getCategories);


/*
idCategory: "1"
strCategory: "Beef"
strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
strCategoryThumb: "https://www.themealdb.com/images/category/beef.png" */