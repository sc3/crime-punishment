{% include "js/slide.js" %}

var Router = Backbone.Router.extend({

  routes: {
    "":  "initial",
    ":stage(/:section)":  "slideToStage"
  },

  initial: function() {
    slide = slides.at(0).attributes;
    this.slideToStage(slide.stage, slide.section);
  },


  slideToStage: function(stage, section) {

    // get correct slide
    correct_slide = slides.findWhere({
      stage: stage,
      section: section ? section : 1
    }).attributes;

    // do a get request for it
    $.get(correct_slide.url, function(data) {

      // hide, and then remove the old #slide element
      $('#slide')
      .fadeOut(2000)
      .remove();

      // create the new slide element, hide it, append it to #main
      $(data)
      .css('display', 'none')
      .appendTo('#main');

      //fade in the new #slide element
      $('#slide').fadeIn(3000);

    });

  }

});

$(document).ready(function() { 

  slides = new SlideCollection();
  router = new Router();
  Backbone.history.start();

});


