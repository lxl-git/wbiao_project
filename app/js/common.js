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
             console.log($dd_a);
             this.event();
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
        }
    }
}())