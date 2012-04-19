BB = {}

BB.init = ->

  # Store singletons that be referenced from any view
  BB.PageModel = new BB.PageModelClass()
  BB.TodoCollection = new BB.TodoCollectionClass()

  # Init PageView with PageModel as the model for the view.
  new BB.PageViewClass
    model: BB.PageModel

  # Set the initial "view" as "home". PageView will be listening for this change 
  BB.PageModel.set 'view', 'home'
  BB.PageModel.set 'route', 'home'
  # Normally, we dont need to set the inital view here.  It should be set in routers.
  ###
  new BB.AppRouterClass()

  Backbone.history.start
    pushState: true
  ###

window.BB = BB

# Needed to offset mongo's _id
Backbone.Model.prototype.idAttribute = '_id'

Backbone.View.prototype.close = ->
  @remove()
  @unbind()

$(document).ready ->
  BB.init()
