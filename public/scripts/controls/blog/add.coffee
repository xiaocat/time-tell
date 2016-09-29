'use strict'

define ['common/tools'], (Tools)->
  $ = Tools.$

  page =
    init: ->

      $('.js_blog_submit').on 'click', ()->
        title = $('input[name="title"]').val()
        tags = $('input[name="tags"]').val()
        contents = $('textarea[name="contents"]').val()

        Tools.postData '/blog/add', {title: title, tags: tags, contents: contents}, (res)->
          console.log res
          # window.location = '/blog/add'
