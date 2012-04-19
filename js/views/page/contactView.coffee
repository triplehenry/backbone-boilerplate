class ContactView extends Backbone.View
    
  el: '#page-view'

  initialize: ->
    @render()

  render: =>
    html = _.template $('#contact-page-view-tpl').html()

    $(@el).html html


BB.ContactViewClass = ContactView

