$(function() {

    /*-----------------------------------*/
    //////////// menu ////////////
    /*-----------------------------------*/
  //   //header 選單
  //   var _menu = $('.header .menu');
  //   _menu.find('li').has('ul').addClass('hasChild');
  //   var liHasChild = _menu.find('li.hasChild'),
  //           subMenuWidth = liHasChild.first().children('ul').outerWidth();

  //   liHasChild.hover(
  //       function(){
  //           var _showing = $(this).children('ul');
  //           _showing.stop().fadeIn(200);
  //           showingMenu(_showing);
  //       },
  //       function(){$(this).children('ul').stop().fadeOut(200);}
  //   );
  //   liHasChild.keyup(
  //       function(){
  //           var _showing = $(this).children('ul');
  //           _showing.show();
  //           showingMenu(_showing);
  //           $(this).siblings().focus(function(){$(this).hide();});
  //   });

  //   function showingMenu(_showing){
  //       var  showingOffset = _showing.offset().left;
  //       if (showingOffset+subMenuWidth > ww) {
  //           _showing.css({left: -1*subMenuWidth+5, top:5});
  //       }
  //   }

  //   _menu.find('li').keyup( 
  //       function(){
  //           $(this).siblings().children('ul').hide();
  //       });
  //   _menu.find('li:last>a').focusout(
  //       function(){
  //           _menu.find('li ul').hide();
  //   });
  //   //複製所需區塊到.sidebar
  // var _sidebar = $('.sidebar'); 
  //   $('.navigation').clone().prependTo( _sidebar );
  //   _menu.clone().prependTo( _sidebar);
  //   _megaMenu.parent().clone().prependTo( _sidebar);
  //   _sidebar.find('.megaMenu').addClass('menu');


  //   //行動版 menu
  //   _sidebar.find('.menu, .megaMenu').find('li.hasChild>a').click(function(){
  //       $(this).next().slideToggle();
  //       $(this).parent().toggleClass('closeThis');
  //   });
  //   //產生遮罩
  //   $( '.main' ).append( '<div class="overlay"></div>' );
  //   var _overlay = $('.overlay');
    
  //   function showSidebar(){
  //       _sidebar.css({'margin-left':0,'transition':'.5s'});
  //       _overlay.show(0, function(){
  //           _overlay.fadeTo('500', 0.5);
  //       });   
  //   }
  //   function hideSidebar(){
  //       _sidebar.css('margin-left', _sidebar.width() * -1 + 'px');
  //       _overlay.fadeTo('500', 0, function(){
  //           _overlay.hide();
  //       });
  //   }

  //   var _sidebarClose = $('.sidebarClose'),
  //       _sidebarCtrl = $('.sidebarCtrl');   
  //       _overlay.parent().css('min-height', 'inherit');

  //   _sidebar.css('margin-left', _sidebar.width() * -1 + 'px');

  //   _sidebarCtrl.click(function() {             
  //       if (_overlay.is(':visible')) {
  //           hideSidebar();
  //       } else {
  //           showSidebar();
  //       }
  //   });

  //   _overlay.add(_sidebarClose).click(function() {
  //       hideSidebar();
  //   });



  //   //固定版頭
  //   var hh = $('.header').outerHeight(true),
  //           menuH = _menu.outerHeight(),
  //           navH = $('.navbar').height();
    
  //   _window.scroll(function() {
  //       if (ww>1000 && $(this).scrollTop() > hh-menuH ){
  //           $('.header').addClass('fixed');
  //           $('.center').css('margin-top', menuH );
  //       } else if ( ww<=1000 && $(this).scrollTop() > 0 ){
  //           $('.header').addClass('fixed');
  //           $('.navi , .center').css('margin-top', hh);
  //           $('.navi').next('.center').css('margin-top', 0);
  //       } else {
  //           $('.header').removeClass('fixed');
  //           $('.navi , .center').css('margin-top', 0);
  //       }
  //   });

  //   //行動版查詢
  //   var _search = $('.search'),
  //           _searchCtrl = $('.searchCtrl');

  //   if(ww<1000){_search.css('top', hh);}

  //   _searchCtrl.click(function(){
  //       _search.slideToggle();
  //       _searchCtrl.toggleClass('close');
  //   });
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
