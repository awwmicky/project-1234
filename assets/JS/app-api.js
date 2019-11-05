$(() => {
    let app_id = '89c11dcf';
    let api_key = '8b946bfa6400d727d1b19be930436ff4';
    let base_url = 'https://api.edamam.com/search';
    let query_url = base_url + "?q=beef" +
        `&app_id=${app_id}` +
        `&app_key=${api_key}`


    //
    console.log(query_url);
    // example
    //let url = 'https://api.edamam.com/search?q=chicken&app_id=89c11dcf&app_key=8b946bfa6400d727d1b19be930436ff4&from=0&to=3&calories=591-722&health=alcohol-free'
    // console.log(url);

    // console.log(query_url);
    $.ajax({
        method: "GET",
        url: query_url,
    }).then(data => {
        console.log(data)

    });
});