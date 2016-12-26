var es = [];
var like = function() {
	var e = es.shift();
	e.getElementsByClassName('UFILikeLink')[0].click();
	console.log('fblike: '+e.getElementsByClassName('fcg')[0].innerText);
};
var load = function() {
	console.log('fblike: <scroll down>');
	window.scrollTo(0, document.body.scrollHeight);
	var t = document.getElementsByClassName('userContentWrapper');
	for (var i=0; i<t.length; i++) {
		var te = t[i].getElementsByClassName('UFILikeLink')[0];
		if (te && te.getAttribute('aria-pressed') == 'false') es.push(t[i]);
	}
};
var act = function() {
	if (es.length) like();
	else load();
	setTimeout(act, 1000);
};
act();
