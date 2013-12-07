Slide = Backbone.Model.extend({
  initialize: function(slide) {

    stage = slide['stage']
    section = slide['section']

    this.set({
      stage: stage,
      section: section,
      url: stage + "-" + section + ".html"
    })
  }
});

SlideCollection = Backbone.Collection.extend({

  model: Slide,

  stages: ['project', 'call', 'police', 'charges', 'jail', 'court'],

  initialize: function() {
    this.populateSlides();
  },

  populateSlides: function() {

    for(stage_num in this.stages) {

      stage = this.stages[stage_num]

      switch(stage) {
        case 'project': num_sections = 2; break;
        default: num_sections = 3;
      }

      for (i=1; i<num_sections+1; i++) {

        this.add({
          stage: stage,
          section: i    
        });
      }
    }

  }

});