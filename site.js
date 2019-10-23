jQuery(document).ready(function(){

    $('li.anim'+Math.floor((Math.random() * 20) + 1)).addClass('highlighted');

    $(function() {
        var lis = $("ul > li.anim"),
            currentHighlight = Math.floor((Math.random() * 20) + 1);
            N = 6; //interval in seconds
        setInterval(function() {
            currentHighlight = (currentHighlight + 1) % lis.length;
            lis.removeClass('highlighted').eq(currentHighlight).addClass('highlighted');
        }, N * 1000);
    });

    jQuery('img').hover(function(){
        jQuery('video').toggleClass('videoToggle');
    });

});