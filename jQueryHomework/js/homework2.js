let globalTimer = setInterval(NextImage, 5000);
$("#article2 #imgdiv").html("<img src='images/homework2/1.jpg' alt='alt'/>");
let str = "";
for (let i = 1; i <= 10; i++) {
    str += "<li></li>";
}
$("#article2 #selectdiv").html(str);
str = "";
for (let i = 0; i < 10; i++) {
    str += `<img src='images/homework2/${i}.jpg' alt='alt' style='left:${100*i}%;z-index:-1'/>`;
}
$("#article2 #imgdiv").html(str);
$("#article2 li").first().css({ "background-color": "black", "width": "20px" });
let imgindex;
let nowindex = 0;
function ShowImage() {
    let step = imgindex - nowindex;
    $("#imgdiv img").animate({ left: `-=${100 * step}%` }, 500);
    nowindex = imgindex;
    $("#article2 li").eq(nowindex).css({ "background-color": "black", "width": "20px" }).siblings().css({ "background-color": "transparent", "width": "10px" });
}

$("#article2 li").mouseenter(function () {
    imgindex = $(this).index();
    ShowImage();
});

$("#next").click(function () {
    NextImage();
});

function NextImage() {
    imgindex = nowindex + 1;
    if (imgindex == $("#article2 li").length) {
        imgindex = 0;
    };
    ShowImage();
}

$("#previous").click(function () {
    imgindex = nowindex - 1;
    if (imgindex < 0) {
        imgindex = $("#article2 li").length-1;
    };
    ShowImage();
});

//$("#imgdiv img").mouseenter(function () { clearInterval(globalTimer) }).mouseleave(function () { globalTimer = setInterval(NextImage, 5000); });

$("#article2 .showimg").hover(function () { clearInterval(globalTimer); }, function () { globalTimer = setInterval(NextImage, 5000); });

