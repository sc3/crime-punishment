{% include "js/slideView.js" %}
{% include "js/slideModel.js" %}

var Router = Backbone.Router.extend({

  stages : ['project', 'call', 'police', 'charges', 'jail', 'court'],

  routes: {
    "(:stage)(/:section)":  "slideToStage"
  },

  populateSlides : function() {
    var s = [];
    for(stage_num in this.stages) {
      stage = this.stages[stage_num]; 
      switch(stage) {
        case "project": num_sections = 2;
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
    this.slides = new SlideCollection(this.populateSlides());
    this.view = new SlideView({
      el: $('#slide'),
      collection: this.slides,
    });
  },

  slideToStage: function(stage, section) {
    stage = stage ? stage : "project";
    section = section ? section : 1;
    this.view.render(stage, section);
  }

});

$(document).ready(function() { 

  var router = new Router();
  Backbone.history.start();

});