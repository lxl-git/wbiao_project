(function(win, $, wb){

  if( !("placeholder" in document.createElement("input")) ){
    $('input[placeholder],textarea[placeholder]').each(function(){
      var that = $(this),text= that.attr("placeholder"),type =that.attr("type");
      if(that.val()===""){
        if(type === "password"){
          that.attr("type","text");
        }
        that.val(text).addClass("placeholder");
      }
      that.focus(function(){
        if(that.val()===text){
          that.val("").addClass("placeholder");
        }
      })
      .blur(function(){
        if(that.val()===""){
          that.val(text).addClass("placeholder");
        }
      })
      .closest("form").submit(function(){
        if(that.val() === text){
          that.val("");
        }
      });
    });
  }

  wb.extend(wb,{

    /**
     * 获取 cookie 的值
     * @param cName: cookie的名字
     * @returns cookie的值或者空字符串
     */
    "getCookie" : function(_option){
      var _defaultOpts = {
        "cName": ""
      };
      var _opt = wb.extend(_defaultOpts, _option);
      var cStart,cEnd;

      if (document.cookie.length>0){
        cStart=document.cookie.indexOf(_opt.cName + "=");
        if (cStart!=-1){
          cStart=cStart + _opt.cName.length+1;
          cEnd=document.cookie.indexOf(";",cStart);
          if (cEnd==-1) {cEnd=document.cookie.length;}
          return decodeURIComponent(document.cookie.substring(cStart,cEnd));
        }
      }
      return ""
    },

    /**
     * 设置 cookie
     * @param cName: cookie的名字
     * @param value： cookie的值
     * @param expiredays：过期时间
     */
    "setCookie" : function(_option){
      var _defaultOpts = {
        "cName": "",
        "value":"",
        "expiredays":""
      };
      var _opt = wb.extend(_defaultOpts, _option);

      var exdate=new Date();
      exdate.setDate(exdate.getDate()+_opt.expiredays);
      document.cookie = _opt.cName + "=" + encodeURIComponent(_opt.value) + ((_opt.expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    },

    /**
     * 手机号正确性测试
     * @param mobile 手机号 number 或者 str 都可以
     * @returns {boolean}
     */
    "mobileCheck" : function(_option){
      var _defaultOpts = {
        "mobile": ""
      };
      var _opt = wb.extend(_defaultOpts, _option);
      var regMobile = /^1[3|4|5|6|7|8|9]\d{9}$/;

      return regMobile.test(_opt.mobile);
    },

    /**
     * 手机号输入添加空格
     * @param _this 是当前input标签
     * @returns {boolean}
     */
    "mobileSpace" : function(_this){
      var _mobLen = _this.val();
      if((event.keyCode != 8 && event.keyCode != 46) && (_mobLen.length == 3 || _mobLen.length == 8)){
        _this.val(_mobLen + " ");
      }
    },

    /**
     * 手机号,密码检测是否有空格
     * @param _this 是当前需要去掉空格的值
     * @returns {boolean}
     */
    "textCheckSpace" : function(_this){
      return _this.replace(/^\s+|\s+$/ig,'');
    },

    /**
     * 倒计时封装方法
     * @param seconds
     * @param funcPerSeconds 每秒调用的方法，返回剩余的秒数作为参数
     * @param stopCallback  倒计时停止的回调
     * @constructor
     */
    "CountDownClock" : function(_option){
      var _defaultOpts = {
        "seconds": "",
        "funcPerSeconds":"",
        "stopCallback":""
      };
      var _opt = wb.extend(_defaultOpts, _option);

      var _interval;
      var _this = this;
      var _count = _opt.seconds;
      var _cookieCountdownSec;
      var _cha;

      this.start = function(){
        /**
         * 将秒数写进 cookie，当用户在倒数的时候刷新页面
         * 重新倒计时的时候从刷新前剩余的秒数开始
        */
        if( !wbiao.getCookie("_ats_cd_sec_") ){
          _cookieCountdownSec = wbiao.getCookie("_ats_cd_sec_");
          _cha = Math.floor((new Date()).getTime() / 1000) - parseInt(parseInt(_cookieCountdownSec) / 1000);

          if( _cha < 60 ){
            _count = _opt.seconds - _cha;
          }else{
            wbiao.setCookie("_ats_cd_sec_",(new Date()).getTime());
          }
        } else {
          wbiao.setCookie("_ats_cd_sec_",(new Date()).getTime());
        }

        _interval = window.setInterval(function(){
          if( _count <= 0 ){
            _this.stop();
            return
          }
          _count--;
          /**
           * 每秒执行的回调，返回的参数
           * _count： 剩余描述时间
           */
          _opt.funcPerSeconds && _opt.funcPerSeconds(_count);
        },1000);
      };
      this.stop = function(){
        window.clearInterval(_interval);
        _opt.stopCallback && _opt.stopCallback();
      };

    },

    /**
     * TODO by wyy 20170817
     * 短信输入提示信息
     * @param  _noteCode    ->  短信验证码的值
    */
    "toggleUserNameTips" : function(_noteCode,_noteCodeBox){

      if(_noteCode == ""){
        _noteCodeBox.find("i").html("");
        return false;
      }else if(_noteCode.length < 6){
        _noteCodeBox.addClass("error");
        _noteCodeBox.find("i").html("请输入6位数字验证码");
        return false;
      }else{
        _noteCodeBox.removeClass("error");
        _noteCodeBox.find("i").html("");
        return false;
      }

    },


    /**
     * TODO by wyy 20170817
     * 手机号验证码登录
     * @param _mobile ->  要登录的手机号
     * @param _noteCode  ->  要登录的手机号验证码
     * @param _noteCodeBox  ->  如果验证码有错误用于显示当前盒子的文案
     * @param _phoneNumBox  ->  如果手机号有错误用于显示当前盒子的文案
     * @param locationUrl  ->  我们要跳转的地址
     * @param tips ->  文案框
     * @param ajaxParams  ->  ajax请求需要返回给接口的数据
     * @param shade  ->  弹窗登录
     * @param callback  ->  弹窗登录二次开发者所做的回调
    */
    "mobileLogin" : function(_option){

      var _defaultOpts = {
        "_mobile" : null,
        "_noteCode" : null,
        "_phoneNumBox" : null,
        "_noteCodeBox" : null,
        "locationUrl" : "",
        "tips": null,
        "ajaxParams": {},
        "shade" : false,
        "callback" : _option.callback,
        "disableBtn":null
      };

      var _opt = wb.extend(_defaultOpts, _option);

      //检测手机号是否正确并存在
      if(!wbiao.mobileCheck({mobile:_opt._mobile})){
        _opt._phoneNumBox.addClass("error");
        _opt._phoneNumBox.find("input").focus();
        _opt._phoneNumBox.find(_opt.tips).removeClass("h").html("请输入您的手机号");
        return false;
      }
      //检测短信验证码是否存在
      if(_opt._noteCode == ""){
        _opt._noteCodeBox.addClass("error");
        _opt._noteCodeBox.find("input").focus();
        _opt._noteCodeBox.find(_opt.tips).removeClass("h").html("请输入验证码");
        return false;
      }

      _opt.disableBtn.removeClass("h").siblings("#member_login").addClass("h");

      var _data = wb.extend(_opt.ajaxParams.data, {
        "code": _opt._noteCode,
        "phone": _opt._mobile,
        "is_phone": true
      });

      $.ajax(wb.extend(_opt.ajaxParams, {
        "type": "post",
        "url": "/member/loginByPhone/",
        "data": _data,
        "dataType": "json",
        "success": function (dt) {
          _opt.disableBtn.addClass("h").siblings("#member_login").removeClass("h");
          if(dt.info.error>0){
            if(dt.info.message == "会员不存在"){
              _opt._phoneNumBox.find(_opt.tips).removeClass("h").html(dt.info.message);
              return false;
            }else if(dt.info.message == "验证码已经失效"){
              _opt._noteCodeBox.find(_opt.tips).removeClass("h").html(dt.info.message);
              return false;
            }else if(dt.info.message == "验证码错误,请输入正确验证码"){
              _opt._noteCodeBox.find(_opt.tips).removeClass("h").html(dt.info.message);
              return false;
            }else if(dt.info.message == "短信验证码已过期"){
              _opt._noteCodeBox.find(_opt.tips).removeClass("h").html(dt.info.message);
              return false;
            }else if(dt.info.error == 500){
              window.location="/500";
            }
          }else{
            if(_opt.shade){
              _opt.callback && _opt.callback();
              return false;
            }
            /**
             * created by lyp
             * @20180429
             * 将用户的 m_c cookie 存到 localStorage 用于检测用户是否 session 串号
             *
             * @type {string}
             */
            try{
              wb.loginToLocal();
            }catch(e){}
            window.location = _opt.locationUrl;
          }

        }
      }));  
        
    },

  
    /**
     * TODO by wyy 20170817
     * 会员账号密码登录
     * @param _userName ->  会员账号
     * @param _userPsd  ->  会员密码
     * @param _userPsdBox  ->  如果密码有错误用于显示当前盒子的文案
     * @param _userNameBox  ->  如果会员账号有错误用于显示当前盒子的文案
     * @param locationUrl  ->  我们要跳转的地址
     * @param tips ->  文案框
     * @param ajaxParams  ->  ajax请求需要返回给接口的数据
     * @param shade  ->  弹窗登录
     * @param callback  ->  弹窗登录二次开发者要做的操作
    */
    "userLogin" : function(_option){

      var _defaultOpts = {
        "_userName" : null,   //用户名输入框
        "_userPsd" : null,    //密码输入框
        "_userPsdBox" : null, //密码父盒子
        "_userNameBox" : null, //用户名父盒子
        "locationUrl" : "",   //登录要跳转的地址
        "tips": null,        //显示文案的盒子
        "ajaxParams": {},    //ajax请求要的参数
        "shade" : false,    //判断是否是来自弹窗登陆的  true为弹窗登陆
        "callback" : _option.callback,  //弹窗登陆的回调
        "isShowIdentify":null,  //是否要显示图形验证码
        "callbacks":_option.callbacks,  //图形验证码的回调
        "identifys":null,   //图形码的盒子
        "index":null,  //弹窗   ---》用于关闭弹窗
        "disableBtn":null
      };

      var _opt = wb.extend(_defaultOpts, _option);
      var _identifysBox = _opt.identifys.parents("p.identifying_code");

      if(!_opt._userName){
        _opt._userNameBox.addClass("error");
        _opt._userNameBox.find("input").focus();
        _opt._userNameBox.find(_opt.tips).removeClass("h").html("请输入账户名");
        return false;
      }
      if(!_opt._userPsd){
        _opt._userPsdBox.addClass("error");
        _opt._userPsdBox.find("input").focus();
        _opt._userPsdBox.find(_opt.tips).removeClass("h").html("请输入密码");
        return false;
      }

      if(!_identifysBox.hasClass("h")){
        if(!_opt.identifys.val()){
          _identifysBox.addClass("error");
          _identifysBox.find("input").focus();
          _identifysBox.find(_opt.tips).removeClass("h").html("请输入图形码");
          return false;
        }
      }

      _opt.disableBtn.removeClass("h").siblings("#user_login").addClass("h");

      var _data = wb.extend(_opt.ajaxParams.data, {
        "identity": wb.textCheckSpace(_opt._userName),
        "password": wb.textCheckSpace(_opt._userPsd),
        "is_phone": false
      });

      $.ajax({
        "type": "post",
        "url": "/member/login/",
        "data": _data,
        "dataType": "json",
        "success": function (dt) {
          _opt.disableBtn.addClass("h").siblings("#user_login").removeClass("h");
          if(dt.data){
            if(!dt.data.memberInfo.phone){
              window.location = "/member/login/verify?buyerName="+dt.data.memberInfo.buyerName+"&referrer="+_opt.locationUrl+"&memberCode="+dt.data.memberInfo.memberCode;
            }else{
              if(_opt.shade){
                _opt.callback && _opt.callback();
              }else{
                /**
                 * created by lyp
                 * @20180429
                 * 将用户的 m_c cookie 存到 localStorage 用于检测用户是否 session 串号
                 *
                 * @type {string}
                 */
                try{
                  wb.loginToLocal();
                }catch(e){}

                window.location = _opt.locationUrl;
              }
            }
          }else if(dt.info.error>0 && dt.info.error<500){
            _opt.isShowIdentify++;
            _opt.callbacks && _opt.callbacks(_opt.isShowIdentify);
            if(_opt.isShowIdentify >= 3 || dt.info.message == "请填写图形验证码"){
              _opt._userPsdBox.siblings(".identifying_code").removeClass("h");
            }
            if(dt.info.error > 0 ){
              _opt._userNameBox.find("input").focus();
              _opt._userNameBox.addClass("error");
              _opt._userNameBox.find(_opt.tips).removeClass("h").html(dt.info.message);
              return false;
            }
          }else if(dt.info.error>=500){
            if(_opt.shade){
              layer.close(_opt.index);
            }else{
              window.location="/500";
              return false;
            }
          }
        }
      });
    },


    /**
     * TODO by wyy 20170817
     * 点击获取验证码
     * @param _mobile ->  要获取验证码的手机号
     * @param _getCodeBtn  ->  获取验证码的按钮，用于显示倒计时的信息
     * @param callback  ->  现在是用来存储正确的手机号
    */
    "sendCodePort" : function(_option){
      var _defaultOpts = {
        "_mobile" : null,
        "_getCodeBtn" : null,
        "callback" : _option.callback,
        "tips" : "",
        "_codeBox" : null
      };

      var _opt = wb.extend(_defaultOpts, _option);

      $.ajax({
        "type": "post",
        "url": "/member/getValidateCode/",
        "data": {
          //用户输入的手机号，短信将发送到此手机号
          "phone": _opt._mobile
        },
        "dataType": "json",
        "beforeSend": function () {
          _canSentVerifyCode = false;
        },
        "success": function (dt) {

          if(dt.info.error > 0){//该手机获取验证码过于频繁,请1小时后重试
            _opt._codeBox.find(_opt.tips).removeClass("h").html(dt.info.message);
            _sendCodeA = true;
            _sendCodeBtn = true;
            _opt.callback && _opt.callback(_sendCodeA,_sendCodeBtn);
            return false;
          }else{
            var _sendCodeA;
            _opt._codeBox.find(_opt.tips).removeClass("h").html("验证码已发送，3分钟内输入有效");
            _clock = new wbiao.CountDownClock({
              "seconds":60,
              "funcPerSeconds":function (remain) {
                _sendCodeA = false;
                _sendCodeBtn = true;
                _opt._getCodeBtn.html("剩余秒数:" + remain);
                _opt.callback && _opt.callback(_sendCodeA,_sendCodeBtn);
                $(".message_code a").removeClass("on");
              },
              "stopCallback":function () {
                _sendCodeA = true;
                _opt._getCodeBtn.html("重新发送");
                _canSentVerifyCode = true;
                _sendCodeBtn = true;
                _opt.callback && _opt.callback(_sendCodeA,_sendCodeBtn);
                $(".message_code a").addClass("on");
              }
            });
            //开始倒计时
            _clock.start();
          } 
        }
      });
    }


  });


  
})(window, jQuery, wb);