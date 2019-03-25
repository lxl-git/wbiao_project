$(document).ready(function(){
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

    $('.left-four').on('mouseenter','.consult',function(){
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-four').css("height","336px")
        $('.main-two').css("display","none")
        $('.main-one').css("display","block")
    })
    $('.left-four').on('mouseenter','.acc',function(){
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-four').css("height","550px")
        $('.main-one').css("display","none")
        $('.main-two').css("display","block")
    })

    $('.left-five').on('mouseenter','.consult',function(){
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-five').css("height","982px")
        $('.five-main-two').css("display","none")
        $('.five-main-one').css("display","block")
    })
    $('.left-five').on('mouseenter','.acc',function(){
        $(this).addClass('Add').siblings('li').removeClass('Add');
        $('.left-five').css("height","501px")
        $('.five-main-one').css("display","none")
        $('.five-main-two').css("display","block")
    })
}) 
