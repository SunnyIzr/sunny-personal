var Nav = {
  init: function(){
    this.about();
  },
  about: function(){
    $('.about-link').click(function(e){
      e.preventDefault();
      PageTransitions.nextPage(36)
    })
  }
}