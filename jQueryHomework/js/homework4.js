let strdistrict = "";
let cities = [];
let districts = [];
let cssObj = { backgroundColor: "gray", color: "white" };
$.each(data, function (index, element1) {
    cities.push(element1.name);
    let specificdistrict = [];
    $.each(element1.districts, function (index, element) {
        strdistrict += `<tr><td>${element1.name}</td><td>${element.zip}</td><td>${element.name}</td></tr>`;
        specificdistrict.push(element.name);
    });
    districts.push(specificdistrict);
});
$("#article4 table").html(strdistrict);
let strselectcity = "";

$.each(cities, function (index, element) {
    let city = $(`#article4 tr td:first-child:contains(${element})`);
    city.first().attr("rowspan", `${city.length}`).end().slice(1, city.length + 1).remove();
    strselectcity += `<option value="${element}">${element}</option>`;
});
$("#article4 #city").html(strselectcity);

AddDistrict();
$("#article4 #city").change(AddDistrict);
$("#article4 #district").change(ShowCityDistrict);

function AddDistrict() {
    let strselectdistrict = "";
    let city = $("#article4 #city").val();
    let cityIndex = cities.indexOf(city);
    $.each(districts[cityIndex], function (index, element) {
        strselectdistrict += `<option value="${element}">${element}</option>`;
    });
    $("#article4 #district").html(strselectdistrict);
    ShowCityDistrict();
}



function ShowCityDistrict() {
    $("#article4 td").css({ backgroundColor: "transparent",color:"black"})
    let city = $("#article4 #city").val();
    let district = $("#article4 #district").val();
    let tdCity = $(`#article4 td[rowspan]:contains(${city})`);
    tdCity.css(cssObj);
    let cityIndex = cities.indexOf(city);
    let length = districts[cityIndex].length;

    //$(`#article4 td:not(td[rowspan]):contains(${district})`).css(cssObj).siblings().css(cssObj);


    //console.log($(`#article4 td[rowspan]:contains(${city})`));

}
