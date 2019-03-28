$(document).ready(function(){
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
                // var arr = [];
                var val = $('.cont').val()-0;
                var title = $('.title').html();
                var price = $('.money-b').html();
                var uid = 1;
                var obj = {val,title,price,uid};
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
            console.log(localStorage.listData)
        })

            
            

})
