(function() {
  var NavView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  NavView = (function(_super) {

    __extends(NavView, _super);

    function NavView() {
      this.clickNav = __bind(this.clickNav, this);
      this.render = __bind(this.render, this);
      this.setElements = __bind(this.setElements, this);
      NavView.__super__.constructor.apply(this, arguments);
    }

    NavView.prototype.el = '#nav-view';

    NavView.prototype.initialize = function() {
      this.page = BB.PageModel;
      return this.render();
    };

    NavView.prototype.setElements = function() {
      return this.$navItems = this.$('.nav-item');
    };

    NavView.prototype.events = {
      'click .nav-item:not(.active)': 'clickNav'
    };

    NavView.prototype.render = function() {
      var html;
      html = _.template($('#nav-view-tpl').html());
      $(this.el).html(html);
      this.setElements();
      return this;
    };

    NavView.prototype.clickNav = function(e) {
      var navEl, newPage;
      navEl = $(e.target);
      newPage = navEl.data('nav');
      this.$navItems.removeClass('active');
      navEl.addClass('active');
      return this.page.set({
        route: newPage,
        view: newPage
      });
    };

    return NavView;

  })(Backbone.View);

  BB.NavViewClass = NavView;

}).call(this);
