(function(){
    var zysk= $('.subSec.secThree div.zysk'),
        zyskOffset=zysk.offset().top-200,
        documentEl=$(document);

    documentEl.on('scroll', function(){
        if(documentEl.scrollTop()>zyskOffset && zysk.hasClass('ukryte')) zysk.removeClass('ukryte')
    });
})();
