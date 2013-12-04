/* Constants */

var elem = $('.sections li a');
var pages = [];
for(i=0; i<elem.length; i++) {
  //console.log(elem[i])
  pages[i] = elem[i].hash;
}

var first = 0;
var last = 5;

/* Selectors for next and previous buttons */
var left = '#left .boxed'
var right = '#right .boxed'

function loadPage(hash, callback) {
/* Loads the content inside the "#main" element on the
   page found at <url> into the "#main" element of the 
   current page. Then sets the links and buttons 
   accordingly. */
  try {
    url = hash.split('#')[1] + '.html'
    $('#main').load(url + "#main", function() {
      setLinks(hash);
      if(callback) {
        callback();
      };
    });
  }
  catch(err) {
    /* dynamically trying to get html pages based on hash
       could cause problems if user inputs a hash of their
       own */
    console.log(e);
  }
  
}


function setLinks(url) {
/* Changes the urls the "next" and "previous" buttons
   point at, and, when at either end of the sequence
   of pages, removes the appropriate button from view. */

  //console.log("url we got: " + url)

  for (i=0; i<=last; i++) {
	if (pages[i] == url) {
      page_num = i;
  	}
  }

  //console.log("page num: " + page_num)

  var previous = page_num - 1;
  var next = page_num + 1;

  //console.log('previous: ' + pages[previous])
  //console.log('current: ' + pages[previous+1])
  //console.log('next: ' + pages[next])

  if (previous < first) {
  	$(left).addClass('disappear');
  }
  else {
    //console.log('setting up previous')
  	$(left).removeClass('disappear');
  	$(left).attr('title', pages[previous]);
  }

  if (next > last) {
  	$(right).addClass('disappear');
  }
  else {
    //console.log('setting up next')
  	$(right).removeClass('disappear');
  	$(right).attr('title', pages[next]);
  }

  $('.sections li').removeClass('active');
  $('.sections li').eq(page_num).addClass('active');

}


$(document).ready(function() { 
  
  var initial_hash = location.hash;
  if(initial_hash == "") {
    loadPage(pages[first]);
  }
  else {
    loadPage(initial_hash);
  }

  $('.boxed').on('click', function(e) {
    nextUrl = e.currentTarget.title;
    if (nextUrl != ""){
  	 	loadPage(nextUrl, function() {
        // whatever I want after page-load
      });
    }
    e.preventDefault();
  });

  $(window).on('hashchange', function() {
    loadPage(window.location.hash, function() {
      // whatever I want after page-load
    });
  });

});


