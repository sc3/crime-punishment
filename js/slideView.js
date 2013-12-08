var SlideView = Backbone.View.extend({
    

    initialize: function(options) {
      this.slide = null;
    },

    render: function(stage, section) {
      this.slide = this.collection.findWhere({
        stage: stage,
        section: section
      });
      return $.get(this.slide.get('url'), _.bind(this.renderFragment, this));

    },

    renderFragment: function(data) {
        // hide our el, replace it, then fade it back
        this.$el.fadeOut(1000, _.bind(function() {
            this.$el.html(data).fadeIn(1000);
          }, this));

        // NOTE: the slider's arrows are outside the #main block that is 
        // being changed, so it's ok if there's no need for synchronicity.
        this.setLinks();

        return this;
    },

    setLinks: function() {

      var $next = '#next';
      var $prev = '#previous';

      var next = this.next_url();
      var prev = this.prev_url();

      if (next) {
        $($next).attr('href', next);
        $($next).show();
      }
      else {
        $($next).hide();
      }
      
      if (prev) {
        $($prev).attr('href', prev); 
        $($prev).show();
      }
      else {
        $($prev).hide();
      }
    },

    next_url: function() {
      next_slide = this.collection.next(this.slide);
      if (next_slide) {
        return ("#" + next_slide.get('stage') + "/" + next_slide.get('section'));
      }
      else {
        return null;
      }
    },

    prev_url: function() {
      prev_slide = this.collection.prev(this.slide);
      if (prev_slide) {
        return ("#" + prev_slide.get('stage') + "/" + prev_slide.get('section'));
      }
      else {
        return null;
      }
      
    },

});