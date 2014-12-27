var Interests = {
  init: function(){
    this.initPolaroids();
    this.navInterests()
    this.figureFlip();
    this.figureFlipBack();
  },
  navInterests: function(){
    $(document).on('click', '.nav-list-item', function(){
      if ($(this).hasClass('interests-nav')){
        setTimeout(function(){
          window.scrollTo(0,0)
        },500)
        setTimeout(function(){
          window.photoStack._shuffle()
        },1500)
      }
    })
  },
  figureFlip: function(){
   $('#photostack-2 figure').click(function(e){
      e.preventDefault();
      photoStack._rotateItem($('.photostack-current'))
   })
  },
  figureFlipBack: function(){
   $('#photostack-2').click(function(e){
      e.preventDefault();
      photoStack._rotateItem($('.photostack-current'))
   })
  },
  initPolaroids: function(){
    window.photoStack = new Photostack( document.getElementById( 'photostack-2' ), {
      callback : function( item ) {}
    })
  }
}