class AboutView extends Backbone.View
    
  el: '#page-view'

  initialize: ->
    @render()

  render: =>
    html = _.template $('#about-page-view-tpl').html()

    $(@el).html html


BB.AboutViewClass = AboutView

