(function() {
  var PageView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  PageView = (function(_super) {

    __extends(PageView, _super);

    function PageView() {
      this.updateRoute = __bind(this.updateRoute, this);
      this.changeView = __bind(this.changeView, this);
      this.bindEvents = __bind(this.bindEvents, this);
      PageView.__super__.constructor.apply(this, arguments);
    }

    PageView.prototype.el = '#main';

    PageView.prototype.initialize = function() {
      this.bindEvents();
      return new BB.NavViewClass();
    };

    PageView.prototype.bindEvents = function() {
      this.model.on('change:view', this.changeView);
      return this.model.on('change:route', this.updateRoute);
    };

    PageView.prototype.changeView = function() {
      var view;
      view = this.model.get('view');
      switch (view) {
        case 'home':
          return new BB.HomeViewClass();
        case 'about':
          return new BB.AboutViewClass();
        case 'contact':
          return new BB.ContactViewClass();
      }
    };

    PageView.prototype.updateRoute = function() {
      var route;
      route = this.model.get('route');
      return parent.location.hash = route;
    };

    return PageView;

  })(Backbone.View);

  BB.PageViewClass = PageView;

}).call(this);
