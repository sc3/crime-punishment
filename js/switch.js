
/* Constants */
var pages = ['/call.html', '/police.html', '/charges.html', '/courts.html'];
var first = 0;
var last = 3;

/* Selectors for next and previous buttons */
var left = '#left .boxed'
var right = '#right .boxed'

function loadPage(url, callback) {
/* Loads the content inside the "#main" element on the
   page found at <url> into the "#main" element of the 
   current page. Then sets the links and buttons 
   accordingly. */

  // our main  #  url # their main
  $('#main').load(url + "#main", callback);
  setLinks(url);
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
}


$(document).ready(function() { 

  // We already preloaded in the first page's content,
  // so we just set the links for it.
  loadPage(pages[first]);

  $('div .boxed').on('click', function(e) {
    //console.log(e);
    nextUrl = e.currentTarget.title;
    if (nextUrl != ""){
  	 	loadPage(nextUrl);
    }
    return false;
  });

});


