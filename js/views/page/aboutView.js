(function() {
  var AboutView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AboutView = (function(_super) {

    __extends(AboutView, _super);

    function AboutView() {
      this.render = __bind(this.render, this);
      AboutView.__super__.constructor.apply(this, arguments);
    }

    AboutView.prototype.el = '#page-view';

    AboutView.prototype.initialize = function() {
      return this.render();
    };

    AboutView.prototype.render = function() {
      var html;
      html = _.template($('#about-page-view-tpl').html());
      return $(this.el).html(html);
    };

    return AboutView;

  })(Backbone.View);

  BB.AboutViewClass = AboutView;

}).call(this);
