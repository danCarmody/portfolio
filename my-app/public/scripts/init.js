jQuery(document).ready(function($) {
    setTimeout(function() {
        $('h1.responsive-headline').fitText(1,{minFontSize: '40px', maxFontSize:'90px'});
    }, 100);

    $('.smoothscroll').on('click',function(e) {
        e.preventDefault();

        const target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });

    const sections = $("section");
    const navigation_links = $("#nav-wrap a");

    sections.waypoint({
        handler: function(event,direction) {
            const active_section;
                active_section = $(this);
                if(direction === "up") active_section = active_section.prev();
                const active_link = $('#nav-wrap a[href="#' + active_section.attr("id") +'"]');

            navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
        },
        offset: '35%'
    });

})