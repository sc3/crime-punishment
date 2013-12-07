var SlideView = Backbone.View.extend({
    
    el: $('#slide'),
    
   /* events: {
      "click .boxed": "someFunc",
    },*/

    initialize: function(options) {
      this.slide = null;
    },

    render: function(stage, section) {
      this.slide = this.collection.findWhere({
        stage: stage,
        section: section
      });
      // return deferred AJAX request
      return $.get(this.slide.get('url'), _.bind(this.render_fragment, this));

    },
    render_fragment: function(data) {
        // hide our el, replace it, then fade it back
        this.$el.fadeOut(1000, _.bind(function() {
            this.$el.html(data).fadeIn(1000);
          }, this));
        return this;
    }

   /* someFunc: function(stage, section) {
      this.myCollection
    }*/
});