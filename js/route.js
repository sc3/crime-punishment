

var Router = Backbone.Router.extend({
  stages : spreadsheet.stages,

  routes: {
    "": "slideToStage",
    ":stage(/)": "slideToStage",
    ":stage/:section":  "slideToStage"
  },

  populateSlides : function() {
    var s = [];
    var num_sections = 0;

    for(stage_num in this.stages) {

      stage = this.stages[stage_num];
      
      // override number of sections for a stage here
      switch(stage) {
        case "project": num_sections = 2; break;
        default: num_sections = 3;
      }

      for (i=1; i<num_sections+1; i++) {
        s.push({
          'stage': stage,
          'section': i,
        });
      } 
    }
    return s;
  },

  initialize: function(options) {
    // this.slides = new SlideCollection(this.populateSlides());
    this.slides = new SlideCollection(this.stages);
    this.view = new SlideView({
      el: $('#slide'),
      collection: this.slides,
    });
  },

  slideToStage: function(stage, section) {

    console.log(stage);
    console.log(section);

    // defining defaults
    stage = stage ? stage : "project";
    section = section ? section : 1;

    console.log(stage);
    console.log(section);

    this.view.render(stage, parseInt(section));
  }

});

$(document).ready(function() { 

  window.router = new Router();
  Backbone.history.start();

});