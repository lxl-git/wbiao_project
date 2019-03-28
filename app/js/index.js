// nav下拉tab栏切换
//banner左侧内容栏
$(function () {
    var thisTime;
    //鼠标离开左侧内容栏
    $('.cat_wrap .cat_list .float').mouseleave(function (even) {
        thisTime = setTimeout(thisMouseOut, 1000);
    });
    //鼠标点击左侧内容栏   滑动出弹层
    $('.cat_wrap .cat_list .float').mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
        clearTimeout(thisTime);
        var thisUB = $('.cat_wrap .cat_list .float').index($(this));
        if ($.trim($('.cat_subcont .cat_sublist').eq(thisUB).html()) != "") {
            $('.cat_subcont').addClass('active');
            $('.cat_sublist').hide();
            $('.cat_sublist').eq(thisUB).show();
        } else {
            $('.cat_subcont').removeClass('active');
        }
    });
    //函数——执行鼠标离开左侧内容栏的动作
    function thisMouseOut() {
        $('.cat_subcont').removeClass('active');
        $('.cat_wrap .cat_list .float').removeClass('active');
    }
    $('.cat_subcont').mouseenter(function () {
        clearTimeout(thisTime);
        $('.cat_subcont').addClass('active');
    });
    $('.cat_subcont').mouseleave(function () {
        $('.cat_subcont').removeClass('active');
        $('.cat_wrap .cat_list .float').removeClass('active');
    });
});
//轮播图 普通
var swiper = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $el,
        showImageIndex = 0;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.cont_ul');
            $imageBoxItem = $imageBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.event();
        },
        event() {
            let _this = this;
            $('.cont_a_left').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
            })
            $('.cont_a_right').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
            })
        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        }
    }
}())
//轮播图 无限 小原点
var swiper_show = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.right_show');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.right_list');
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
            })
            $('.right_left').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
            })
            $('.right_right').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
            })

        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1;
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.removeClass('lihover').eq(index).addClass('lihover');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        }
    }
}())
//轮播图 小圆点 自动轮播
var four = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0,
        timer = null;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.four_ul');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.main_four_tip');
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay()
            })
            $('.four_show_left').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })
            $('.four_show_right').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })

        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.children('i').removeClass('ion').eq(index).addClass('ion');
            $tipsItem.removeClass('lion').eq(index).addClass('lion');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 3000)
        }
    }
}())
var five = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0,
        timer = null;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.five_ul');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.five_tip');
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay()
            })
            $('.five_show_left').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })
            $('.five_show_right').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })

        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.children('i').removeClass('ion').eq(index).addClass('ion');
            $tipsItem.removeClass('lion').eq(index).addClass('lion');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 3000)
        }
    }
}())
var nine = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0,
        timer = null;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.nine_show_ul');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.nine_list');
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay()
            })
            $('.nine_show_left').on('click', function () {
                 showImageIndex--;
                _this.showImage(showImageIndex);
                _this.autoPlay();
            })
            $('.nine_show_right').on('click', function () {
                    showImageIndex++;
                _this.showImage(showImageIndex);
                _this.autoPlay();
            })

        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.removeClass('lihover').eq(index).addClass('lihover');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 3000)
        }
    }
}())
var three = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0,
        timer = null;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.three_ul');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.tree_top_list');
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay()
            })
            $('.main_show_left').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })
            $('.main_show_right').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })

        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.children('i').removeClass('ion').eq(index).addClass('ion');
            $tipsItem.removeClass('lion').eq(index).addClass('lion');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 3000)
        }
    }
}())
var bannerShow = (function () {
    let $imageBox,
        $imageBoxItem,
        $imageWidth,
        $tipsBox,
        $tipsItem,
        $el,
        showImageIndex = 0,
        timer = null;
    return {
        init($ele) {
            $el = $($ele);
            $imageBox = $('.banner-show');
            $imageBoxItem = $imageBox.children('li');
            $tipsBox = $('.banner_list');

            this.createTips($imageBoxItem.length);
            $tipsItem = $tipsBox.children('li');

            const $first = $imageBoxItem.first();
            const $last = $imageBoxItem.last();
            $imageBox.append($first.clone());
            $imageBox.prepend($last.clone());
            $imageWidth = parseInt($el.css('width'));
            $imageBox.css('left', -$imageWidth);

            this.showImage(showImageIndex);
            this.autoPlay();
            this.event();
        },
        event() {
            var _this = this;
            $tipsBox.on('click', 'li', function () {
                var index = $(this).index();
                _this.showImage(index);
                _this.autoPlay()
            })
            $('.a_left_show').on('click', function () {
                showImageIndex--;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })
            $('.a_right_show').on('click', function () {
                showImageIndex++;
                _this.showImage(showImageIndex);
                _this.autoPlay()
            })

        },
        // 自动生成小圆点
        createTips(num) {
            for (var i = 0; i < num; i++) {
                $tipsBox.append('<li><i></i></li>');
            }
        },
        showImage(index) {
            var maxIndex = $imageBoxItem.length - 1
            if (index < 0) {
                index = maxIndex;
                $imageBox.css('left', -$imageWidth * (index + 2))
            } else if (index > maxIndex) {
                index = 0;
                $imageBox.css('left', 0);
            }
            showImageIndex = index;
            $tipsItem.children('i').removeClass('list_show').eq(index).addClass('list_show');
            $imageBox.stop().animate({
                left: -(index + 1) * $imageWidth
            })
        },
        autoPlay() {
            clearInterval(timer);
            timer = setInterval(_ => {
                showImageIndex++;
                this.showImage(showImageIndex);
            }, 2000)
        }
    }
}())
//图片放大阴影
var show_img = function () {
    let $tow_bottom_left, $on_img, $on_i, $four_left, $six_show_left, $show_left;
    return {
        init($el) {
            $tow_bottom_left = $('.tow_bottom_left'); // 第二个
            $four_left = $('.four_left');
            $six_show_left = $('.six_show_left');
            $show_left = $('.show_left');
            this.event($six_show_left, $four_left, $tow_bottom_left, $show_left);
        },
        event($el, $ea, $eb, $es) {
            $es.hover(
                function () {
                    $on_img = $es.children('.on_img');
                    $on_i = $es.children('.on_i');
                    $on_img.addClass('imgtransform');
                    $on_i.css('opacity', '0.9');
                },
                function () {
                    $on_img.removeClass('imgtransform');
                    $on_i.css('opacity', '0.6');
                }
            );
            $el.hover(
                function () {
                    $on_img = $el.children('.on_img');
                    $on_i = $el.children('.on_i');
                    $on_img.addClass('imgtransform');
                    $on_i.css('opacity', '0.9');
                },
                function () {
                    $on_img.removeClass('imgtransform');
                    $on_i.css('opacity', '0.6');
                }
            );
            $ea.hover(
                function () {
                    $on_img = $ea.children('.on_img');
                    $on_i = $ea.children('.on_i');
                    $on_img.addClass('imgtransform');
                    $on_i.css('opacity', '0.9');
                },
                function () {
                    $on_img.removeClass('imgtransform');
                    $on_i.css('opacity', '0.6');
                }
            );
            $eb.hover(
                function () {
                    $on_img = $eb.children('.on_img');
                    $on_i = $eb.children('.on_i');
                    $on_img.addClass('imgtransform');
                    $on_i.css('opacity', '0.9');
                },
                function () {
                    $on_img.removeClass('imgtransform');
                    $on_i.css('opacity', '0.6');
                }
            );
        }
    }
}()
//倒计时
var timer=(function(){
    let $timerBox,$day,$when,$points,$sec,time=0;
    return{
        init($el){
            time = $el;
            $timerBox = $('.flash_span');
            $day = $('.flash_day');
            $when = $('.flash_when');
            $points =$('.flash_points');
            $sec = $('.flash_sec');
            this.event();
        },
        event(){
            let _this=this;
            // 搜索框聚焦js
            var $search_txt = $('.search_txt');
            var $head_em = $('.head_em');
            var $search_wrap = $('.search_wrap');
            $search_txt.bind({
                focus:function() {
                    $head_em.text('');
                    $search_wrap.css('display','block');
                },
                blur:function() {
                    $head_em.text('机械男表');
                    $search_wrap.css('display','none');
                }
                });
            $(document).ready(function (){
                setInterval(function(){
                    time--;
                   var day = Math.floor(time / (60 * 60 * 24));
                   var hour = Math.floor(time / (60 * 60)) - (day * 24);
                   var minute = Math.floor(time / 60) - (day * 24 * 60) - (hour * 60);
                   var second = Math.floor(time) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);

                   var hour_=_this.zero(hour);
                   var minute_=_this.zero(minute);
                   var second_=_this.zero(second);
                   $day.text(day);
                  $when.text(hour_);
                  $points.text(minute_);
                  $sec.text(second_);
                },1000)
            });

        },
        zero(sum){
            if(sum<10){
                sum='0'+sum;
            }
            return sum;
        }
    }
}())
//页面滚动 显示nav
var sollHeader=(function(){
    let $webscroll,$nav;
    return{
        init(){
            $nav = $('.soll_box');
            this.event();
            this.topgg();
        },
        event(){
            $(window).scroll(function(){
            //nav
              var top =  $(window).scrollTop();// 保存当前 滚动高度
              if(top >= 140){ // 大于140 nav 显示 改变定位
                  $nav.css({"display":"block","position":"fixed","top":"0"});
              }else if(top <= 140){//小于 140 nav隐藏
                $nav.css({"display":"none","position":"absolute","top":"140px"});
              }
            });
        },
        topgg(){
            let $topgg=$('#top_gg');
            let timer,navtop;
            $topgg.on('click',function(){
                    navtop = $(window).scrollTop();
                     timer = setInterval(function(){
                        navtop -= 40;
                        $(window).scrollTop(navtop);
                        if(navtop <= 0){
                            clearInterval(timer);
                        }
             },10)
            })
        }
    }  
}())

//调用
//轮播图
three.init('.main_show_box');
four.init('.four_show_box');
five.init('.five_show_box');
nine.init('.nine_show_box');
swiper_show.init('.right_show_box');
swiper.init('.tow_bottom_cont');
$(document).ready(function(){
    bannerShow.init('.banner_box');
});
//图片放大和阴影
show_img.init();
//倒计时调用
timer.init(559974);
//页面滚动nav滚动
sollHeader.init();