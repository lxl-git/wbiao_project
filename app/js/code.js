define(['api'], function(api) {
    let code;
    // console.log(api.createCode);
    return {
        init() {
            code = api.$('#myCanvas');
            console.log(code)
            this.event();
        },
        event() {
            code.onclick = function() {
                var code = api.createCode();
                console.log(code);
            }
        }
    }
});