$(() => {
/*  */
$('.search-nav').on('click', function (e) {
    e.preventDefault();
    $('#srch-2').toggleClass('active');
});
$(document).on('click', '.account-nav', function(e) {
    e.preventDefault();
    $('.modal-account').css('display', 'block');
    $('.email-input').focus();
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
/*  */
});