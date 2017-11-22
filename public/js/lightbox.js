function startLightBox(){

    var lbBg= document.getElementById("lightBoxBg");
    var lb= document.getElementById("lightBox");

    lbBg.style.display="block";
    lb.style.display="block";

    if ($(window).width() < 750) {
        var windowWidth=$(window).width()-40;
        var windowHeight=windowWidth*0.5625

    }
    else {
        var windowWidth=560;

        var windowHeight=315;
    }




    $('iframe').animate({width: windowWidth, height:windowHeight});


}



function dismiss(){
    var lbBg= document.getElementById("lightBoxBg");
    var lb= document.getElementById("lightBox");

    lbBg.style.display="none";
    lb.style.display="none";
    $('iframe').attr('src', $('iframe').attr('src'));

    $('iframe').animate({width:"50", height:"50"});

}


