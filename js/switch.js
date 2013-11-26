

var pages = ['/call.html', '/police.html', '/charges.html', '/courts.html'];
var first = 0;
var last = 3;


function loadPage(url, callback) {
/* Loads the content inside the #main element" on the
   page found at <url> into the #main element of the 
   current page. Then sets the links and buttons 
   accordingly. */

  $('#main').load(url + "#main", callback);
  setLinks(url);
}


function setLinks(url) {
/* Changes the urls the "next" and "previous" buttons
   point at, and, when at either end of the sequence
   of pages, removes the appropriate button from view. */

  for (i=0; i<=last; i++) {
	if (pages[i] == url) {
      page_num = i;
  	}
  }

  var previous = page_num - 1;
  var next = page_num + 1;

  if (previous < first) {
  	$('#previous').addClass('disappear');
  }
  else {
  	$('#previous').removeClass('disappear');
  	$('#previous').attr('title', pages[previous]);
  }

  if (next > last) {
  	$('#next').addClass('disappear');
  }
  else {
  	$('#next').removeClass('disappear');
  	$('#next').attr('title', pages[next]);
  }
}


$(document).ready(function() { 

  loadPage(pages[first]);

  $('span').on('click', function(e) {
  	console.log(e)
  	nextUrl = e.target.title;
  	loadPage(nextUrl);
  	return false;
  });

});
