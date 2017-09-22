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
        if (window.innerWidth < 1280) {
            clearTimeout();
        } else {
        $(".warning").css("display", "block");        
    }}, 5000);
    setTimeout(function() {
        if (window.innerWidth < 1280) {
            clearTimeout();
        } else {
        $(".warning").css("opacity", "1");
    }}, 6000);
    
    $(".social").remove();
    
    $(".closewarning").click(function() {
        $(".warning").css("display", "none");
    });
});