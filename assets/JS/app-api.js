$(() => {

    $('.search-btn').on('click', function (e) {
        e.preventDefault();
        let query = $('.search-input').val().trim();
        $('.search-input').val("");

        let app_id = '89c11dcf';
        let api_key = '8b946bfa6400d727d1b19be930436ff4';
        let base_url = 'https://api.edamam.com/search';
        let query_url = base_url + "?q=" + query +
            `&app_id=${app_id}` +
            `&app_key=${api_key}`

        $('.food-highlight').empty();
        $('.reContainer').empty();

        $.ajax({
            method: "GET",
            url: query_url,
        }).then(data => {
            console.log(data)
            for (let i = 0; i < 10; i++) {
                console.log(data.hits[i].recipe.image);
                $('.reContainer').append(
                    `<div>
                <img class="recipes" data-shareas='${data.hits[i].recipe.shareAs}' src='${data.hits[i].recipe.image}'>
                <P>${data.hits[i].recipe.label}</P>
                </div>`
                );
            }
        });

        let api_k = '6fcc3bbde6e04f2b8946660691a0e48c';
        let base_u = 'https://api.spoonacular.com/recipes/search';
        let query_u = base_u + `?apiKey=${api_k}` + '&query=' + query
        console.log("new api", query_u);
        
        $.ajax({
            method: "GET",
            url: query_u,
        }).then(data => {
            console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                $('.reContainer').append(
                    `<div>
                    <img id=${i} class="recipes2"  data-id='${data.results[i].id}' src='https://spoonacular.com/recipeImages/${data.results[i].image}'>
                    <p>${data.results[i].title}</p>
                    </div>`
                );
            }
        });

    });
    $('.reContainer').on('click', '.recipes', function () {
        let recipeLink = ($(this).attr('data-shareas'))

        $(location).attr('href', recipeLink);

    });
    $('.reContainer').on('click', '.recipes2', function () {
        let recipeId = ($(this).attr('data-id'))
        let api_k = '6fcc3bbde6e04f2b8946660691a0e48c';

        $.ajax({
            method: "GET",
            url: `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${api_k}&includeNutrition=true`,
        }).then(data => {
            window.open(data.sourceUrl)
        });
    });

/* -------------------------------------------------------------------------- */

function foodHighlights() {
    let api_key = '6fcc3bbde6e04f2b8946660691a0e48c';
    let base_url = 'https://api.spoonacular.com/recipes/random';
    let query_url = base_url + `?apiKey=${api_key}` + '&number=1';
    // console.log(query_url);
    $.ajax({
        method: "GET",
        url: query_url,
    })
    .then(data => {
        console.log(data.recipes[0]);
        let recipe = data.recipes[0];
        let ingredients = data.recipes[0].extendedIngredients;

        function createList(arr) {
            let ingrList = [];
            for (let i = 0; i < arr.length; i++) {
                let ingr = `<li>${arr[i].name}</li>`;
                ingrList.push(ingr);
            }
            return ingrList;
        }
        // console.log( createList(ingredients) );

        $('.food-highlight').html(
            `<blockquote class="search-welcome">What does your soul desire?</blockquote>
            <div class="food-container">
                <div class="img-container">
                    <img src="${recipe.image}" alt="recipe image">
                </div>
                <div class="ingredients-recipe">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            ${createList(ingredients).join('')}
                        </ul>
                    </div>
                    <div class="recipe">
                        <h2>${recipe.title}</h2>
                        <p>${recipe.instructions}</p>
                        <button class="view-site">
                            <a href="${recipe.sourceUrl}">
                                View More
                            </a>
                        </button>
                        <button class="next-highlight">Next Highlight</button>
                    </div>
                </div>
            </div>`
        );
    })
    .catch( err => {
        console.error('message: ' + err);
    });
}
foodHighlights();
$(document).on('click', '.next-highlight', foodHighlights);
/* -------------------------------------------------------------------------- */
});