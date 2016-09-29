'use strict';
define(['common/tools'], function(Tools) {
  var $, page;
  $ = Tools.$;
  return page = {
    init: function() {
      return $('.js_blog_submit').on('click', function() {
        var contents, tags, title;
        title = $('input[name="title"]').val();
        tags = $('input[name="tags"]').val();
        contents = $('textarea[name="contents"]').val();
        return Tools.postData('/blog/add', {
          title: title,
          tags: tags,
          contents: contents
        }, function(res) {
          return console.log(res);
        });
      });
    }
  };
});
