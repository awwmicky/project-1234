$(() => {
/*  */
$(document).on('click', '.account-nav', function(e) {
    e.preventDefault();
    $('.modal-account').css('display', 'block');
});


$('.exit-btn').on('click', function() {
    $('.modal-account').css('display', 'none');
});

$(document).on('keyup', function (e) {
    if (e.key === 'Escape') {
        $('.modal-account').css('display', 'none');
    }
});
$(document).on('mouseup', function (e) {
    let content = $('.account-content');
    if ( !content.is(e.target) && content.has(e.target).length === 0 ) {
        $('.modal-account').css('display', 'none');
    } 
});

$('.input').on('focus', function () {
    $(this).addClass("focus");
});
$('.input').on('blur', function () {
    if ( $(this).val() === '' ) {
        $(this).removeClass('focus');
    }
});
$(document).on('click', '.toggle-form', function (e) {
    e.preventDefault();

    let state = $(this).attr('data-state')
    
    if ( state === 'login' ) {
        $('.form-title').html(
            `<h2>Login</h2>
             <p>Welcome back</p>`
        );
        $('.submit-btn').val('LOGIN');
        $('.account-option').html(
            `<p>
                Don't have an account?
                <a href="#" class="toggle-form" data-state="sign-up">Sign Up</a>
            </p>`
        );
    } else {
        $('.form-title').html(
            `<h2>Sign Up</h2>
            <p>Come to cook</p>`
        );
        $('.submit-btn').val('SIGN UP');
        $('.account-option').html(
            `<p>
                Already have an account?
                <a href="#" class="toggle-form" data-state="login">Login</a>
            </p>`
        );   
    }
});


$('.view-password').on('click', function (e) {
    e.preventDefault();

    let type =  $('.pass-input').attr('type');
    $('.pass-input').attr(
        'type',
        (type === 'text') ? 
        'password' : 'text'
    );
});

/* -------------------------------------------------------------------------- */
/* 
(function () {
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
            `<img src="${recipe.image}" alt="recipe image">
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
            </div>`
        );
    })
    .catch( err => {
        console.error('message: ' + err);
    });
})();
 */
/*  */
});