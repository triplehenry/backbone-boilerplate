class InputView extends Backbone.View
    
  el: '#input-view'

  initialize: ->
    @render()

  setElements: =>
    @input = @$('#todo-input')

  events:
    'keyup input': 'returnKey'

  render: =>
    html = _.template $('#input-view-tpl').html()

    $(@el).html html

    @setElements()

    @

  returnKey: (e) =>
    code = e.keyCode || e.which
    if code isnt 13 then return

    @val = @input.val()
    if not @val then return

    @input.val ''
    @createNewTodo()

  createNewTodo: =>
    BB.TodoCollection.add
      item: @val


BB.InputViewClass = InputView
