define(['api'], function(api) {
    let inputAll, $i, $btn, timer
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
            $btn = api.$('button')
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
            $btn.onclick = function () {
                let flag = $btn.disabled = "disabled" 
                let num = 60,
                timer = setInterval(function () {
                    num--
                    $btn.innerText = num  + '秒再次获取';
                    if(num === 0) {
                        clearInterval(timer);
                        flag = $btn.disabled = null; 
                        $btn.innerHTML = '获取验证码'
                    }
                }, 1000) 
            }
            inputAll[4].onblur = function () {
               let val = inputAll[4].value
               const tip = this.parentNode.nextElementSibling;
               if(( val === inputAll[3].value) && val != '') {
                   tip.style.display = 'none';
                    console.log('验证成功')
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
                console.log('验证成功')
                tip.style.display = 'none'
            }else {
                tip.style.display = 'block';
            }
        }
    }
});