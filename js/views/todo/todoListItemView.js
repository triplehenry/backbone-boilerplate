(function() {
  var TodoListItemView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  TodoListItemView = (function(_super) {

    __extends(TodoListItemView, _super);

    function TodoListItemView() {
      this.updateItem = __bind(this.updateItem, this);
      this.updateDone = __bind(this.updateDone, this);
      this.remove = __bind(this.remove, this);
      this.clickRemove = __bind(this.clickRemove, this);
      this.returnKey = __bind(this.returnKey, this);
      this.clickEdit = __bind(this.clickEdit, this);
      this.clickDone = __bind(this.clickDone, this);
      this.render = __bind(this.render, this);
      this.bindEvents = __bind(this.bindEvents, this);
      this.setElements = __bind(this.setElements, this);
      TodoListItemView.__super__.constructor.apply(this, arguments);
    }

    TodoListItemView.prototype.initialize = function() {
      this.todoCol = BB.TodoCollection;
      this.bindEvents();
      return this.render();
    };

    TodoListItemView.prototype.setElements = function() {
      this.$text = this.$('.text');
      return this.$input = this.$('input');
    };

    TodoListItemView.prototype.events = {
      'click .icon-ok': 'clickDone',
      'click .icon-edit': 'clickEdit',
      'click .icon-remove': 'clickRemove',
      'keyup input': 'returnKey'
    };

    TodoListItemView.prototype.bindEvents = function() {
      this.model.on('change:done', this.updateDone);
      return this.model.on('remove', this.remove);
    };

    TodoListItemView.prototype.render = function() {
      var html;
      html = _.template($('#todo-list-item-view-tpl').html(), {
        item: this.model.get('item')
      });
      $(this.el).addClass('list-item-view').html(html);
      return this;
    };

    TodoListItemView.prototype.clickDone = function() {
      return this.model.set('done', true);
    };

    TodoListItemView.prototype.clickEdit = function() {
      var curVal;
      curVal = this.model.get('item');
      this.$text.hide();
      return this.$input.show().val(curVal);
    };

    TodoListItemView.prototype.returnKey = function(e) {
      var code;
      code = e.keyCode || e.which;
      if (code !== 13) return;
      this.val = this.$input.val();
      this.$input.hide();
      this.$text.show().html(this.val);
      if (!this.val) return;
      return this.updateItem();
    };

    TodoListItemView.prototype.clickRemove = function() {
      return this.todoCol.remove(this.model);
    };

    TodoListItemView.prototype.remove = function() {
      return $(this.el).remove();
    };

    TodoListItemView.prototype.updateDone = function() {
      return $(this.el).addClass('done');
    };

    TodoListItemView.prototype.updateItem = function() {
      return this.model.set('item', this.val);
    };

    return TodoListItemView;

  })(Backbone.View);

  BB.TodoListItemViewClass = TodoListItemView;

}).call(this);
