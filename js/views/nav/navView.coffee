class NavView extends Backbone.View
    
  el: '#nav-view'

  initialize: ->
    @page = BB.PageModel
    @render()

  setElements: =>
    @$navItems = @$('.nav-item')

  events:
    'click .nav-item:not(.active)': 'clickNav'

  render: =>
    html = _.template $('#nav-view-tpl').html()

    $(@el).html html

    @setElements()

    @

  clickNav: (e) =>
    navEl = $(e.target)
    newPage = navEl.data('nav')

    @$navItems.removeClass 'active'

    navEl.addClass 'active'

    @page.set
      route: newPage
      view: newPage

BB.NavViewClass = NavView
