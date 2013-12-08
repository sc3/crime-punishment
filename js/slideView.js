var SlideView = Backbone.View.extend({
    
    events: {
      "click .boxed #next": "get_next",
      "click .boxed #previous": "get_previous",
    }

    initialize: function(options) {
      this.slide = null;
    },

    render: function(stage, section) {
      this.slide = this.collection.findWhere({
        stage: stage,
        section: section
      });
      return $.get(this.slide.get('url'), _.bind(this.render_fragment, this));

    },
    
    render_fragment: function(data) {
        // hide our el, replace it, then fade it back
        this.$el.fadeOut(1000, _.bind(function() {
            this.$el.html(data).fadeIn(1000, _.bind(function() {
              // do whatever needs to be done after fading in
            });
          }, this));

        return this;
    },

    get_next: function() {},

    get_previous: function() {}
});