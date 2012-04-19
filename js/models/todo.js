(function() {
  var TodoCollection, TodoModel,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TodoModel = (function(_super) {

    __extends(TodoModel, _super);

    function TodoModel() {
      TodoModel.__super__.constructor.apply(this, arguments);
    }

    TodoModel.prototype.initialize = function() {};

    return TodoModel;

  })(Backbone.Model);

  TodoCollection = (function(_super) {

    __extends(TodoCollection, _super);

    function TodoCollection() {
      TodoCollection.__super__.constructor.apply(this, arguments);
    }

    TodoCollection.prototype.model = TodoModel;

    TodoCollection.prototype.initialize = function() {};

    return TodoCollection;

  })(Backbone.Collection);

  BB.TodoModelClass = TodoModel;

  BB.TodoCollectionClass = TodoCollection;

}).call(this);
