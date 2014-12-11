var Portfolio = {
  init: function(){
    this.selectZoraab();
    this.selectMint();
    this.selectStats();
  },
  selectZoraab: function(){
    $('#rm-zoraab .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusZoraab();
    })
  },
  selectMint: function(){
    $('#rm-mint .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusMint();
    })
  },
  selectStats: function(){
    $('#rm-stats .rm-cover .rm-front').click(function(e){
      e.preventDefault();
      PortfolioView.focusStats();
    })
  }
}

var PortfolioView = {
  clearFocus: function(){
    $('#portfolio .selected').removeClass('selected');
    $('#portfolio .unselected').removeClass('unselected');
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