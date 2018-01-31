$(function() {
    document.documentElement.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    }, false);
    //load
    $('.left_nav').load('demo_menu.htm');
    $('header').load('demo_header.htm');

    // 上方選單
    _HH = $("header").height();
    // 滿版顯示按鈕
    $('.main').append('<a href="#" class="re_layout"></a>');
    var fluid_status = false;
    console.log(fluid_status);
    // 手機選單設定
    $('.main>.content').prepend('<div class="float_menu"><a href="#"class="close"></a></div><div class="overlay"></div>'); //新增一個手機選單
    $('.overlay').hide(); // 遮罩
    $('.float_menu').hide();
    var resizeTimer;

    $(window).on('resize load', function(e) {
        clearTimeout(resizeTimer);
        var _WH = $(window).width();
        // console.log("螢幕寬度" + _WH);        
        // RWD設定
        resizeTimer = setTimeout(function() {
            if (_WH < 992) {
                fluid_status = false;
                $('.re_layout').hide();
                $('.left_nav').show();
                $('.main >.content').removeClass('fluid');
                $('.re_layout').removeClass('hidden');

            } else {
                // 設定
                $('.re_layout').show();
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 100) { // this refers to window
                        $('.re_layout').css('top', $(this).scrollTop() + "px");
                    } else {
                        $('.re_layout').css('top', $(this).scrollTop() + "px");
                    }
                });
                $('.re_layout').off().mousedown(function(e) {
                    $('.left_nav').toggle();
                    $(this).toggleClass('hidden');
                    $('.main >.content').toggleClass('fluid');
                    if (!fluid_status) {
                        fluid_status = true;
                        e.preventDefault();
                        console.log(fluid_status);
                    } else {
                        fluid_status = false;
                        e.preventDefault();
                        console.log(fluid_status);
                    }
                });
            }

        }, 50);


        if (_WH < 992) { //手機螢幕才觸發
            $('body').removeClass('noscroll');
            $('body').css('padding-top', _HH + 10); //設定body padding
            $(".left_nav").appendTo(".float_menu");
            $('.close').click(function(e) {
                $('.float_menu').hide();
                $('.overlay').hide();
                $('body').removeClass('noscroll');
                $('.left_nav ul ul').hide();
            });
        } else { //pc才觸發
            $('body').css('padding-top', 0);
            $('body').removeClass('noscroll');
            $(".left_nav").prependTo(".main");
            $('.overlay').hide();
            $('.left_nav ul ul').hide();
            $('.left_nav>ul>li>a').removeClass('animated fadeInDown');



        }

    });

});