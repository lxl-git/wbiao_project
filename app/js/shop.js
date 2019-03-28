$(document).ready(function(){

            

            

        function htmlsearch(){
            // $('.upper-right').html('');
            var htmlsearch =`
            <div class="title">${localStorage.title}</div>
                        <div class="upper-more">
                            万年历腕表 物有所值
                            <span>了解更多>></span>
                        </div>
                        <div class="model">
                            <div class="model-a">
                                <span>型号:</span>
                                <span>80172/000P-9589</span>
                            </div>
                            <div class="model-b">
                                <span>编号</span>
                                <span>10642</span>
                            </div>
                            <div class="model-c">
                                <span>品牌</span>
                                <span>江诗丹顿</span>
                            </div>
                            <div class="model-d">
                                <span>销量</span>
                                <span>0</span>
                            </div>
                        </div>
                        <div class="upper-price">
                            <div class="price-money">
                                <div class="money-left">万表价</div>
                                <div class="money-right">
                                    <span class="money-a">￥</span>
                                    <span class="money-b">${localStorage.price}</span>
                                    <span class="money-c">￥5200000</span>
                                </div>
                            </div>
                            <div class="price-stage">
                                <div class="stages-left">分期</div>
                                <div class="stages-right">
                                    <span class="stages-a">
                                        每月
                                        <i class="satges-i">381333.3</i>
                                        元×12期
                                    </span>
                                    <span class="stages-b">(免息免手续费)</span>
                                </div>
                                <div></div>
                            </div>
                            <div class="price-ticket">
                                <div class="tick-left">领券</div>
                                <div class="tick-right">
                                    <div class="tick-a">
                                        <div class="item tick-a-a"></div>
                                        <div class="item tick-a-b">
                                            ￥1688现金券
                                        </div>
                                        <div class="item tick-a-c"></div>
                                    </div>
    
                                    <span class="tick-span">更多</span>
                                    <div class="tick-b tick-none iconfont icon-triangle-copy-copy-copy"></div>
                                    <div class="tick-c tick-none">
                                        <div class="tick-c-a">
                                            <span class="span-a iconfont icon-youhuiqua">￥1668</span>
                                            <span class="span-b">
                                                <div class="text">现金券</div>
                                                <div class="texttwo">2019.03.11-2019.04.01</div>
                                            </span>
                                            <span class="span-c">领取</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="give">
                            <div class="give-left">配送</div>
                            <div class="give-right">
                                <i>(顺丰包邮)</i>
                                预计5-10个工作日内发货
                            </div>
                        </div>
                        <div class="promise">
                            <div class="left">承诺</div>
                            <div class="right">
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                                <li class="f1">
                                    <i></i>
                                    <span>正品保障</span>
                                    <div class="popup">全站自营直采，高于瑞士国家标准的进出仓全检机制，万表7年零假货投诉。</div>
                                </li>
                            </div>
                        </div>
                        <div class="service">
                            <div class="left">服务</div>
                            <div class="right">
                                <a href="">
                                    <span>名匠保修</span>
                                    <i class="iconfont icon-xiayiye"></i>
                                </a>
                                <div class="servicePopup">该产品享有2年名匠保修服务</div>
                            </div>
                        </div>
                        <div class="style">
                            <div class="style-left">款式</div>
                            <div class="style-right">
                                <a class="fone" href="">
                                    <span class="right-img">
                                        <img src="image/s-shop.jpg" alt="">
                                    </span>
                                    <span class="right-text">真皮 白色 鳄鱼皮</span>
                                    <div class="tag"></div>
                                </a>
                            </div>
                        </div>
                        <div class="number">
                            <div class="number-left">数量</div>
                            <div class="number-right">
                                <div class="right-a">
                                    <span class="reduce">-</span>
                                    <input class="cont" type="text"value="1">
                                    <span class="plus">+</span>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                        <div class="button-a">立即购买</div>
                        <div class="button-b">加入购物车</div>
                        <div class="button-code">
                            <p class="pone iconfont icon-erweima"></p>
                            <p class="text">手机购买</p>
                            <div class="code-popup">
                                <img src="image/s-ma.png" alt="">
                            </div>
                        </div>
                    </div>
            `
            $('.upper-right').append(htmlsearch);
        }
       htmlsearch();
        //点击加号减号，增加减少数量
        var num = 1;
        $('.right-a').on('click','.plus',function(){
            num++
            $('.cont').val(num);
        })
        $('.right-a').on('click','.reduce',function(){
           num-- 
           if(num<0){
                num = 0;
            }
            $('.cont').val(num);
        })


        //点击加入购物车，把数据放到本地存储
        $('.button-b').click(function(){
            if(!localStorage.phone){
                location.href = 'login.html'
            }
            // var arr = [];
            var val = $('.cont').val()-0;
            var title = $('.title').html();
            var price = $('.money-b').html();
            var img = localStorage.img;
            var phone = localStorage.phone;
            var uid = localStorage.uid;
            var obj = {val,title,price,uid,phone,img};
            // arr.push(obj);
            localStorage.data = JSON.stringify(obj);
            // var b = localStorage.data;
            function setData(data){
                var listData = localStorage.listData || '[]';
                listData = JSON.parse(listData);
                var flag = true;
                for (var i = 0; i < listData.length; i++) {
                    if (data.uid == listData[i].uid) {
                        listData[i].val += data.val;
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    listData.push(data);
                }
                localStorage.listData = JSON.stringify(listData);
        }
        setData(obj)
    })


    $('.tick-a-b').mouseenter(function(){
        $('.tick-b').css('display','block');
        $('.tick-c').css('display','block');
    
        $('.tick-b').mouseenter(function(){
            $('.tick-b').css('display','block');
            $('.tick-c').css('display','block');
            })
    
            $('.tick-c').mouseenter(function(){
                $('.tick-b').css('display','block');
                $('.tick-c').css('display','block');
                })
        })
    $('.tick-a-b').mouseleave(function(){
        $('.tick-b').css('display','none');
        $('.tick-c').css('display','none');
    })
    $('.tick-b').mouseleave(function(){
        $('.tick-b').css('display','none');
        $('.tick-c').css('display','none');
    })
    $('.tick-c').mouseleave(function(){
        $('.tick-b').css('display','none');
        $('.tick-c').css('display','none');
    })
    $('.button-code').mouseenter(function(){
        $('.code-popup').css('display','block')
    })
    $('.button-code').mouseleave(function(){
        $('.code-popup').css('display','none')
    })
    
    $('.title-con').on('click','li',function(){
        $(this).addClass('on').siblings('li').removeClass('on');
        if($(this).val() == '1'){
            $('.content-one').css('display','block').siblings('div').css('display','none')
        }
        if($(this).val() == '2'){
            $('.content-two').css('display','block').siblings('div').css('display','none')
        }
        if($(this).val() == '3'){
            $('.content-three').css('display','block').siblings('div').css('display','none')
        }
        if($(this).val() == '4'){
            $('.content-four').css('display','block').siblings('div').css('display','none')
        }
        if($(this).val() == '5'){
            $('.content-five').css('display','block').siblings('div').css('display','none')
        }
    })
})
