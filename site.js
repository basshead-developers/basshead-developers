jQuery(document).ready(function(){


    $(function() {
        var lis = $("ul > li.anim"),
            currentHighlight = 0;
            N = 8;//interval in seconds
        setInterval(function() {
            currentHighlight = (currentHighlight + 1) % lis.length;
            lis.removeClass('highlighted').eq(currentHighlight).addClass('highlighted');
        }, N * 1000);
    });

    jQuery('img').hover(function(){
        jQuery('video').toggleClass('videoToggle');
    });
});