define(['api'], function(api, tab) {
    let tabAll, phone_login, code_login, password_login, pos, btnAll, dowmload_pic, dowmload, login_btn;
    return {
        init() {
            tabAll = api.$All('span');
            phone_login = api.$('.phone');
            code_login = api.$('.code_login');
            password_login = api.$('.password');
            login_btn = api.$('.log_pas');
            pos = api.$('.pos');
            btnAll = pos.children;
            dowmload_pic = api.$('.qr');
            dowmload = api.$('.dowmload');
            this.event();
            console.log(login_btn);
        },
        event() {
            const self = this;
            tabAll[0].onclick = function () {
                    this.style.color = '#cc5252';
                    tabAll[1].style.color = 'gray';
                    code_login.style.display = 'none';
                    pos.style.display = 'block'
                    phone_login.style.display = 'none';
                    password_login.style.display = 'block';
            }
            tabAll[1].onclick = function () {
                    this.style.color = '#cc5252';
                    tabAll[0].style.color = 'gray';
                    phone_login.style.display = 'none';
                    pos.style.display = 'none';
                    code_login.style.display = 'block';
                    phone_login.style.display = 'none'
                    password_login.style.display = 'none';
            }
            let onoff = true;
            btnAll[0].onclick = function () {
                if(onoff) {
                    onoff = !onoff;
                    phone_login.style.display = 'block';
                    code_login.style.display = 'none'
                    password_login.style.display = 'none';
                    btnAll[0].innerHTML =`
                        <a href="javascript:void(0);">账号密码</a>` ;
                }else {
                    onoff = !onoff;
                    code_login.style.display = 'none'
                    phone_login.style.display = 'none';
                    password_login.style.display = 'block';
                    btnAll[0].innerHTML = `
                        <a href="javascript:void(0);">
                            手机动态码登录
                            <em class="icon_hot"></em>
                        </a>`;
                }
            }
            let flag = true;
            dowmload.onclick = function () {
                if(flag) {
                    flag = !flag;
                    dowmload_pic.style.display = 'block';
                }else {
                    flag = !flag;
                    dowmload_pic.style.display = 'none';
                }
            }
            login_btn.onclick = function () {
                const $from = api.$('.content_box')
                var obj = {
                    phone: $from['phone'].value,
                    password: $from['password'].value
                }
                api.sendAjax('server/login.php', {
                    method: 'POST',
                    data: obj
                } )
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
            }
        }
    }
});