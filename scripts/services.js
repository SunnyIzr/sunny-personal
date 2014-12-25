var Services = {
  init: function(){
    this.navServices()
  },
  navServices: function(){
    $('.nav-list-item').click(function(){
      if ($(this).hasClass('services-nav')){
        setTimeout(function(){
          Services.showServices();
        },1500)
      } else {
        setTimeout(function(){
          Services.hideServices();
        },2000)
      }
    })
  },
  showServices: function(){
    $('.service').removeClass('future')
  },
  hideServices: function(){
    $('.service').addClass('future')
  }
}