var Nav = {
  init: function(){
    this.navItem();
  },
  navItem: function(){
    $('.nav-list-item').click(function(e){
      e.preventDefault();
      page = parseInt($(this).data('target'))
      if ($(this).hasClass('btn')) {
        PageTransitions.nextPage({animation: 36, showPage: page})
      } else{
        Nav.collapseBigNav();
        setTimeout(function(){
          PageTransitions.nextPage({animation: 36, showPage: page})
          },500)
      }
    })
  },
  collapseBigNav: function(){
    $el = $('#bt-menu')
    if ( $el.hasClass('bt-menu-open') ){
      $el.removeClass('bt-menu-open')
      $el.addClass('bt-menu-close')
    } else{
      $el.removeClass('bt-menu-close')
      $el.addClass('bt-menu-open')
    }
  }
}