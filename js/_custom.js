const cards = document.querySelectorAll('.card');
var gCoutn = 0;

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('mousemove', start);
    card.addEventListener('mouseout', stop);
}

function start(event) {
    const cardItem = this.querySelector('.card_item');
    const halfH = cardItem.offsetHeight / 2,
        halfW = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfH) / 50 + 'deg) rotateY(' + (event.offsetX - halfW) / 50 + 'deg)';
}

function stop() {
    this.querySelector('.card_item').style.transform = 'rotate(0)';
}


function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        window.gCoutn = window.gCoutn + 1;
        layer.style.transform = `translateX(${event.clientX*speed/1000}px) translateY(${event.clientY*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax);

const progress = document.querySelector('.progress');

window.addEventListener('scroll', show);

function show(event) {
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let result = windowScroll / windowHeight * 100;

    progress.style.width = result + '%';
}



function showLog() {
    login = document.getElementById("log");
    console.log(login);
    login.style.zIndex = 1;
    reg = document.getElementById("reg");
    console.log(reg);
    reg.style.zIndex = -2;
}

function showReg() {
    login = document.getElementById("log");
    console.log(login);
    reg = document.getElementById("reg");
    console.log(reg);
    login.style.zIndex = -2;
    reg.style.zIndex = 1
}