var Contact = {
  init: function(){
    this.startSend();
  },
  startSend: function(){
    $('form').submit(function(e){
      e.preventDefault();
      $('#form_wrap').css('opacity','0')
      Contact.send()
    })
  },
  send: function(){
    $.ajax({
      url: "//formspree.io/sunny@zoraab.com", 
      method: "POST",
      data: $('form').serialize(),
      dataType: "json"
    }).done(function(){
      $('#wrap').html("<p class='contact-complete'>Thanks for reaching out! I'll get back to you in a bit!</p>")
    })
  }
}