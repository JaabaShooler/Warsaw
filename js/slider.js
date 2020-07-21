$(document).ready(function(){
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.exmpl');
    const btnNext = $('.BtnNext');
    const btnPrev = $('.BtnPrev');
    const itemCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item){
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
    });

    btnPrev.click(function(){
        const itemLeft = Math.abs(position) / itemWidth;
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
    });


    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`, 
        });
        chekBtn();
    }

    const chekBtn = () =>{
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemCount - slidesToShow) * itemWidth
            );
    };

    chekBtn();
})
