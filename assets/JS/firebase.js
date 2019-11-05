/* -------------------------------------------------------------------------- */

$(() => {
    /*  */
    
    /* -------------------------------------------------------------------------- */
    
    // const logoutNav = $('.logout-nav');
    
    const $userForm = $('.user-form');
    const $emailInput = $('.email-input');
    const $passInput = $('.pass-input');
    
    const $loginBtn = $('.login-btn');
    const $signupBtn = $('.sign-up-btn');
    
    /* -------------------------------------------------------------------------- */
    
    const firebaseConfig = {
        apiKey: "AIzaSyAEgZVGKLpktoJVDCiHRoug_rLi7qjSTcg",
        authDomain: "project-snowy.firebaseapp.com",
        databaseURL: "https://project-snowy.firebaseio.com",
        projectId: "project-snowy",
        storageBucket: "project-snowy.appspot.com",
        messagingSenderId: "111717425092",
        appId: "1:111717425092:web:c99b2c8a86c02db87d0e91"
    };
    
    firebase.initializeApp(firebaseConfig);
    // database snapshot
    const db = firebase.database();
    // console.log(database);
    const auth = firebase.auth();
    
    /* 
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('signed in');
            $('#login').hide();
            const logoutB = $('<button>').attr('id', 'logoutbutton');
            logoutB.text('Logout')
            $('#logoutbutton').append(logoutB);
            $('#logoutbutton').show();
        } else {
            console.log('signed out');
            $('#login').show();
            $('.logoutbutton').empty();
        }
    });
     */
    /* -------------------------------------------------------------------------- */
    
    
    let accountNav =
    `<li class="account-nav">
        <a href="">
            ACCOUNT <i class="fas fa-user"></i>
        </a>
    </li>`
    ;
    // let logoutBtn = $('<li>')
    // logoutBtn.append(
    let logoutNav =
    `<li class="logout-nav">
        <a href="">
            LOGOUT <i class="fas fa-sign-out-alt"></i>
        </a>
    </li>`
    ;
    // );
    
    
    
    /* -------------------------------------------------------------------------- */
    
    auth
    .onAuthStateChanged(user => {
        if (user) {
            console.log('signed in');
            // …show something !!
            $('.modal-account').css('display', 'none');
            $('.log-nav').empty();
            $('.log-nav').append(logoutNav);
        } else {
            console.log('signed out');
            // …hide something ..
            $('.log-nav').empty();
            $('.log-nav').append(accountNav);
        }
    });
    
    /* -------------------------------------------------------------------------- */
    
    $signupBtn.on('click', e => {
        e.preventDefault();
    
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
    
    });
    
    /* -------------------------------------------------------------------------- */
    
    $loginBtn.on('click', e => {
        e.preventDefault();
    
        const email = $emailInput.val();
        const pass = $passInput.val();
        console.log(email, pass);
    
        auth
        .signInWithEmailAndPassword(email, pass)
        .then( cred => {
            console.log(cred.user);
    
            alert('you just LOGGED IN');
            console.log('signed in');
            
            // $('.user-sign-in').hide();
        })
        .catch(function(err) {
            // Handle Errors here
            var errorCode = err.code;
            var errorMessage = err.message;
            
            console.error(errorCode + '——' + errorMessage);
        });
    });
    /* -------------------------------------------------------------------------- */
    
    $(document).on('click', '.logout-nav', e => {
        e.preventDefault();
    
        auth
        .signOut()
        .then( () => { 
            alert('the user LOGGED OUT');
            console.log('signed out');
            $('.user-sign-in').show();
        });
    });
    
    /*  */
    });
    
    
    