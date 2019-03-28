$(document).ready(function () {
    // $('.left-two').on('mouseenter','.consult',function(){
    //     $(this).addClass('Add').siblings('li').removeClass('Add');
    //     $('.left-four').css("height","336px")
    //     $('.two-one').css("display","none")
    //     $('.two-two').css("display","block")
    // })
    // $('.left-two').on('mouseenter','.acc',function(){
    //     $(this).addClass('Add').siblings('li').removeClass('Add');
    //     $('.left-four').css("height","550px")
    //     $('.two-one').css("display","none")
    //     $('.two-two').css("display","block")
    // })

    $('.left-four').on('mouseenter', '.consult', function () {
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-four').css("height", "336px")
        $('.main-two').css("display", "none")
        $('.main-one').css("display", "block")
    })
    $('.left-four').on('mouseenter', '.acc', function () {
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-four').css("height", "550px")
        $('.main-one').css("display", "none")
        $('.main-two').css("display", "block")
    })

    $('.left-five').on('mouseenter', '.consult', function () {
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-five').css("height", "982px")
        $('.five-main-two').css("display", "none")
        $('.five-main-one').css("display", "block")
    })
    $('.left-five').on('mouseenter', '.acc', function () {
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-five').css("height", "501px")
        $('.five-main-one').css("display", "none")
        $('.five-main-two').css("display", "block")
    })

    $('.left-two').on('mouseenter', '.acc', function () {
        console.log(1);
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.two-one').css("display", "none")
        $('.two-two').css("display", "block")
    })
    $('.left-two').on('mouseenter', '.consult', function () {
        console.log(2)
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.two-two').css("display", "none")
        $('.two-one').css("display", "block")
    })

    $('.sort_a').on('mouseenter', 'li', function () {
        $(this).addClass('on').siblings('li').removeClass('on');
    })
    $('.sort_b').on('mouseenter', 'i', function () {
        $(this).addClass('ii')
    })

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
    $('.cat_title').mouseenter(function () {
        $('.cat_wrap').css('display', 'block');
    })
    $('.cat_subcont').mouseleave(function () {
        $('.cat_wrap').css('display', 'none')
    })
    $('.cat_wrap').mouseleave(function () {
        $('.cat_wrap').css('display', 'none')
    })

    // var insertData = function(data){
    //     data.forEach(x => {
    //         var htmlCon = `
    //         <li>
    //         <a class="show-img" target="_blank" href="shop.html">
    //             <img src="${x.img}" alt="">
    //         </a>
    //         <div class="goods_txt">
    //             <p class="prc">
    //                 <span class="s-prc">
    //                     ￥
    //                     <em>${x.price}</em>
    //                 </span>
    //                 <del>￥4576000</del>
    //             </p>
    //             <a class="des" href="">${x.title}</a>
    //             <div class="sale">
    //                 <span class="sale_tip">80小时动储/</span>
    //                 <em class="sale_num">销量6089</em>
    //             </div>
    //             <a class="s-shop" href="">天梭TISSOT</a>
    //             <p class="tag">
    //                 <span>自营</span>
    //             </p>
    //             <div class="collect">
    //                 <a class="collect-one" href="">加入收藏</a>
    //                 <a class="collect-two" href="">加入购物车</a>
    //             </div>
    //         </div>
    //     </li>`;
    //         $('.clearfix').append(htmlCon);
    //     })
    // }
    // function getJson(insertData){
    //     console.log(insertData)
    //     $.getJSON('../json/json.json', data => {
    //         console.log(data);
    //         console.log(insertData)
    //         insertData(data);

    //     })
    // }
    // getJson();


    var shop = (function () {
        return {
            getShopData() {
                $.getJSON('../json/json.json', data => {
                    this.insertData(data);
                })
            },
            insertData(data) {
                console.log(data)
                // $('.clearfix').html('');
                data.forEach(x => {
                    console.log(x)
                    var htmlCon = `
                        <li>
                        <a class="show-img" target="_blank" href="shop.html">
                            <img src="" alt="">
                        </a>
                        <div class="goods_txt">
                            <p class="prc">
                                <span class="s-prc">
                                    ￥
                                    <em>${x.price}</em>
                                </span>
                                <del>￥4576000</del>
                            </p>
                            <a class="des" href="">${x.title}</a>
                            <div class="sale">
                                <span class="sale_tip">80小时动储/</span>
                                <em class="sale_num">销量6089</em>
                            </div>
                            <a class="s-shop" href="">天梭TISSOT</a>
                            <p class="tag">
                                <span>自营</span>
                            </p>
                            
                        </div>
                    </li>`
                     $('.clearfix').append(htmlCon);//把li 加到 ul
                })
            }
        }
    }())
    shop.getShopData();
})

