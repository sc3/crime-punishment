Stage = Backbone.Model.extend({
  initialize: function(options) {

    var name = options.name;
    var sections = options.sections;

    this.set({
      'name': name,
      'sections': sections,
      'url': name + '.html'
    })
  }

});

StageCollection = Backbone.Collection.extend({

  model: Stage,

  /* Takes a stage object. Returns an integer representing
     its place in the order of stages, or -1 if it isn't
     found. */
  index: function(stage) {
    for (model_num in this.models) {
      if (this.models[model_num] == stage) {
        return parseInt(model_num);
      }
    } 
    return -1;
  },

  /* Takes a stage object and a one-based section number. 
     Returns a tuple of the stage object and section number
     corresponding to the next slide, or null if there is 
     none. */
  next: function(stage, section) {
    var index = this.index(stage);

    console.log(section);
    console.log(stage.get('sections'));
    if (section == stage.get('sections')) {
      var next_stage = this.at(index+1);
      console.log(next_stage);
      if (next_stage) {
        return [next_stage, 1];
      }
      else {
        return null;
      }
    }

    else {
      return [this.at(index), section+1];
    }
},

  /* Takes a stage object and a one-based section number. 
     Returns a tuple of the stage object and section number
     corresponding to the previous slide, or null if there
     is none. */
  prev: function(stage, section) {
    var index = this.index(stage);

    if (section == 1) {
      var last_stage = this.at(index-1);

      if (last_stage) {
        return [last_stage, last_stage.get('sections')];
      }
      else {
        return null;
      }
    }

    else {
      return [this.at(index), section-1];
    }

  }

});