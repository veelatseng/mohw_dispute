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
            // console.log(fluid_status);
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
            /*-----------------------------------*/
            //////////// notice訊息區塊 ////////////
            /*-----------------------------------*/
            $('[class*="notice"] a.close').click(function(e) {
                $(this).parent('[class*="notice"]').hide();
            });
            /*-----------------------------------*/
            //////////// Accordion設定 ////////////
            /*-----------------------------------*/
            $('.accordion').each(function() {
                $(this).find('.accordion-content').hide();
                var _accordionItem = $(this).children('ul').children('li').children('a');
                _accordionItem.each(function() {
                    $(this).click(function(e) {
                        $(this).parent('li').siblings().children('.accordion-content').slideUp();
                        $(this).next('.accordion-content').slideToggle();
                        e.preventDefault();
                    });
                });
            });
            /*-----------------------------------*/
            /////////////fatfooter開關/////////////
            /*-----------------------------------*/
            $('.btn-fatfooter').click(function(e) {

                $(this).parent('.container').find('nav>ul>li>ul').stop(true, true).slideToggle(function() {
                    if ($(this).is(':visible')) {
                        $('.btn-fatfooter').html("收合");
                        $('.btn-fatfooter').attr('name', '收合選單');
                    } else {
                        $('.btn-fatfooter').html("展開");
                        $('.btn-fatfooter').attr('name', '展開選單');
                    }
                });
                $(this).stop(true, true).toggleClass('close');
            });
            /*-----------------------------------*/
            ////////img objectfix cover////////////
            /*-----------------------------------*/
            $(window).on('resize load', function(e) {
                $('.imgOuter').each(function(index, el) {
                    var _imgContainer = $(this),
                        cWidth = _imgContainer.width(),
                        cHeight = _imgContainer.height(),
                        ratioC = cWidth / cHeight,
                        _img = _imgContainer.find('img');

                    var iWidth = $(this).find('img').width(),
                        iHeight = $(this).find('img').height(),
                        ratioImg = iWidth / iHeight,
                        scaleRatio;
                    if (ratioC > ratioImg) {
                        scaleRatio = cWidth / iWidth;
                        _img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
                    } else {
                        scaleRatio = cHeight / iHeight;
                        _img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
                    }
                    $(this).find('img').removeClass('img-responsive');
                });
            });

            /*-----------------------------------*/
            //////////////相簿縮圖+燈箱//////////////
            /*-----------------------------------*/
            //縮圖，same as thumbnail模組
            $(window).on('resize load', function(e) {
                $('.imgOuter').each(function(index, el) {
                    var _imgContainer = $(this),
                        cWidth = _imgContainer.width(),
                        cHeight = _imgContainer.height(),
                        ratioC = cWidth / cHeight,
                        _img = _imgContainer.find('img');

                    var iWidth = $(this).find('img').width(),
                        iHeight = $(this).find('img').height(),
                        ratioImg = iWidth / iHeight,
                        scaleRatio;
                    if (ratioC > ratioImg) {
                        scaleRatio = cWidth / iWidth;
                        _img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
                    } else {
                        scaleRatio = cHeight / iHeight;
                        _img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
                    }
                    $(this).find('img').removeClass('img-responsive');
                });
            });
            //相簿JQ設定
            $('.gallery').append('<div class="lightbox"><a href="#" class="light_close">關閉</a><a href="#" class="light_prev">上一張</a><a href="#" class="light_next">下一張</a><img src="" alt=""><div class="galler_overlay"></div></div>')
            $('.gallery .lightbox').hide(); // lightbox先隱藏
            $('.light_close').click(function(event) {
                $('.gallery .lightbox').hide(); // 如果點到close，lightbox隱藏
                $('body').removeClass('noscroll');
                $('.gallery .lightbox .caption').html('');
            });
            $('.gallery .lightbox .galler_overlay').click(function(event) {
                $('.gallery .lightbox').hide(); // 如果點到overlay，lightbox隱藏
                $('body').removeClass('noscroll');
                $('.gallery .lightbox .caption').html('');
            });
            var PIC_SRC = $('.gallery .lightbox img').attr('src');
            // var THUMB_PIC = $(this).attr('src');
            var PIC_INDEX = 0;
            $('.gallery a').click(function(e) {
                e.preventDefault();
            });
            $('.gallery .thumbnail img').each(function(index) {
                $(this).click(function(e) {
                    var THUMB_H3 = $(this).attr('alt');
                    $('body').addClass('noscroll');
                    $('.gallery .lightbox').append('<div class="caption">' + THUMB_H3 + '<div>');
                    THUMB_PIC = $(this).attr('src');
                    $('.gallery .lightbox img').attr('src', THUMB_PIC);
                    $('.gallery .lightbox').fadeIn();
                    $('.gallery .lightbox .galler_overlay').fadeIn();
                    PIC_INDEX = index;
                    e.preventDefault();
                });
            });
            //計算當頁縮圖數量
            var PIC_NUM = $('.gallery .thumbnail').length;
            // 下一張 function
            function NEXT_MOV() {
                //pic_index+1 如果小於 圖片數量
                if ((PIC_INDEX + 1) < PIC_NUM) {
                    //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
                    PIC_INDEX++; //pic_index ++
                    //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
                } else {
                    PIC_INDEX = 0 //如果等於或大於圖片數量 pic_index =0 ，跳到第一張
                }
                THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
                THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
                $('.gallery .lightbox .caption').html(THUMB_H3);
                $('.gallery .lightbox img').hide();
                $('.gallery .lightbox img').fadeIn();
                $('.gallery .lightbox img').attr('src', THUMB_PIC);
                //放入燈箱 img src
                e.preventDefault();
            }
            $('.gallery .light_next').click(function(e) {
                NEXT_MOV();
                e.preventDefault();
            });
            // 上一張 function
            function PREV_MOV() {
                if ((PIC_INDEX + 1) > 1) { //pic_index+1  如果大於 1
                    //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
                    PIC_INDEX--; //pic_index --
                    //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
                } else {
                    PIC_INDEX = PIC_NUM - 1; //如果等於或小於圖片數量 pic_index =圖片數量-1 ，跳到最後一張
                }
                //取縮圖 img src
                THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
                THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
                $('.gallery .lightbox .caption').html(THUMB_H3);
                $('.gallery .lightbox img').hide();
                $('.gallery .lightbox img').fadeIn();
                $('.gallery .lightbox img').attr('src', THUMB_PIC);
                //放入燈箱 img src
            }
            $('.gallery .light_prev').click(function(e) {
                PREV_MOV();
                e.preventDefault();
            });
            // 左右按鍵移動
            $('body').keydown(function(e) {
                if (e.keyCode == 37) {
                    PREV_MOV();
                } else if (e.keyCode == 39) {
                    NEXT_MOV();
                } else if (e.keyCode == 27) {
                    $('.gallery .lightbox').hide();
                }
            });
            /*-----------------------------------*/
            ////////////////多組Tab////////////////
            /*-----------------------------------*/
            $('.tabs').find('.active').next('.tabContent').show();
            var tw = $('.tabSet').width();
            var tabItemHeight = $('.tabs>h2>a').innerHeight();
            $('.tabs').find('.tabContent').css('top', tabItemHeight);

            function tabs() {
                var WindowW = $(window).width();
                $('.tabs').find('.active').next('.tabContent').show();
                var tabItemHeight = $('.tabs>h2>a').innerHeight();
                $('.tabs').find('.tabContent').css('top', tabItemHeight);
                $('.tabSet').each(function() {
                    tw = $(this).width();
                    var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();
                    var tabItemLength = $(this).find('h2').length;
                    $(this).height(tabContentHeight + tabItemHeight);
                    var tabWidth = Math.ceil(tw / tabItemLength);
                    $(this).find('h2>a').width(tabWidth);
                    if (WindowW >= 768) {
                        $(this).find('h2:last').css({
                            position: 'absolute',
                            right: '0',
                        });
                    } else {
                        $(this).find('h2:last').css({
                            position: 'relative',
                            right: '0',
                        });
                    }
                });
                $(this).parent('h2').siblings().removeClass('active');
                $(this).parent('h2').addClass('active');
                tabContentHeight = $(this).parent('h2').next('.tabContent').innerHeight();
                $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight);
                return false;
            }
            $('.tabs>h2>a').focus(tabs);
            $('.tabs>h2>a').click(tabs);
            $(window).on("load resize", function(e) {
                tabs();
            });
            /*-----------------------------------*/
            ///////////////置頂go to top////////////
            /*-----------------------------------*/
            $(window).bind('scroll', function() {
                if ($(this).scrollTop() > 200) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            /*-----------------------------------*/
            /////Click event to scroll to top//////
            /*-----------------------------------*/
            $('.scrollToTop').click(function(e) {
                $('html, body').animate({ scrollTop: 0 }, 400);
                e.preventDefault();
            });

            });
