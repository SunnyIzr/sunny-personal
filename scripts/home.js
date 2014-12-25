var Home = {
  init: function(){
    setTimeout(function(){
      Home.startGreet();
    },600)
    setTimeout(function(){
      Home.endGreet();
      $('.typed-cursor:first').hide()
    },3600)
    setTimeout(function(){
      Home.subText();
      $('.typed-cursor:last').hide()
    },5100)
    setTimeout(function(){
      Home.callToAction();
    },6500)
  },
  startGreet: function(){
    $("#startGreet").typed({
      strings: ["Hello World"],
      typeSpeed: 100,
      backDelay: 500,
      loop: false,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false,
      // callback: function(){ foo(); },
      // resetCallback: function() { newTyped(); }
    });
  },
  endGreet: function(){
    $("#endGreet").typed({
      strings: ["I'm <span class='name'>Sunny</span>."],
      typeSpeed: 100,
      backDelay: 500,
      loop: false,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false,
      // callback: function(){ foo(); },
      // resetCallback: function() { newTyped(); }
    });
  },
  subText: function(){
    $('.sub-header p').addClass('show-text')
  },
  callToAction: function(){
    $('.call-to-action').addClass('show-call-to-action')
    setTimeout(function(){
      $('.call-to-action').addClass('color-call-to-action')
    },1100)
  }
}