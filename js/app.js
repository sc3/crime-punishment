function responsivize() {
  $('.featured-image-wrapper')
    .css({
      height: $(window).height() + 'px',
      width:  $(window).width() + 'px',
    });
}

$(document).ready(function() {

  $('.featured-image-wrapper').imgLiquid();
  responsivize();
  $(window).on('resize', responsivize);

  setTimeout(function() {
    $('div.featured-image-wrapper h1').fadeIn(1000); 
  }, 300);
  
  $('#callforservice-foiable').expander({
    slicePoint: 400
  });
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
    slicePoint: 600
  });
  $('#court-unavailable').expander({
    slicePoint: 700
  });
  $('#prison-available').expander({
    slicePoint: 100
  });
});