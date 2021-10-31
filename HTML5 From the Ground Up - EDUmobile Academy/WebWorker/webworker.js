function init() {
	var worker = new Worker('worker.js');
	worker.addEventListener('message', function(e) {
		document.getElementById('talkbox').innerHTML += ('<p> Worker says:' + e.data + '</p>');
		
	});
	worker.postMessage('Whats up?'); //start the worker
		
		
	var send = document.getElementById('send');
	send.addEventListener('click', function() {
		var message = document.getElementById('msg');
		worker.postMessage(message);
	});
	
			
	var stop = document.getElementById('stop');
	stop.addEventListener('click', function() {
		var message = document.getElementById('msg');
		worker.terminate();
	});
}

window.addEventListener('load', init, false);

//once again fuck all happens. Not enjoying this tutorial/course. Very little works so far. Possibly just outdated info but still infuriating

// okay so it seems since this tutorial, Chrome, Firefox & other browsers give 'cannot be accessed from origin 'null' error - due to not allowing local files linked as web workers. 
//Would need to implement the following   https://stackoverflow.com/questions/21408510/chrome-cant-load-web-worker/33432215#33432215
//	  									  https://stackoverflow.com/questions/37718656/why-does-not-chrome-allow-web-workers-to-be-run-in-javascript