var $top_aaa = (function(){
    let $top_box,$top_box_a,$top_box_show,$top_box_fool,$top_box_show_a,$dd_a;
    return{
        init(){
             $top_box = $('.w_header_right'); //右边的容器
             $top_box_a =$('.w_header_right a'); // 右边全部a
             $top_box_show =$('.top_box'); // 下拉容器
             $top_box_fool = $('.top_box_fool');// 下拉显示
             $top_box_show_a = $('.top_box > a') // 下拉容器a
             $dd_a = $('.inst_middle dl dd a');// 尾部a标签
             this.event();
             this.logdr();
        },
        event(){
            $top_box.on("mouseenter","a",function(){  // a标签移入
                $(this).css("text-decoration","underline");
                $top_box_show_a.css("text-decoration","none");
            })
            $top_box.on("mouseleave ","a",function(){ //a 标签移出
                $(this).css("text-decoration","none");
            })
            $top_box_show.on('mouseenter',function(){  //下拉移入
                $top_box_fool.css('display','block');
                $top_box_show_a.addClass('top_boxa');
            })
            $top_box_show.on("mouseleave ",function(){ //下拉移出
                $top_box_show_a.removeClass("top_boxa");
                $top_box_fool.css('display','none');
            })
            //尾部
            $dd_a.on("mouseenter",function(){
                $(this).css('color','#fff');
            })
            $dd_a.on("mouseleave",function(){
                $(this).css('color','rgb(153, 153, 153)');
            })
        },
        logdr(){
            
            let $top_rifht_left_a1= $('.top_rifht_left_a1');
            let $top_right_Left_a2 = $('.top_right_Left_a2');
            var phone = localStorage.getItem('phone');
            if(phone){
                $top_rifht_left_a1.text('退出');
                $top_rifht_left_a1.addClass('.top_del')
                $top_rifht_left_a1.css('float','right');
                $top_right_Left_a2.text('用户  '+phone);
                $top_right_Left_a2.css({'width':'130px','font-weight':'700','color':'#cc9952'});
            }else{
                $top_rifht_left_a1.text('请登录');
                $top_rifht_left_a1.removeClass('top_del');
                $top_rifht_left_a1.css('float','left');
                $top_right_Left_a2.text('注册即送3500元大礼包');
                $top_rifht_left_a1.css('width','36px');
                $top_right_Left_a2.css({'width':'125px','font-weight':'400','color':'rgb(174, 15, 23)'});
            }   
            if($top_rifht_left_a1.hasClass('top_del')){
                $del = $('.top_del');
                $del.on('click',function(){
                    localStorage.removeItem('phone');
                    location.reload();
                })
            }
        }
    }
}())

$('.header').load('../pages/public.html #header_box', function() {
    $top_aaa.init();// 公共js 执行
});
$('.footer').load('../pages/public.html #footer-box',function(){
    $top_aaa.init();// 公共js 执行
});