let WindowWidth = $(window).width();
let WindowHeight = $(window).height();
let objWidth = $("#article3img").width();
let objHeight = $("#article3img").height();
let widthRatio = objWidth / WindowWidth;
let heightRatio = objHeight / WindowHeight;
move();
$(window).resize(move);
function move() {
    let objWidth = widthRatio * $(window).width();
    let objHeight = heightRatio * $(window).height();
    let objTop = ($(window).height() - objHeight) / 2;
    let objLeft = ($(window).width() - objWidth) / 2;
    $("#article3img").css({
        height: objHeight,
        width: objWidth,
        top: objTop,
        left: objLeft,
    });
    
}

