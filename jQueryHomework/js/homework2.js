let startPlay = setInterval(PlayImage, 2000);
$("#article2 #imgdiv").html('<img src="images/homework2/1.jpg">');
let str = "";
for (let i = 1; i <= 10; i++) {
    str += `<img src="images/circle.png" class="circleimg">`;
}
$("#selectdiv").html(str);

function PlayImage() {

}