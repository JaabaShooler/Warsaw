$(document).ready(function(){

    $('.header--burger').click(function(){
        $('.header--burger, nav').toggleClass('active')
        $('body').toggleClass('lock')
    })

})