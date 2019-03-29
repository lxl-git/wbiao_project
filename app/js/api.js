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
                    obj.style[attr] = value;
                }
                if(window.getComputedStyle) { 
                    // 其他以及ie9+
                    return window.getComputedStyle(obj, null)[attr];
                }
                if (obj.currentStyle){ 
                    // ie8-
                    return obj.currentStyle[attr];
                }
        },
        sendAjax(url, options) {
            const __default = {
                method: 'GET',
                data: null,
                dataType: 'json',
                ...options
            }
            let {data} = __default;
            let method = __default.method.toUpperCase();
            if (method == 'GET') {
                for (var attr in data) {
                    url += `&${attr}=${data[attr]}`;
                }
                url += '&_=' + Date.now();
                if (!url.includes('?')) {
                    url = url.replace('&', '?');
                }
                data = null;
            } else {
                data = JSON.stringify(data);
            }
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.send(data);
            return new Promise((resolve, reject) => {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        let data = xhr.responseText;
                        if (xhr.status == 200) {
                            if(__default.dataType == 'json') {
                                data = JSON.parse(data);
                            }
                            resolve(data);
                        }else{
                            reject(data);
                        }
                    }
                }
            })
        },
        createCode() {
            code = "";
            var codeLength = 4;//验证码的长度，可变
            var canvas=document.getElementById('myCanvas');//获取画布
            var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符
        
            for (var i = 0; i < codeLength; i++) {
                var charIndex = Math.floor(Math.random() * 36);
                code += selectChar[charIndex];
            }
             if (canvas) {
                var ctx=canvas.getContext('2d');
                ctx.fillStyle='#FFFFFF';
                ctx.fillRect(0,0,70,27);
                ctx.font="20px arial";
                // 创建渐变
                var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
                gradient.addColorStop("0","magenta");
                gradient.addColorStop("0.5","blue");
                gradient.addColorStop("1.0","red");
                // 用渐变填色
                ctx.strokeStyle=gradient;
                ctx.strokeText(code,5,20);//画布上添加验证码
            }
            return code;
        }   
    }
});
