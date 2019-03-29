require(['reg_checkInput', 'api', 'reg_eyes', 'code'], function(reg, api, eyes, code) { 
    reg.init();
    eyes.init();
    api.createCode();
    code.init();
} )
