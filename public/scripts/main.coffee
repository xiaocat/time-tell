'use strict'

require ['controls/config'], (config)->
  requirejs.config
    baseUrl: '/scripts'
    paths:
      'require': 'libs/require'
      'zepto': 'libs/zepto'
      'dot': 'libs/doT'
      'controls': 'coffee/controls'
      'common': 'coffee/common'
    shim:
      'zepto':
        exports: '$'
      'common/tools':
        deps: ['zepto']
    urlArgs: 'v=0.1'

  if document.body.id
    require ['controls/' + document.body.id ], (page)->
      page.init()
