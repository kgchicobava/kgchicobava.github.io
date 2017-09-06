$(function(){
    $(window).scroll(function() {
       if($(window).scrollTop() >= 500) {
           $("#btn-up").css("display", "block");
       } 
       if ($(window).scrollTop() < 500) {
           $("#btn-up").css("display", "none");
       }
    });

    $("#btn-up").click(function() {
        $(window).scrollTop(0);
    });
});