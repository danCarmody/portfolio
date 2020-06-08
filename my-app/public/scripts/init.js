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

    $('header').css({'height': $(window).height()});
    $(window).on('resize', function() {
        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });

    $(window).on('scroll', function() {
            const h = $('header').height();
            const y = $('window').scrollTop();
        const nav = $('#nav-wrap');
            if( (y > h*.20) && (y < h) && ( $(window.outerWidth() >768) ) ) {
                nav.fadeOut('fast');
            }
            else {
                if (y< h*.20) {
                    nav.removeClass('opaque').fadeIn('fast');
                }

                else {
                    nav.addClass('opaque').fadeIn('fast');
                }
            }        
    });

    $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade' 
    });
    
    $('form#contactForm button.submit').click(function() {
        $('#image-loader').fadeIn();

        const contactName = $('#contactForm #contactName').val();
        const contactEmail = $('#contactForm #contactEmail').val();
        const contactSubject = $('#contactForm #contactSubject').val();
        const contactMessage = $('#contactForm #contactMessage').val();

        const data = 'contactName' + contactName + '&contactEmail' + contactEmail + '&contactSubject' + contactSubject + '&contactMessage' + contactMessage;

        $.ajax({
            type:"POST",
            url: "inc/sendEmail.php",
            data: data,
            success: function(msg) {
                if(msg == 'OK') {
                    $('#image-loader').fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                else {
                    $('#image-loader').fadeOut();
                    $('#message-warning').html(msg);
                        $('#message-warning').fadeIn();
                }
            }
        });
        return false;
    });
});