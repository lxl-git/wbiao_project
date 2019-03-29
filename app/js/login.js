require(['api', 'login_tab', 'code'], function(api, tab, code) {
    tab.init();
    api.createCode();
    code.init();
});