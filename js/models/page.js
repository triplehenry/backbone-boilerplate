(function() {
  var PageModel,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  PageModel = (function(_super) {

    __extends(PageModel, _super);

    function PageModel() {
      PageModel.__super__.constructor.apply(this, arguments);
    }

    PageModel.prototype.initialize = function() {};

    return PageModel;

  })(Backbone.Model);

  BB.PageModelClass = PageModel;

}).call(this);
