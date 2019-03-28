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
    }
});
