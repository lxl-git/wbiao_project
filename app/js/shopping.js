var shopping =(function(){
    let $allrng,$rad,$ig,$allwe,$all;
    let $btn_left,$btn_right,$num_btn,$zong,$dan,$age_num,$box;
    return{
        init(){
            
            // $num_btn = $('.num_btn');//文本框
            // $dan = $('.danjia'); // 单价
            // $zong = $('.zongjia'); // 总价
            $age_num = $('.age_num') // 

            $box = $('.x_x');
            
            this.shopping_show();
            this.event();
        },
        shopping_show(){
            $box.innerHTML = '';
            var self = this;
            var show_wu =$('.main_show_box');
            var show_you = $('.main_show_shopping');
            var json_data;
            //判断是否登入
  
            var loadList = localStorage.phone;
            if(loadList){
                if(json_data.length-0>=1){
                    show_you.css('display','block');
                    show_wu.css('display','none');
                    json_data =JSON.parse(localStorage.listData);
                    json_data.forEach(x => {
                        var innerHTML = `
                        <div class="shopping_show_1">
                        <i class="rad ishow lpl"></i>
                        <a href="javascript:;" class="show_img"><img src="../image/${x.img}" alt=""></a>
                        <h3 class="text_aaa">
                            <em>${x.title}</em>
                            <i>真皮 白色 鳄鱼皮</i>
                        </h3>
                        <div class="bottom_p1">¥<em class="danjia">${x.price}</em></div>
                        <div class="show_input">
                            <i class="btn_min">-</i>
                            <input type="text" class="num_btn" value="${x.val}" readonly="readonly">
                            <i class="btn_max">+</i>
                        </div>
                        <p class="num_sss">¥<em class="zongjia">${x.price * x.val}</em></p>
                        <div class="show_btn">
                            <a href="javascript:;" class="del">删除</a>
                            <a href="javascript:;" class="yys">移入收藏</a>
                        </div>
                       </div>
                        `;
                        $box.append(innerHTML);
                   });
                }
                else{
                    show_you.css('display','none');
                    show_wu.css('display','block');
                }
            }else
            {
                show_you.css('display','none');
                show_wu.css('display','block');   
            }

           
            $box.on('click','.del',function(){
                let nnn= $(this).index('.del');
                console.log(json_data[nnn])  
                json_data.splice(nnn,1);
                var string_json = JSON.stringify(json_data);
                localStorage.listData = string_json ;
                location.reload();
            })
        },
        event(){
            $allrng = $('.rng'); // 全选1
            $allig =$('.ig');//全选2
            $allwe = $('.we'); // 商店全选
            $rad = $('.rad');//商品按钮
            $all = $('.lpl');//全部商品商店按钮

            $btn_left = $('.btn_min'); // 减
            $btn_right= $('.btn_max');  //加

            let $cont_bottom = $('.cont_bottom');
            let $num_btn =$('.num_btn');
            var num = 0;
            var  zong,age_age,jisu;
            var zongnum = 0;
            var age_age_num = 0;
            $allrng.on('click',function(){
                if(!$(this).hasClass('ion')){
                    $(this).addClass('ion');
                    $rad.addClass('ion')
                    $allig.addClass('ion');
                    $allwe.addClass('ion');
                    zong=$rad.siblings('.num_sss').children('.zongjia');
                    for(var i = 0;i<zong.length;i++){
                       zongnum += zong[i].innerHTML-0;
                    }
                    $age_num.text(zongnum);
                 }else{ 
                     $(this).removeClass('ion');
                     $rad.removeClass('ion');
                     $allig.removeClass('ion');
                     $allwe.removeClass('ion');
                     zongnum = 0;
                    $age_num.text(zongnum);
                 }
            })
            $allig.on('click',function(){
                if(!$(this).hasClass('ion')){
                    $(this).addClass('ion');
                    $rad.addClass('ion');
                    $allrng.addClass('ion');
                    $allwe.addClass('ion');
                    zong=$rad.siblings('.num_sss').children('.zongjia');
                    for(var i = 0;i<zong.length;i++){
                       zongnum += zong[i].innerHTML-0;
                    }
                    $age_num.text(zongnum);

                 }else{ 
                     $(this).removeClass('ion');
                     $rad.removeClass('ion');
                    $allrng.removeClass('ion');
                    $allwe.removeClass('ion');
                    zongnum = 0;
                    $age_num.text(zongnum);
                 }
            })
            $allwe.on('click',function(){
                if(!$(this).hasClass('ion')){
                    $(this).addClass('ion');
                    $rad.addClass('ion');
                    zong=$rad.siblings('.num_sss').children('.zongjia');
                    for(var i = 0;i<zong.length;i++){
                       zongnum += zong[i].innerHTML-0;
                    }
                    $age_num.text(zongnum);
                 }else{ 
                     $(this).removeClass('ion');
                     $rad.removeClass('ion');
                     $allrng.removeClass('ion');
                    $allig.removeClass('ion');
                    zongnum = 0;
                    $age_num.text(zongnum);
                 }
            })
            $rad.on('click',function(){  //点击选中 点击取消
                var sg;
                $zong = $(this).parent().children('.num_sss').children('.zongjia');
                if(!$(this).hasClass('ion')){
                   $(this).addClass('ion');
                   num += $zong.text()-0;
                   $age_num.text(num); 

                }else{ 
                    $(this).removeClass('ion');
                    $allrng.removeClass('ion');
                    $allig.removeClass('ion');
                    $allwe.removeClass('ion');
                    num -= $zong.text()-0;
                    $age_num.text(num);
                }
            })
            //加减
            let num_sui,age,num_sux;
            $box.on('click','.btn_min',function(){
                var ngp = $(this).siblings('.num_btn');
                num_sux = ngp.val()-0;
                num_sux = num_sux - 1;
                if(num_sux <= 1 ){
                    num_sux = 1;
                }
                let json_ss = JSON.parse(localStorage.listData);
                let nnn= $(this).index('.btn_min');
                json_ss[nnn].val=num_sux;
                var string_json = JSON.stringify(json_ss);
                localStorage.listData = string_json ;
                ngp.val(num_sux);
            })
            $box.on('click','.btn_max',function(){
                var ngp = $(this).siblings('.num_btn');
                num_sui = ngp.val()-0;
                num_sui = num_sui + 1;
                if(num_sui >= 99 ){
                    num_sui = 99;
                }
                let json_ss = JSON.parse(localStorage.listData);
                let nnn= $(this).index('.btn_max');
                json_ss[nnn].val=num_sui;
                var string_json = JSON.stringify(json_ss);
                localStorage.listData = string_json ;
                ngp.val(num_sui);
            })

        }
       
    }
}())