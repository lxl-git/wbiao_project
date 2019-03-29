define(['api'], function(api) {
    let inputAll, $i, $btnAll, timer
    // regexp
    let check = {
        phone(val) {
            const reg = /^1[34578]\d{9}$/
            return reg.test(val)
        },
        password(val) {
            const reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
            return reg.test(val)
        }
    }
    return {
        init() {
            // 获取DOM元素
            inputAll = api.$All('input');
            $i = api.$All('i');
            $btnAll = api.$All('button');
            this.event()
        },
        event() {
            const self = this;
            // 循环input，添加onblur事件
            for(let i = 0; i < inputAll.length -1; i++ ) {
                if(inputAll[i].className == "min-input") {
                    // console.log(inputAll[i])
                    continue;
                }
                inputAll[i].onblur = function () {
                    self.tips(this);
                }
            }
            // 验证码
            $btnAll[0].onclick = function () {
                let flag = $btnAll[0].disabled = "disabled" 
                let num = 60,
                timer = setInterval(function () {
                    num--
                    $btnAll[0].innerText = num  + '秒再次获取';
                    if(num === 0) {
                        clearInterval(timer);
                        flag = $btnAll[0].disabled = null; 
                        $btnAll[0].innerHTML = '获取验证码'
                    }
                }, 1000) 
            }
            // 验证表单
            $btnAll[1].onclick = function (e) {
                e = e || window.event;
                for(let i = 0; i < inputAll.length -1; i++ ) {
                    let none =api.Style($i[i], 'display')
                    if(inputAll[i].className == "min-input") {
                        // console.log(inputAll[i])
                        continue;
                    }
                    if(none) {
                        // console.log(none)
                        console.log('所有表单验证成功');
                        const $from = api.$('.content_box')
                        var obj = {
                            phone: $from['phone'].value,
                            password: $from['password'].value
                        }
                        api.sendAjax('server/register/php',{
                            method: 'POST',
                            data: obj
                        })
                        .then((date) => {
                            if(date.code == 200) {
                                console.log(date)
                                localStorage.phone = JSON.stringify(date);
                                location.href = 'http://localhost/wbiao_project/dist/index.html';
                            }else {
                                alert('用户名或密码错误，请重试')
                            }
                        })
                        .catch((date) => {
                            alert(date)
                        });
                    }else {
                        inputAll[i].focus();
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;
                    }
                }
            }
            inputAll[4].onblur = function () {
               let val = inputAll[4].value
               const tip = this.parentNode.nextElementSibling;
               if(( val === inputAll[3].value) && val != '') {
                   tip.style.display = 'none';
               }else {
                    tip.style.display = 'block';
               }
            }
        },
        // input 合法值判断
        tips(input) {
            let name = input.name,
            val = input.value;
            tip = input.parentNode.nextElementSibling;
            // console.log(check[name](val))
            if(check[name](val)) {
                tip.style.display = 'none'
            }else {
                tip.style.display = 'block';
            }
        }
    }
});