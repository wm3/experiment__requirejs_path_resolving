define(['./sub'], function(sub) {
	return function() { return "'main' module loads ... " + sub.name; }
});
