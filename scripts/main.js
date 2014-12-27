$(document).ready(function(){
  Nav.init();
  About.init();
  Portfolio.init();
  Skills.init();
  Home.init();
  Services.init();
  Contact.init();
})

$(window).load(function() {
  $("#interests").removeClass('hide');
  Interests.init();
})