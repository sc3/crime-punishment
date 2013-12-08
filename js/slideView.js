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
            this.setLinks();
            this.$el.html(data).fadeIn(1000);
          }, this));

        return this;
    },

    setLinks: function() {

      var $next = $('#next');
      var $prev = $('#previous');

      var next_url = this.next_url();
      var prev_url = this.prev_url();

      if (next_url) {
        $next.attr('href', next_url);
        $next.show();
      }
      else {
        $next.hide();
      }
      
      if (prev_url) {
        $prev.attr('href', prev_url); 
        $prev.show();
      }
      else {
        $prev.hide();
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