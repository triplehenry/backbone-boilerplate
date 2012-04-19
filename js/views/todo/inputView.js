(function() {
  var InputView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  InputView = (function(_super) {

    __extends(InputView, _super);

    function InputView() {
      this.createNewTodo = __bind(this.createNewTodo, this);
      this.returnKey = __bind(this.returnKey, this);
      this.render = __bind(this.render, this);
      this.setElements = __bind(this.setElements, this);
      InputView.__super__.constructor.apply(this, arguments);
    }

    InputView.prototype.el = '#input-view';

    InputView.prototype.initialize = function() {
      return this.render();
    };

    InputView.prototype.setElements = function() {
      return this.input = this.$('#todo-input');
    };

    InputView.prototype.events = {
      'keyup input': 'returnKey'
    };

    InputView.prototype.render = function() {
      var html;
      html = _.template($('#input-view-tpl').html());
      $(this.el).html(html);
      this.setElements();
      return this;
    };

    InputView.prototype.returnKey = function(e) {
      var code;
      code = e.keyCode || e.which;
      if (code !== 13) return;
      this.val = this.input.val();
      if (!this.val) return;
      this.input.val('');
      return this.createNewTodo();
    };

    InputView.prototype.createNewTodo = function() {
      return BB.TodoCollection.add({
        item: this.val
      });
    };

    return InputView;

  })(Backbone.View);

  BB.InputViewClass = InputView;

}).call(this);
