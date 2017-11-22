$(document).ready(function(){
    setBindings()
});

function setBindings(){
    $("nav a").click(function(e){
        if(!(event.target.id=="biznes"|| event.target.id=="onas") ){
            e.preventDefault();
            var sectionId= e.currentTarget.id+"Sekcja";

            $("html body").animate({
                scrollTop:$("#"+sectionId).offset().top-57
            },1200)
        };

    });

}


