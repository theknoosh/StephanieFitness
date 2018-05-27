
// Whatever is in here will run immediately on page load
$("document").ready(function(){
    animation();
    document.getElementById('video').addEventListener('ended',myhandler,false);
    $('#progressbar').addClass('animate');
});

function animation() {
    // $(".navigate").animate({
    // top: "-=" + (parseInt($(".navigate").css("top")) - 100) + "px"
    // });
    $("#progressbar").animate({
        // top:'100px',
        opacity:1,
        // transform: scale(1,1)
        }, {
        duration: 1000,
        easing: 'linear'
    });
    // $(".navigation").fadeIn("slow");
    $(".navigation").animate({
        top:'0px',
        opacity: "1"
        }, {
        duration: 1000,
        easing: 'linear'
    });
}

function myhandler(e) {
//   $("#videoBlock").remove();
$('#video').animate({
    opacity: "0"
    }, {
    duration: 500,
    easing: 'linear'
}); 
}

