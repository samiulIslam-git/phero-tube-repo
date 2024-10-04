// fetch load and show category

// create load categories

const loadCategories = () =>{
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
}

// create display categories

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item)
        // create a button
        const button = document.createElement("button")
        button.classList = "btn"
        button.innerText = item.category;

        // add button category container
        categoryContainer.append(button);
    })
};


loadCategories();