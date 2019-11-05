$(() => {
    /*  */
    $(document).on('click', '.account-nav', function(e) {
        e.preventDefault();
        $('.modal-account').css('display', 'flex');
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
    
    // how I can not use add/remove class to do the job?
    // how do I search the specifc parent tag using 'this'?
    // clear input value when closing
    
    /* 
    - how to apply the same outcome?
    - click exit btn | click outside content | press esc
    */