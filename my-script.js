$(function () {
    setTimeout(function () {
        $('.loading-background').toggleClass("nonedisplay");
    }, 800);
})

$('.my-button').click(function () {
    var text = 'Buttons';
    
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        text = 'This is my buttons';
    }


    $('.section-title').text(text);
    $.get("https://jsonplaceholder.typicode.com/users/1", function (data) {
        console.log(data);
        // var user = $.parseJSON(data);

        // $('jumbotron').prepend('<p>' + data.name+ '</p>');
        // $('jumbotron').prepend('<p>' + data.email+ '</p>');
    });
});