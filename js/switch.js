

var pages = ['/call.html', '/police.html', '/charges.html', '/courts.html'];
var first = 0;
var last = 3;


function loadPage(url, callback) {
  $('#main').load(url + "#main", callback);
  setLinks(url);
}


function setLinks(url) {

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
  	$('#previous').attr('href', pages[previous]);
  }

  console.log('url: ' + url);
  console.log('page_num: ' + page_num);
  console.log('next: ' + next);
  console.log('last: ' + last);
  if (next > last) {
  	$('#next').addClass('disappear');
  }
  else {
  	$('#next').removeClass('disappear');
  	$('#next').attr('href', pages[next]);
  }
}


$(document).ready(function() { 

  loadPage(pages[first]);

  $('a').on('click', function(e) {
  	nextUrl = e.target.pathname;
  	loadPage(nextUrl);
  	return false;
  });

});
