define(function (api) {
    return {
        $All(ele) {
            return document.querySelectorAll(ele);
        },
        $(ele) {
            return document.querySelector(ele);
        },
        Style(obj, attr, value) {
            // 形参依此传入对象, 属性，设置的值
                if(arguments.length == 3){  
                    //当传入三个参数的时候为设置对象的某个值
                    console.log('设置')
                    obj.style[attr] = value;
                }
                if(window.getComputedStyle) { 
                    // 其他以及ie9+
                    console.log('其他以及ie9+')
                    return window.getComputedStyle(obj, null)[attr];
                }
                if (obj.currentStyle){ 
                    // ie8-
                    console.log('ie8-')
                    return obj.currentStyle[attr];
                }
        },   
    }
});