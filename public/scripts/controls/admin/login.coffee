'use strict'

define ['common/tools'], (Tools)->
  $ = Tools.$

  page =
    init: ->

      $('.js_login_submit').on 'click', ()->
        email = $('input[name="email"]').val()
        password = $('input[name="password"]').val()

        Tools.postData '/admin/login', {email: email, password: password}, (res)->
          console.log res
          window.location = '/admin'
