(function() {
  var BB;

  BB = {};

  BB.init = function() {
    BB.PageModel = new BB.PageModelClass();
    BB.TodoCollection = new BB.TodoCollectionClass();
    new BB.PageViewClass({
      model: BB.PageModel
    });
    BB.PageModel.set('view', 'home');
    return BB.PageModel.set('route', 'home');
    /*
      new BB.AppRouterClass()
    
      Backbone.history.start
        pushState: true
    */
  };

  window.BB = BB;

  Backbone.Model.prototype.idAttribute = '_id';

  Backbone.View.prototype.close = function() {
    this.remove();
    return this.unbind();
  };

  $(document).ready(function() {
    return BB.init();
  });

}).call(this);
