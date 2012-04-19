(function() {
  var HomeView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.render = __bind(this.render, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.el = '#page-view';

    HomeView.prototype.initialize = function() {
      return this.render();
    };

    HomeView.prototype.render = function() {
      var html;
      html = _.template($('#home-page-view-tpl').html());
      $(this.el).html(html);
      new BB.InputViewClass();
      return new BB.TodoListViewClass({
        collection: BB.TodoCollection
      });
    };

    return HomeView;

  })(Backbone.View);

  BB.HomeViewClass = HomeView;

}).call(this);
