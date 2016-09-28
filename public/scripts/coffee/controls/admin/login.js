'use strict';
define(['common/tools'], function(Tools) {
  var $, page;
  $ = Tools.$;
  return page = {
    init: function() {
      return $('.js_login_submit').on('click', function() {
        var email, password;
        email = $('input[name="email"]').val();
        password = $('input[name="password"]').val();
        return Tools.postData('/admin/login', {
          email: email,
          password: password
        }, function(res) {
          console.log(res);
          return window.location = '/admin';
        });
      });
    }
  };
});
