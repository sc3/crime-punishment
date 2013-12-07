/*var PAGES = [];
var FIRST = 0;
var LAST = PAGES.LENGTH;*/

var Router = Backbone.Router.extend({

  routes: {
    "":  "initial",
    ":stage(/:section)":  "slideToStage"
  },

  initial: function() {
    this.slideToStage(PAGES[FIRST]);
  },


  slideToStage: function(stage, section) {
    
    // handle sections such that if none is specified, 
    // we go to the first
    if (section) {
      stage += ('-' + section);
    }
    else {
      stage += '-1';
    }

    // we're interested in the corresponding html file
    stage += '.html';

    // do a get request for it
    $.get(stage, function(data) {

      // hide, and then remove the old #slide element
      $('#slide').fadeOut();
      $('#slide').remove();

      // create the new slide element, hide it, append it to #main
      $(data)
      .css('display', 'none')
      .appendTo('#main');

      //fade in the new #slide element
      $('#slide').fadeIn(2000);

    });

  },

});

$(document).ready(function() { 

  router = new Router();
  Backbone.history.start();

});


