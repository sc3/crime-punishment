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

/*var mycollection = SlideCollection([
  { name: 'project', 'sections': 2, 'title': 'Project'},
  ...
], o)*/

SlideCollection = Backbone.Collection.extend({

  model: Slide

});