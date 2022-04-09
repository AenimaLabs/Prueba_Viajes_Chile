$(document).ready(function(){
    
    $("a").click(function(e){
        var gato =this.hash
        $("html, body").animate({
            scrollTop: $(gato).offset().top -56
        }, 800);
    })
})