$(() => {
    /*  */

    /* -------------------------------------------------------------------------- */

    // const logoutNav = $('.logout-nav');

    const $userForm = $('.user-form');
    const $emailInput = $('.email-input');
    const $passInput = $('.pass-input');
    const $userSignin = $('id-input');
    
    const $guestForm = $('.guest-form');
    const $guestBtn = $('.guest-btn');

    const $loginBtn = $('.login-btn');
    const $signupBtn = $('.sign-up-btn');
    const $loginAnnBtn = $('.login-annonymous')


    /* -------------------------------------------------------------------------- */


    /* -------------------------------------------------------------------------- */

    let searchNav =
        `<li class="search-nav">
            <a href="#">
                <i class="fas fa-search"></i>
            </a>
        </li>`
        ;

    let accountNav =
        `<li class="account-nav">
            <a href="">
                <i class="fas fa-user"></i>
            </a>
        </li>`
        ;

    let logoutNav =
        `<li class="logout-nav">
            <a href="">
                <i class="fas fa-sign-out-alt"></i>
            </a>
        </li>`
        ;

    /* ----------------------------hide modal and append logout button ---------------------------------------------- */

    auth
        .onAuthStateChanged(user => {
            if (user) {
                console.log('signed in');
                // …show something !!
                $('.modal-account').css('display', 'none');
                $('.toggle-nav').empty();
                $('.toggle-nav').append(logoutNav);
            } else {
                console.log('signed out');
                // …hide something ..
                $('.toggle-nav').empty();
                $('.toggle-nav').append(accountNav);
            }
        });

    /* ------------------------------sign up with username and password-------------------------------------------- */

    $(document).on('submit', '.account-form', e => {
        e.preventDefault();
    
        if ( $('.submit-btn').val() === 'SIGN UP' ) {

        const email = $emailInput.val();
        const pass = $passInput.val();
        console.log(email, pass);

        auth
            .createUserWithEmailAndPassword(email, pass)
            .then(cred => {
                console.log(cred.user);

                alert('You CREATED an account')
                console.log('new account');
                $('.user-sign-up').hide();
            })
            .catch(function (err) {
                // Handle Errors here
                var errorCode = err.code;
                var errorMessage = err.message;

                console.error(errorCode + '——' + errorMessage);
            });
        
        }

    });

    /* --------------------------sign in with username and password------------------------------------------------ */

    $(document).on('submit', '.account-form', e => {
        e.preventDefault();
    
        if ( $('.submit-btn').val() === 'LOGIN' ) {

        const email = $emailInput.val();
        const pass = $passInput.val();
        console.log(email, pass);

        auth
            .signInWithEmailAndPassword(email, pass)
            .then(cred => {
                console.log(cred.user);

                alert('you just LOGGED IN');
                console.log('signed in');

                // $('.user-sign-in').hide();
            })
            .catch(function (err) {
                // Handle Errors here
                var errorCode = err.code;
                var errorMessage = err.message;

                console.error(errorCode + '——' + errorMessage);
            });

        }

    });
    /* --------------------log out------------------------------------------------------ */

    $(document).on('click', '.logout-nav', e => {
        e.preventDefault();

        auth
            .signOut()
            .then(() => {
                alert('the user LOGGED OUT');
                console.log('signed out');
                $('.user-sign-in').show();
            });
    });

    /*-----------------------anonymous login -----------------------------------------------------*/
    // const $userSignin = $('id-input');

    // $guestForm $guestBtn 

    // const userlogin = $userSignin.val();

    $guestBtn.on('click', e => {
        e.preventDefault();

        firebase.auth().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                // ...
            } else {
                // User is signed out.
                // ...
            }
            // ...
        });
    });

    /*  */
});


