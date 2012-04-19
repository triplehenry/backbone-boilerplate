# This is not being called. Just an example
#
class AppRouter extends Backbone.Router
  initialize: ->
    @page = BB.PageModel
    @page.on 'change:route', @updateRoute

  routes:
    '': 'indexPage'
    'about': 'aboutPage'

  indexPage: =>
    @page.set 'view', 'home'

  aboutPage: =>
    @page.set 'view', 'about'

  updateRoute: =>
    @navigate @page.get 'route'

BB.AppRouterClass = AppRouter
