
function loadScript(path) {
	var element = document.createElement('script');
	element.src = path;
	document.head.appendChild(element);

	console.log('loaded script ' + path);
}

function load(scripts) {
	window.addEventListener('load', function() {
		scripts.forEach(function(item) {
			loadScript(item);
		});
	});
}

load([
	'hello1.js',
	'hello2.js'
]);
