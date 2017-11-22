/**
 * Created by Kuba on 2017-04-07.
 */
$(window).scroll(function(){
    if ($(document).scrollTop()>50){
        $('nav').addClass('shrink');
    }else{
        $('nav').removeClass('shrink');
    }
});