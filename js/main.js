$(document).ready(function () {
    



$('.contenedor div:gt(0)').hide(); 
$("#img1").click(function () {
    $("#imagen1").fadeIn("slow"); 
    $(".carrusel").not("#imagen1").fadeOut("3000");
})
$("#img2").click(function () {
    $("#imagen2").fadeIn("slow");
    $(".carrusel").not("#imagen2").fadeOut("3000");      
})
$("#img3").click(function () {
    $("#imagen3").fadeIn("slow");
    $(".carrusel").not("#imagen3").fadeOut("3000");       
})
$("#img4").click(function () {
    $("#imagen4").fadeIn("slow");
    $(".carrusel").not("#imagen4").fadeOut("3000");       
})
});