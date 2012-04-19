class TodoModel extends Backbone.Model
  initialize: ->

    
class TodoCollection extends Backbone.Collection
  model: TodoModel
  initialize: ->

BB.TodoModelClass = TodoModel
BB.TodoCollectionClass = TodoCollection
