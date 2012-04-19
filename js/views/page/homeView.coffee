class HomeView extends Backbone.View
    
  el: '#page-view'

  initialize: ->
    @render()

  render: =>
    html = _.template $('#home-page-view-tpl').html()

    $(@el).html html

    new BB.InputViewClass()
    new BB.TodoListViewClass
      collection: BB.TodoCollection

BB.HomeViewClass = HomeView

