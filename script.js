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
    $(".hamburger").click(function(){
        $("nav ul li").toggleClass("menu-ham");
        $("header h1").toggleClass("header-active");
        $("header h3").toggleClass("header-active");
        $("header button").toggleClass("header-active");
        
    });

    setTimeout(function() {
        $(".warning").css("display", "block");        
    }, 10000);
    setTimeout(function() {
        $(".warning").css("opacity", "1");
    }, 12000);

    $(".closewarning").click(function() {
        $(".warning").css("display", "none");
    });

});