Slide = Backbone.Model.extend({
  initialize: function(options) {

    var stage = options.stage;
    var section = options.section;
    var next = options.next

    this.set({
      stage: stage,
      section: section,
      url: stage + "-" + section + ".html",
      next: 
    })
  }
});

SlideCollection = Backbone.Collection.extend({

  model: Slide,

  /*index: function(slide) {
    for (model_num in self.models) {
      if (self.models[model_num] == slide) {
        return model_num;
      }
    }
  },

  next: function() {
    return self.at(self.index() + 1);
  },

  previous: function() {
    return self.at(self.index() - 1);
  }*/

});