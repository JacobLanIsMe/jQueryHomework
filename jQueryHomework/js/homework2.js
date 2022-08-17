////let startPlay = setInterval(PlayImage, 2000);
$("#article2 #imgdiv").html("<img src='images/homework2/1.jpg' alt='alt'/>");
//$("#article2 .imgbox1").html('<img src="images/homework2/1.jpg">');
//$("#article2 .imgbox2").html('<img src="images/homework2/2.jpg">');
//$("#article2 .imgbox3").html('<img src="images/homework2/3.jpg">');
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
$("#article2 li").first().css("background-color", "black");


$("#article2 li").mouseenter(function () {
    $(this).css("background-color", "black").siblings().css("background-color", "transparent");
    let imgindex = $(this).index();
    $("#article2 #imgdiv").css("left", `${(0 - 100) * imgindex}%`);
});
