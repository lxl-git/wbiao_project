define(['api'], function(api, tab) {
    let tabAll, phone_login, code_login, password_login, pos, btnAll, dowmload_pic, dowmload
    return {
        init() {
            tabAll = api.$All('span');
            phone_login = api.$('.phone')
            code_login = api.$('.code_login')
            password_login = api.$('.password')
            pos = api.$('.pos');
            btnAll = pos.children;
            dowmload_pic = api.$('.qr');
            dowmload = api.$('.dowmload');
            this.event();
        },
        event() {
            const self = this,
            onStatus = password_login.style.display = 'block',
            offStatus = password_login.style.display = 'none';
            tabAll[0].onclick = function () {
                    this.style.color = '#cc5252';
                    tabAll[1].style.color = 'gray';
                    code_login.style.display = 'none';
                    pos.style.display = 'block'
                    phone_login.style.display = 'block';
            }
            tabAll[1].onclick = function () {
                if(onStatus) {
                    this.style.color = '#cc5252';
                    tabAll[0].style.color = 'gray';
                    phone_login.style.display = 'none';
                    pos.style.display = 'none';
                    code_login.style.display = 'block';
                    password_login.style.display = 'none';
                }
            }
            let onoff = true;
            btnAll[0].onclick = function () {
                if(onoff) {
                    onoff = !onoff;
                    phone_login.style.display = 'none';
                    password_login.style.display = 'block';
                    btnAll[0].innerHTML = `
                        <a href="javascript:void(0);">
                            手机动态码登录
                            <em class="icon_hot"></em>
                        </a>`;
                }else {
                    onoff = !onoff;
                    phone_login.style.display = 'block';
                    password_login.style.display = 'none';
                    btnAll[0].innerHTML = `
                        <a href="javascript:void(0);">账号密码</a>`;
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
        }
    }
});