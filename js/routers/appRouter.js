(function() {
  var AppRouter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AppRouter = (function(_super) {

    __extends(AppRouter, _super);

    function AppRouter() {
      this.updateRoute = __bind(this.updateRoute, this);
      this.aboutPage = __bind(this.aboutPage, this);
      this.indexPage = __bind(this.indexPage, this);
      AppRouter.__super__.constructor.apply(this, arguments);
    }

    AppRouter.prototype.initialize = function() {
      this.page = BB.PageModel;
      return this.page.on('change:route', this.updateRoute);
    };

    AppRouter.prototype.routes = {
      '': 'indexPage',
      'about': 'aboutPage'
    };

    AppRouter.prototype.indexPage = function() {
      return this.page.set('view', 'home');
    };

    AppRouter.prototype.aboutPage = function() {
      return this.page.set('view', 'about');
    };

    AppRouter.prototype.updateRoute = function() {
      return this.navigate(this.page.get('route'));
    };

    return AppRouter;

  })(Backbone.Router);

  BB.AppRouterClass = AppRouter;

}).call(this);
