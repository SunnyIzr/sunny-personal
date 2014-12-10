var About = {
  init: function(){
    this.sliderClick();
  },
  sliderClick: function(){
    $('.about-slider a').click(function(e){
      e.preventDefault();
      AboutView.moveSlider(this);
      AboutView.showSection(this);
    })
  }
}

var AboutView = {
  moveSlider: function(el){
    $('.mi-selected').removeClass('mi-selected');
    $(el).addClass('mi-selected');
  },
  showSection: function(el){
    $('.about-section.selected').hide()
    $('.about-section.selected').removeClass('selected');
    $($(el).data('target')).show()
    $($(el).data('target')).addClass('selected');
  }
}