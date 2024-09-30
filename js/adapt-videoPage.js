define([
  'core/js/adapt',
  'core/js/views/componentView',
  'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

  const videoPageView = ComponentView.extend({
    postRender: function() {
      this.setReadyStatus();
      this.setupInviewCompletion();
      this.colorYellow();
    },

    colorYellow: function(){
      this.$el[0].parentNode.parentNode.parentNode.classList.add('amarelo');
    }

  });

  const videoPageModel = ComponentModel.extend({
    // Implement your component model
  });

  return Adapt.register('videoPage', {
    model: videoPageModel,
    view: videoPageView
  });

});
