var img = 1,
    imgMax = 8,
    time = 20000;
var image = document.getElementById('planet');



setInterval(function() {
    $('#planet').css('opacity', '0');
}, (time - 100));
setInterval(function() {
    image.src = 'img/images/planets/' + (++img > imgMax ? (img = 1) : img) + '.png';
    $('#planet').css('opacity', '1');
}, time);