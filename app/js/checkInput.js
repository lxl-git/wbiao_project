define(['api'], function(api) {
    let inputAll, $i, $btnAll, timer
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
            inputAll = api.$All('input');
            $i = api.$All('i');
            $btnAll = api.$All('button');
            this.event()
        },
        event() {
            const self = this;
            for(let i = 0; i < inputAll.length -1; i++ ) {
                if(inputAll[i].className == "min-input") {
                    // console.log(inputAll[i])
                    continue;
                }
                inputAll[i].onblur = function () {
                    self.tips(this);
                }
            }
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
            $btnAll[1].onclick = function (e) {
                e = e || window.event;
                for(let i = 0; i < inputAll.length -1; i++ ) {
                    let none =api.Style($i[i], 'display')
                    if(inputAll[i].className == "min-input") {
                        // console.log(inputAll[i])
                        continue;
                    }
                    if(none) {
                        console.log(none)
                        console.log('所有表单验证成功');
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