Slide = Backbone.Model.extend({
  initialize: function(stage, section) {
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
    console.log("inside slide collection init");
    this.populateSlides();
  },

  populateSlides: function() {

    console.log('inside slide collection populateSlides');

    console.log(this.stages);

    for(stage_num in this.stages) {

      stage = this.stages[stage_num]

      console.log('inside populateSlides, stage: ' + stage);

      switch(stage) {
        case 'project': num_sections = 2; break;
        default: num_sections = 3;
      }

      for (i=1; i<num_sections+1; i++) {

         console.log('inside populateSlides, section: ' + i);

        this.add({
          stage: stage,
          section: i    
        });
      }
    }

    console.log(this);

  }

});