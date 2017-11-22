(function(){
    var zysk= $('.subSec.secThree div.zysk'),
        zyskOffset=zysk.offset().top-300,
        documentEl=$(document);

    documentEl.on('scroll', function(){
        if(documentEl.scrollTop()>zyskOffset && zysk.hasClass('ukryte')){ zysk.removeClass('ukryte');
            $("#secondPhone").animate({marginBottom: '+=400'}, 1400, function() {
            });}
    });
})();
