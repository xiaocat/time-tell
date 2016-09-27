'use strict'

define ['common/tools'], (Tools)->
  $ = Tools.$

  page =
    init: ->

      $('.js_login_submit').on 'click', ()->
        name = $('input[name="email"]').val()
        password = $('input[name="password"]').val()

        Tools.postData '/admin/login', {name: name, password: password}, (res)->
          console.log res
