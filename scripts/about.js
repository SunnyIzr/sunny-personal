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
    $('.about-section.selected').removeClass('selected');
    setTimeout(function(){
      $('.about-section.revealed').removeClass('revealed');
      $($(el).data('target')).addClass('revealed')
      setTimeout(function(){
        $($(el).data('target')).addClass('selected')
      },100)
    },400)
  },
  showSlider: function(){
    $('.about-slider').show();
    setTimeout(function(){
      $('.about-slider').css('opacity','1.0')
    },900)
  },
  hideSlider: function(){
    $('.about-slider').css('opacity','0.0')
    setTimeout(function(){
      $('.about-slider').hide();
    },100)
  }
}