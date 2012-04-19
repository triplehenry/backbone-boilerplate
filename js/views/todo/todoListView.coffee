class TodoListView extends Backbone.View
    
  el: '#todo-list-view'

  initialize: ->
    @bindEvents()

    @render()

  render: =>

  bindEvents: =>
    @collection.on 'add', @addNewTodo

  addNewTodo: (model) =>
    itemView = new BB.TodoListItemViewClass
      model: model

    $(@el).prepend itemView.render().el
    itemView.setElements()

    

BB.TodoListViewClass = TodoListView
