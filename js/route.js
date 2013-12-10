

var Router = Backbone.Router.extend({

  stages : ['project', 'call', 'police', 'charges', 'jail', 'court'],

  routes: {
    "": "slideToStage",
    ":stage(/)": "slideToStage",
    ":stage/:section":  "slideToStage"
  },

  populateStages : function() {
    var s = [];
    var num_sections = 0;

    for(stage_num in this.stages) {

      stage = this.stages[stage_num];
      
      // override number of sections for a stage here
      switch(stage) {
        case "project": num_sections = 2; break;
        default: num_sections = 3;
      }

      s.push({
        'name': stage,
        'sections': num_sections
      });
    }
    return s;
  },

  initialize: function(options) {
    this.stages = new StageCollection(this.populateStages());
    this.view = new SlideView({
      el: $('#main'),
      collection: this.stages,
    });
  },

  slideToStage: function(stage, section) {

    // defining defaults
    stage = stage ? stage : "project";
    section = section ? section : 1;

    this.view.render(stage, parseInt(section));
  }

});

$(document).ready(function() { 

  window.router = new Router();
  Backbone.history.start();

});