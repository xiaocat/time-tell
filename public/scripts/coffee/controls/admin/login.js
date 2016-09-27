'use strict';
define(['common/tools'], function(Tools) {
  var $, page;
  $ = Tools.$;
  return page = {
    init: function() {
      return $('.js_login_submit').on('click', function() {
        var name, password;
        name = $('input[name="email"]').val();
        password = $('input[name="password"]').val();
        return Tools.postData('/admin/login', {
          name: name,
          password: password
        }, function(res) {
          return console.log(res);
        });
      });
    }
  };
});
