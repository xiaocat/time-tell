'use strict'

define ['zepto'], ($)->

  class Tools
    constructor: ->
      @$ = $
      @ua = window.navigator.userAgent.toLowerCase()
      @cookie_prefix = '__daka_'

    showMsg: (text)->
      $error = $('#error-tips')
      $error.html(text).removeClass('hide').addClass('fade-out')
      setTimeout (->
        $error.html('').removeClass('fade-out').addClass('hide')
      ), 2000

    getUrlParam: (name)->
      reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
      r = window.location.search.substr(1).match(reg)
      return r[2] if (r != null)
      return null

    isAndroid: ->
      /android/i.test(@ua)

    isIOS: ->
      /(iPhone|iPad|iPod|iOS)/i.test(@ua)

    isWeixin: ->
      @ua.match(/MicroMessenger/i)=="micromessenger"

    setCookie: (name,value)->
      exp = new Date()
      exp.setTime(exp.getTime() + 30*24*60*60*1000)
      document.cookie = "#{name}=#{escape(value)};expires=#{exp.toGMTString()}"

    getCookie: (name)->
      reg= new RegExp("(^| )" + name + "=([^;]*)(;|$)")
      result = if arr=document.cookie.match(reg) then unescape arr[2] else null

    _request: (type, url, data, callback, others...)->
      data = $.param data
      # url += '?' + data if type == 'GET'
      $.ajax
        # url: '/h5ser' + url
        url: url
        type: type
        data: data
        dataType: 'json'
        success: (res)->
          callback res
        error: (err)->
          callback {error: 1, msg: err}

    getData: ->
      @_request 'GET', arguments...

    postData: ->
      @_request 'POST', arguments...

  tools = new Tools()
  # module.exports = tools
