class PageView extends Backbone.View
    
  el: '#main'

  initialize: ->

    # Set all listeners
    @bindEvents()

    # Init top navigation
    new BB.NavViewClass()

  bindEvents: =>
    # @model is BB.PageModel
    # Call @changeView when the "view" attribute in @model changes
    @model.on 'change:view', @changeView

    # Call @updateRoute when "route" attribute in @model changes
    # Normally, I would put this in AppRouter instead
    @model.on 'change:route', @updateRoute

  changeView: =>
    view = @model.get 'view'

    switch view
      when 'home' then new BB.HomeViewClass()
      when 'about' then new BB.AboutViewClass()
      when 'contact' then new BB.ContactViewClass()

  updateRoute: =>
    route = @model.get 'route'
    parent.location.hash = route

BB.PageViewClass = PageView
