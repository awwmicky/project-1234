$(() => {

    $('#rec-search').on('click', function (e) {
        e.preventDefault();
        let query = $('#add-dish').val().trim();

        let app_id = '89c11dcf';
        let api_key = '8b946bfa6400d727d1b19be930436ff4';
        let base_url = 'https://api.edamam.com/search';
        let query_url = base_url + "?q=" + query +
            `&app_id=${app_id}` +
            `&app_key=${api_key}`


        //Get inmages and recipes names using ajax request and for loop. Apending those to DOM using jquery
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
                    <img id=${i} height='300px' width= '300px'class="recipes2"  data-id='${data.results[i].id}' src='https://spoonacular.com/recipeImages/${data.results[i].image}'>
                    <p><a href="">${data.results[i].title}</a></p>
                    </div>`
                );
            }
        });
        //use on click function to link the inmages to its recipe
    })
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
            // let recipeId2 = ($(this).attr('vegetarian-sourceUrl'))
            // $(location).attr('href', recipeId2);
        });
    })


});