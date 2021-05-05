$(document).ready(function () {
    // Banner Slider
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        pauseOnHover: false
    });
    // Team Slider
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Testimonail Slider


    $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-img'
    });
    $('.slider-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text-slider',
        dots: false,
        prevArrow: '.testi-angle-left',
        nextArrow: '.testi-angle-right',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    // Venobox
    $('.venobox').venobox({
        framewidth: '960px',
        frameheight: '540px',
        border: '2px',
        bgcolor: '#ffffff',
        share: ['facebook', 'twitter', 'download'],
        spinner: 'three-bounce'
    });

    // Sticky Top Menu

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');

        if (scrolling >= 100) {
            sticky.addClass('nav-bg');
        } else {
            sticky.removeClass('nav-bg');
        }
    })

    // Scroll To Top

    var scrolltotop = { setting: { startline: 100, scrollto: 0, scrollduration: 1e3, fadeduration: [500, 100] }, controlHTML: '<img src="img/scroll-image.png" class="scroll-top"/>', controlattrs: { offsetx: 5, offsety: 5 }, anchorkeyword: "#top", state: { isvisible: !1, shouldvisible: !1 }, scrollup: function () { this.cssfixedsupport || this.$control.css({ opacity: 0 }); var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto); t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({ scrollTop: t }, this.setting.scrollduration) }, keepfixed: function () { var t = jQuery(window), o = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx, s = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety; this.$control.css({ left: o + "px", top: s + "px" }) }, togglecontrol: function () { var t = jQuery(window).scrollTop(); this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline ? !0 : !1, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]), this.state.isvisible = !1) }, init: function () { jQuery(document).ready(function (t) { var o = scrolltotop, s = document.all; o.cssfixedsupport = !s || s && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, o.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), o.$control = t('<div id="topcontrol">' + o.controlHTML + "</div>").css({ position: o.cssfixedsupport ? "fixed" : "absolute", bottom: o.controlattrs.offsety, right: o.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "Scroll to Top" }).click(function () { return o.scrollup(), !1 }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != o.$control.text() && o.$control.css({ width: o.$control.width() }), o.togglecontrol(), t('a[href="' + o.anchorkeyword + '"]').click(function () { return o.scrollup(), !1 }), t(window).bind("scroll resize", function (t) { o.togglecontrol() }) }) } }; scrolltotop.init();


    // Smooth Scrolling
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

})