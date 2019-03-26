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
// var $boxAll = document.querySelectorAll('.box');
        // for (var i = 0; i < $boxAll.length; i++) {
            // $boxAll[i].onclick = (function () {
            //     var num = 0;
            //     return function (e) {
            //         e = e || window.event;
            //         const target = e.target || e.which;
            //         if (target.nodeName === 'BUTTON') {
            //             if (target.className === 'add') {
            //                 num++;
            //             } else if (target.className === 'reset') {
            //                 num = 0
            //             }
            //             this.querySelector('.count').innerHTML = num;

            //         }
            //     }
            // }())
            var num = 1;
            $('.right-a').on('click','reduce',function(){
                num+1
                console.log(num)
                // return function(){
                //     if($(this).className == 'reduce'){
                //         num-1
                //     }
                //     if($(this).className == 'plus'){
                //         num+1
                //     }
                //     $(this).siblings('input').val() = num;
                // }
                
            })
        // }
})
