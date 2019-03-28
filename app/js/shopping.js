var shopping =(function(){
    let $allrng,$rad,$ig,$allwe,$all;
    let $btn_left,$btn_right,$num_btn,$zong,$dan,$age_num,$box;
    return{
        init(){
            this.json_show();
            
            // $num_btn = $('.num_btn');//文本框
            // $dan = $('.danjia'); // 单价
            // $zong = $('.zongjia'); // 总价
            $age_num = $('.age_num') // 

            $box = $('.x_x');
        },
        shopping_show(data){
            data.forEach(x => {
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
                     <input type="text" class="num_btn" value="${x.num}" readonly="readonly">
                     <i class="btn_max">+</i>
                 </div>
                 <p class="num_sss">¥<em class="zongjia">${x.price}</em></p>
                 <div class="show_btn">
                     <a href="javascript:;" class="del">删除</a>
                     <a href="javascript:;" class="yys">移入收藏</a>
                 </div>
                </div>
                 `;
                 $box.append(innerHTML);
            });
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
                    age_age = $(this).siblings('.show_input').children('.num_btn');
                    age_age_num += age_age.val()-0;
                    jisu += age_age.val()-0;
                    $cont_bottom.text(age_age_num);
                }else{ 
                    $(this).removeClass('ion');
                    $allrng.removeClass('ion');
                    $allig.removeClass('ion');
                    $allwe.removeClass('ion');
                    age_age_num -= age_age.val()-0;
                    $cont_bottom.text(age_age_num);
                    num -= $zong.text()-0;
                    jisu -= age_age.val()-0;
                    $age_num.text(num);
                }
            })
            //加减
            let num_sui,age;
            $btn_left.on('click',function(){
                $num_btn = $(this).parent().parent().children('.show_input').children('.num_btn');
                num_sui= $num_btn.val() - 1;
                if(num_sui <= 1){
                    num_sui = 1;
                }
                $num_btn.val(num_sui);
                $dan =  $(this).parent().parent().children('.bottom_p1').children('.danjia');
                $zong = $(this).parent().parent().children('.num_sss').children('.zongjia');
                age = $dan.text() * $num_btn.val();
                $zong.text(age);
            })
            $btn_right.on('click',function(){
                $num_btn = $(this).parent().parent().children('.show_input').children('.num_btn');
                num_sui= $num_btn.val() - 0 +1;
                if(num_sui <= 1){
                    num_sui = 1;
                }
                $num_btn.val(num_sui);
                $dan =  $(this).parent().parent().children('.bottom_p1').children('.danjia');
                $zong = $(this).parent().parent().children('.num_sss').children('.zongjia');
                age = $dan.text() * $num_btn.val();
                $zong.text(age);
            })

        },
        json_show(){
            let _this =this;
            $.ajax({
                url:"../json/shopping.json",
                type:"get",
                async:"json",
                success:function(data){
                    _this.shopping_show(data);
                    _this.event();
                        return data;
                }
            })
        }
    }
}())