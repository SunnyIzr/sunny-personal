var Portfolio = {
  init: function(){
    this.selectZoraab();
    this.selectMint();
    this.selectStats();
    this.closePort();
    this.initView();
  },
  initView: function(){
    $('.nav-list-item').click(function(){
      if ($(this).hasClass('portfolio-nav')) {
        setTimeout(function(){
          Portfolio.showView();
        },1500)
      } else{
        setTimeout(function(){
          Portfolio.hideView();
        },2000)
      }
    })
  },
  showView: function(){
    $('.cover-overlay').addClass('hide-cover-overlay')
    setTimeout(function(){
      $('.inner-content').addClass('show-inner-content')
    },1700)
  },
  hideView: function(){
    $('.cover-overlay').removeClass('hide-cover-overlay')
    setTimeout(function(){
      $('.inner-content').removelass('show-inner-content')
    },2000)
  },
  selectZoraab: function(){
    $('#rm-zoraab .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusZoraab();
      setTimeout( function(){
        $('#rm-zoraab').addClass('rm-open')
        setTimeout( function(){
          $('#rm-zoraab').addClass('display-info')
          if ( navigator.userAgent.search('Firefox') > -1) {
            $("#rm-zoraab").addClass('firefox-z-fix')
          }
        },850)
      }, 700)
    })
  },
  selectMint: function(){
    $('#rm-mint .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusMint();
      setTimeout( function(){
        $('#rm-mint').addClass('rm-open')
        setTimeout( function(){
          $('#rm-mint').addClass('display-info')
          if ( navigator.userAgent.search('Firefox') > -1) {
            $("#rm-mint").addClass('firefox-z-fix')
          }
        },850)
      }, 700)
    })
  },
  selectStats: function(){
    $('#rm-stats .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusStats();
      setTimeout( function(){
        $('#rm-stats').addClass('rm-open')
        setTimeout( function(){
          $('#rm-stats').addClass('display-info')
          if ( navigator.userAgent.search('Firefox') > -1) {
            $("#rm-stats").addClass('firefox-z-fix')
          }
        },850)
      }, 700)
    })
  },
  closePort: function(){
    $('.rm-container .close-icon svg').click(function(e){
      PortfolioView.closeOpenSection();
    })
  }
}

var PortfolioView = {
  clearFocus: function(){
    $('#portfolio .selected').removeClass('selected');
    $('#portfolio .unselected-zoraab').removeClass('unselected-zoraab');
    $('#portfolio .unselected-mint').removeClass('unselected-mint');
    $('#portfolio .unselected-stats').removeClass('unselected-stats');
  },
  closeOpenSection: function(){
    $('.rm-container.rm-open').removeClass('display-info')
    setTimeout( function(){
      $('.rm-container.rm-open').removeClass('firefox-z-fix')
      $('.rm-container.rm-open').removeClass('rm-open')
    },800)
    setTimeout(function(){
      PortfolioView.clearFocus();
    },1400)
  },
  focusMint: function(){
    $('#rm-zoraab').addClass('unselected-mint');
    $('#rm-stats').addClass('unselected-mint');
  },
  focusZoraab: function(){
    $('#rm-zoraab').addClass('selected');
    $('#rm-mint').addClass('unselected-zoraab');
    $('#rm-stats').addClass('unselected-zoraab');
  },
  focusStats: function(){
    $('#rm-stats').addClass('selected');
    $('#rm-mint').addClass('unselected-stats');
    $('#rm-zoraab').addClass('unselected-stats');
  },
  
}