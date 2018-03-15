$(function() {
    /*-----------------------------------*/
    ///////////////// 變數 ////////////////
    /*-----------------------------------*/
    var _window = $(window),
        ww = _window.width(),
        wh = _window.height(),
        _body = $('body'),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;
    /*-----------------------------------*/
    //////////// nojs 先移除////////////////
    /*-----------------------------------*/
    $('html').removeClass('no-js');
    /*-----------------------------------*/
    //////////// nav如果有兩個選單///////////
    /*-----------------------------------*/
    var _navLength = $('.navigation ul').length;
    $(window).load(function() {
        if (_navLength > 1) {
            $('.navigation ul:nth-child(1)').addClass('left_nav');
        }
    });
    /*-----------------------------------*/
    /////// header選單 tab及 fix設定////////
    /*-----------------------------------*/
    var _menu = $('.header .menu');
    _menu.find('li').has('ul').addClass('hasChild');
    var liHasChild = _menu.find('li.hasChild');
    var subMenuWidth = liHasChild.first().children('ul').outerWidth();
    /*-----------------------------------*/
    ////////////// 行動版選單切換////////////
    /*-----------------------------------*/
    $('body').prepend('<div class="menu_overlay"></div>');
    $('body').prepend('<aside class="sidebar"><button type="button" class="sidebarClose">關閉</button></aside>');
    $('header .container').prepend('<button type="button" class="sidebarCtrl">側欄選單</button><button type="button" class="searchCtrl">查詢</button>');
    var menu_status = false;
    var _sidebar = $('.sidebar'),
        _search = $('.search'),
        _nav = $('.navigation'),
        _sidebarClose = $('.sidebarClose'),
        _sidebarCtrl = $('.sidebarCtrl'),
        _overlay = $('.menu_overlay');
    _sidebarCtrl.append('<span></span><span></span><span></span>')
    // 打開選單 function
    function showSidebar() {
        _sidebar.animate({ 'margin-left': 0 }, 400, 'easeOutQuint');
        $('body').addClass('noscroll');
        _overlay.show();
        // $(document).off().touchmove();
    }
    // 縮合選單 function
    function hideSidebar() {
        _sidebar.animate({ 'margin-left': _sidebar.width() * -1 + 'px' }, 400, 'easeOutQuint');
        $('body').removeClass('noscroll');
        _overlay.hide();
    }
    // 打開選單動作
    _sidebarCtrl.click(function() {
        showSidebar();

    });
    // 關閉動作
    _overlay.add(_sidebarClose).click(function() {
        hideSidebar();
    });
    // 無障礙tab設定
    liHasChild.keyup(
        function() {
            $(this).children('ul').fadeIn();
            $(this).siblings().focus(function() {
                $(this).hide();
            });
        });
    _menu.find('li').keyup(function() {
        $(this).siblings().children('ul').hide();
    });
    _menu.find('li:last>a').focusout(function() {
        _menu.find('li ul').hide();
    });

    //設定resize 計時器
    var resizeTimer;
    _window.on("load resize", function(event) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // switch PC/MOBILE 
            ww = _window.width();
            if (ww < wwSmall) {
                /*-----------------------------------*/
                /////////////// 手機版設定 /////////////
                /*-----------------------------------*/
                menu_status = false;
                _sidebar.show();
                _overlay.hide();
                _nav.prependTo(_sidebar);
                _menu.prependTo(_sidebar);
                _search.prependTo(_body);
                _search.addClass('m_search');
                _sidebar.css({ 'margin-left': _sidebar.width() * -1 + 'px' });
                $('.header').addClass('fixed');
                liHasChild.on({
                    mouseenter: function() {
                        $(this).children('ul').stop(true, true).slideDown();
                    },
                    mouseleave: function() {
                        $(this).parent().siblings('ul').hide();
                        $(this).children('ul').stop(true, true).slideUp();
                    }
                });
                 // 副選單點出
                liHasChild.off().on('mouseenter,mouseleave');
                liHasChild.on('touchstart', function() {
                    $(this).off('mouseenter,mouseleave');
                });

                liHasChild.off().on('click', function(e) {
                    e.preventDefault();
                    $(this).siblings('li').find('ul').hide();
                    $(this).children('ul').stop(true, true).fadeToggle();
                    // $(this).prop('disabled', true);
                });
                // 行動版查詢
                var _searchCtrl = $('.searchCtrl');
                $('.m_search').hide();
                _searchCtrl.off().click(function() {
                    $('.m_search').stop(true, true).slideToggle();
                });
                // 如果點在外面
                $(document).on('touchend', function(e) {
                    var target = e.target;
                    if (!$(target).is('.m_search',_searchCtrl)) {
                        $('.m_search').stop(true, true).slideUp();
                        console.log("search_check");
                    }
                });
            } else {
                /*-----------------------------------*/
                /////////////// PC版設定 /////////////
                /*-----------------------------------*/
                hideSidebar();
                $('body').removeClass('noscroll');
                _nav.prependTo('.header .container');
                _search.appendTo('.header .container');
                _menu.appendTo('.header .container');
                _search.removeClass('m_search');
                _search.show();
                // 副選單滑出
                liHasChild.on({
                    mouseenter: function() {
                        $(this).children('ul').stop(true, false).fadeIn();
                    },
                    mouseleave: function() {
                        $(this).parent().siblings('ul').hide();
                        $(this).children('ul').stop(true, false).fadeOut();
                    }
                });
                // 如果點在外面
                $(document).on('touchend click', function(e) {
                    var target = e.target;
                    if (!$(target).is('.menu li a')) {
                        $('.menu').find('li ul').hide();
                        console.log("true");
                    }
                });


            }
        }, 50);
    });
    // 固定版頭
    var hh = $('.header').outerHeight(true),
        menuH = _menu.outerHeight(),
        navH = $('.navbar').height();
    $(window).on("load scroll resize", function(e) {
        ww = _window.width();
        if (ww >= wwSmall && $(this).scrollTop() > hh - menuH) {
            $('.header').addClass('fixed');
            $('.header').css('margin-top', menuH - hh);
            $('.main').css('margin-top', hh);
        } else {
            $('.header').removeClass('fixed');
            $('.header').css('margin-top', 0);
            $('.main').css('margin-top', 0);
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
        $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutQuint');
        e.preventDefault();
    });
});
