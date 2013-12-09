Slide = Backbone.Model.extend({
  initialize: function(options) {

    var stage = options.stage;
    var section = options.section;
    var content = options.content;
    var title = options.title;
    var image_name = options.image_name;

    this.set({
      stage: stage,
      section: section,
      url: stage + "-" + section + ".html",
      title: title,
      content: content,
      image_name: image_name

    })
  }
});

SlideCollection = Backbone.Collection.extend({

  model: Slide,

  index: function(slide) {
    for (model_num in this.models) {
      if (this.models[model_num] == slide) {
        return parseInt(model_num);
      }
    } 
    return -1;
  },

  next: function(slide) {
    if(slide) {
      var index = this.index(slide) + 1;
      if(index && index < 17) {
        return this.at(index);
      }
    }
    return null;
  },

  prev: function(slide) {
    if(slide) {
      var index = this.index(slide) - 1;
      if(index && index >= 0) {
        return this.at(index);
      }
    }
    return null;
  }

});