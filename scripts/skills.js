var Skills = {
  init: function(){
    this.loadInitialSkillSet();
    this.changeSkillSet();
  },
  loadInitialSkillSet: function(){
    $('.nav-list-item').click(function(e){
      if ($(this).hasClass('skills-nav')) {
        setTimeout(function(){
          Skills.loadSkillSet('webDev')
        },1400)
      } else{
        setTimeout(function(){
          $('#skillset').html('')
        },2000)
      }
    })
  },
  loadSkillSet: function(skillType){
    object = SkillsData[skillType]
    $("#skillset").skillset({
      object:object,
      duration:100
    });
  },
  changeSkillSet: function(){
    $('.skillset-nav').click(function(e){
      e.preventDefault();
      $('.skillset-nav').parent().removeClass('active')
      $(this).parent().addClass('active')
      target = $(this).data('target')
      $('#skillset').addClass('tempHide')
      setTimeout(function(){
        $('#skillset').html('')
        $('#skillset').removeClass('tempHide')
        Skills.loadSkillSet(target)
      },300)
    })
  }
}


var SkillsData = {
  webDev: [
  
          {

          'headline':'HTML & CSS',
          'value':20,
          'length':20,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'JavaScript & jQuery',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Ruby on Rails',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Liquid',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'PHP',
          'value':9,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Python',
          'value':6,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Angular.js',
          'value':3,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Node.js',
          'value':3,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }
        
  ],
    topicsPlatforms: [
  
          {

          'headline':'Responsive Design',
          'value':20,
          'length':20,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'Wordpress Theme Development',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Shopify Theme Development',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Machine Learning',
          'value':7,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Data Science',
          'value':7,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'iOS/Android Development',
          'value':2,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }
  ],
    bizFin: [
  
          {

          'headline':'SEM/SEO',
          'value':20,
          'length':20,
          'description':'Significant experience and knowlage of HTML(5) and CSS functionality and use.'

        },
        {

          'headline':'A/B Testing',
          'value':18,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Financial Analysis & Forecasting',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Fixed Income Valuation',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Working Capital Management',
          'value':20,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Portfolio Management',
          'value':15,
          'length':20,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }
  ]
}