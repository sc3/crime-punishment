Slide = Backbone.Model.extend({
  initialize: function(options) {

    var stage = options.stage;
    var section = options.section;

    this.set({
      stage: stage,
      section: section,
      url: stage + "-" + section + ".html"
    })
  }
});

SlideCollection = Backbone.Collection.extend({

  model: Slide,

  index: function(slide) {
    if (slide) {
      for (model_num in this.models) {
        if (this.models[model_num] == slide) {
          return parseInt(model_num);
        }
      } 
      return null;
    }
  },

  next: function(slide) {
    if(slide) {
      var index = this.index(slide) + 1;
      if(index < 5) {
        return this.at(index);
      }
    }
    return null;
  },

  prev: function(slide) {
    if(slide) {
      var index = this.index(slide) - 1;
      if(index >= 0) {
        return this.at(index);
      }
    }
    return null;
  }

});