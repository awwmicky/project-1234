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
        $('.form-title').text('Login');
        $('.submit-btn').val('LOGIN');
        $('.account-option').html(
            `<p>
                Don't have an account?
                <a href="#" class="toggle-form" data-state="sign-up">Sign Up</a>
            </p>`
        );
    } else {
        $('.form-title').text('Sign Up');
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