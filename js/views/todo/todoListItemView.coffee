class TodoListItemView extends Backbone.View
    
  initialize: ->
    @todoCol = BB.TodoCollection
    @bindEvents()
    @render()
  
  setElements: =>
    @$text = @$('.text')
    @$input = @$('input')

  events:
    'click .icon-ok': 'clickDone'
    'click .icon-edit': 'clickEdit'
    'click .icon-remove': 'clickRemove'
    'keyup input': 'returnKey'

  bindEvents: =>
    @model.on 'change:done', @updateDone
    @model.on 'remove', @remove

  render: =>
    html = _.template $('#todo-list-item-view-tpl').html(),
      item: @model.get 'item'

    $(@el).addClass('list-item-view').html html

    @

  clickDone: =>
    @model.set 'done', true

  clickEdit: =>
    curVal = @model.get 'item'
    @$text.hide()
    @$input.show().val curVal

  returnKey: (e) =>
    code = e.keyCode || e.which
    if code isnt 13 then return

    @val = @$input.val()

    @$input.hide()
    @$text.show().html @val

    if not @val then return
    @updateItem()

  clickRemove: =>
    @todoCol.remove @model

  remove: =>
    $(@el).remove()
    
  updateDone: =>
    $(@el).addClass 'done'

  updateItem: =>
    @model.set 'item', @val


BB.TodoListItemViewClass = TodoListItemView
