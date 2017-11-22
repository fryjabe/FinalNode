$(document).ready(function(){
    setBindings()
});

function setBindings(){
    $("nav a").click(function(e){
        if(!(event.target.id=="biznes"|| event.target.id=="logo") ){
            e.preventDefault();
            var sectionId= e.currentTarget.id+"Sekcja";

            $("html").animate({
                scrollTop:$("#"+sectionId).offset().top-57
            },1200)
        };

    });

}


