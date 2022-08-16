let strstar = "";
for (let i = 0; i < 5; i++) {
    strstar += `<img src="images/star.png" style="transition:transform 1s" id="starimg${i+1}">`;
}
$("#stardiv").html(strstar);
$("#stardiv img").css("filter", "grayscale(1)")
let IsClick = false;
let score;
$("#stardiv img").mouseleave(function () {
    $(this).css("transform", "scale(1)");
});
$("#stardiv img").mouseenter(function () {
    if (IsClick) return;
    $(this).css({ "filter": "grayscale(0)", "transform": "scale(1.5)" }).prevAll().css("filter", "grayscale(0)").end().nextAll().css("filter", "grayscale(1)");
    score = $(this).prop("id").substr(7);
    $("#scorediv").html(`打分中...<span>${score}</span>`);
});
$("#stardiv").mouseleave(function () {
    if (IsClick) return;
    $("#stardiv img").css("filter", "grayscale(1)");
    $("#scorediv").html(`打分中...`);
});

$("#stardiv img").click(function () {
    $(this).css("filter", "grayscale(0)").prevAll().css("filter", "grayscale(0)").end().nextAll().css("filter", "grayscale(1)");
    score = $(this).prop("id").substr(7);
    $("#scorediv").html(`你給<span> ${score} </span>顆星`);
    IsClick = true;
});
$("#stardiv img").dblclick(function () {
    $("#stardiv img").css("filter", "grayscale(1)");
    $("#scorediv").html(`打分中...`);
    IsClick = false;
});
