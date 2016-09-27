'use strict';
var slice = [].slice;

define(['zepto'], function($) {
  var Tools, tools;
  Tools = (function() {
    function Tools() {
      this.$ = $;
      this.ua = window.navigator.userAgent.toLowerCase();
      this.cookie_prefix = '__daka_';
    }

    Tools.prototype.showMsg = function(text) {
      var $error;
      $error = $('#error-tips');
      $error.html(text).removeClass('hide').addClass('fade-out');
      return setTimeout((function() {
        return $error.html('').removeClass('fade-out').addClass('hide');
      }), 2000);
    };

    Tools.prototype.getUrlParam = function(name) {
      var r, reg;
      reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      r = window.location.search.substr(1).match(reg);
      if (r !== null) {
        return r[2];
      }
      return null;
    };

    Tools.prototype.isAndroid = function() {
      return /android/i.test(this.ua);
    };

    Tools.prototype.isIOS = function() {
      return /(iPhone|iPad|iPod|iOS)/i.test(this.ua);
    };

    Tools.prototype.isWeixin = function() {
      return this.ua.match(/MicroMessenger/i) === "micromessenger";
    };

    Tools.prototype.setCookie = function(name, value) {
      var exp;
      exp = new Date();
      exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000);
      return document.cookie = name + "=" + (escape(value)) + ";expires=" + (exp.toGMTString());
    };

    Tools.prototype.getCookie = function(name) {
      var arr, reg, result;
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      return result = (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    };

    Tools.prototype._request = function() {
      var callback, data, others, type, url;
      type = arguments[0], url = arguments[1], data = arguments[2], callback = arguments[3], others = 5 <= arguments.length ? slice.call(arguments, 4) : [];
      data = $.param(data);
      return $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: 'json',
        success: function(res) {
          return callback(res);
        },
        error: function(err) {
          return callback({
            error: 1,
            msg: err
          });
        }
      });
    };

    Tools.prototype.getData = function() {
      return this._request.apply(this, ['GET'].concat(slice.call(arguments)));
    };

    Tools.prototype.postData = function() {
      return this._request.apply(this, ['POST'].concat(slice.call(arguments)));
    };

    return Tools;

  })();
  return tools = new Tools();
});
