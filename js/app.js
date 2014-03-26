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
    $('div.featured-image-wrapper h1').fadeIn(1000, function() {
        $('#index-injunction').fadeIn(300);
    }); 
  }, 300);

  expand_regex = /expandable-(\d)x/
  
  $('.expandable').filter(function(){
    selector = '.' + expand_regex.exec(this.className)[0];
    digit = expand_regex.exec(this.className)[1];
    size = parseInt(digit);
    numChars = size*100;
    $(selector).expander({
      slicePoint: numChars
    });
  });
});
