var SlideView = Backbone.View.extend({
    

    initialize: function(options) {
      this.stage = null;
    },

    render: function(stage, section) {
      this.stage = this.collection.findWhere({
        'name': stage
      });
      this.section = section;
      return $.get(this.stage.get('url'), _.bind(this.renderFragment, this));

    },

    renderFragment: function(data) {

      var template = $(data);

      // hide the el
      this.$el.fadeOut(500, _.bind(function() {

          // empty the el
          this.$el.empty();

          // fill the el with content in the 
          // order it should appear in the html

          console.log(template);
          console.log($('.slide', template));

          // pull the correct slide from the template
          $($('.slide', template)[this.section-1])
            .appendTo(this.$el);
          $('.featured-image', template)
            .appendTo(this.$el);

          // fade it back in
          this.$el.fadeIn(500);

        }, this));

      this.setLinks();

      return this;
    },

    setLinks: function() {

      var $next = $('#next');
      var $prev = $('#previous');
      var $next_holder = $('.boxed:has(#next)');
      var $prev_holder = $('.boxed:has(#previous)');

      var next_url = this.next_url();
      var prev_url = this.prev_url();

      if (next_url) {
        $next.attr('href', next_url);
        $next_holder.show();
      }
      else {
        $next_holder.hide();
      }
      
      if (prev_url) {
        $prev.attr('href', prev_url); 
        $prev_holder.show();
      }
      else {
        $prev_holder.hide();
      }
    },

    next_url: function() {
      next_slide = this.collection.next(this.stage, this.section);
      if (next_slide) {
        return ("#" + next_slide[0].get('name') + "/" + next_slide[1]);
      }
      else {
        return null;
      }
    },

    prev_url: function() {
      prev_slide = this.collection.prev(this.stage, this.section);
      if (prev_slide) {
        return ("#" + prev_slide[0].get('name') + "/" + prev_slide[1]);
      }
      else {
        return null;
      }
      
    },

});