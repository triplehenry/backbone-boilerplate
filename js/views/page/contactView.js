(function() {
  var ContactView,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  ContactView = (function(_super) {

    __extends(ContactView, _super);

    function ContactView() {
      this.render = __bind(this.render, this);
      ContactView.__super__.constructor.apply(this, arguments);
    }

    ContactView.prototype.el = '#page-view';

    ContactView.prototype.initialize = function() {
      return this.render();
    };

    ContactView.prototype.render = function() {
      var html;
      html = _.template($('#contact-page-view-tpl').html());
      return $(this.el).html(html);
    };

    return ContactView;

  })(Backbone.View);

  BB.ContactViewClass = ContactView;

}).call(this);
