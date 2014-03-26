function responsivize() {
  $('.featured-image-wrapper')
    .css({
      height: $(window).height() + 'px',
      width:  $(window).width() + 'px',
    });
}

$( ".featured-image-wrapper" ).click(function() {
  $( ".featured-image-wrapper, .navbar-brand" ).slideToggle( "slow" );
});

$(document).ready(function() {

  $('.featured-image-wrapper').imgLiquid();
  responsivize();
  $(window).on('resize', responsivize);

  setTimeout(function() {
    $('div.featured-image-wrapper h1').fadeIn(1000, function() {
        $('#index-injunction').fadeIn(300);
    }); 
  }, 300);
  
  // $('#callforservice-foiable').expander({
  //   slicePoint: 200
  // });
  // $('#callforservice-unavailable').expander({
  //   slicePoint: 300
  // });
  $('#incidents-available').expander({
    slicePoint: 100
  });
  $('#incidents-foiable').expander({
    slicePoint: 200
  });
  $('#incidents-unavailable').expander({
    slicePoint: 200
  });
  $('#jail-foiable').expander({
    slicePoint: 1000
  });
  $('#court-unavailable').expander({
    slicePoint: 700
  });
  $('#prison-available').expander({
    slicePoint: 70
  });
});