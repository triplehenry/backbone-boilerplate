(function() {
  var TodoListView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TodoListView = (function(_super) {

    __extends(TodoListView, _super);

    function TodoListView() {
      this.addNewTodo = __bind(this.addNewTodo, this);
      this.bindEvents = __bind(this.bindEvents, this);
      this.render = __bind(this.render, this);
      TodoListView.__super__.constructor.apply(this, arguments);
    }

    TodoListView.prototype.el = '#todo-list-view';

    TodoListView.prototype.initialize = function() {
      this.bindEvents();
      return this.render();
    };

    TodoListView.prototype.render = function() {};

    TodoListView.prototype.bindEvents = function() {
      return this.collection.on('add', this.addNewTodo);
    };

    TodoListView.prototype.addNewTodo = function(model) {
      var itemView;
      itemView = new BB.TodoListItemViewClass({
        model: model
      });
      $(this.el).prepend(itemView.render().el);
      return itemView.setElements();
    };

    return TodoListView;

  })(Backbone.View);

  BB.TodoListViewClass = TodoListView;

}).call(this);
