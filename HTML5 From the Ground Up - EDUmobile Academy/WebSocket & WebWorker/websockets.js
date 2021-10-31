window.onload = function(){
	var connection = new WebSocket('ws://192.168.xxx.xx/server/websockets.php);
	console.log(connection);
	
	connection.onopen = function() {
		console.log("opened!");
		document.write( 'status: ' + connection.readyState);
	}
	
	connection.onerror = function(error) {
			console.log('Websocket error " + error);
	}
	
	connection.onmessage = function(e) {
		 document.write("Server: " + e.data);
	}
	var testButton = document.getElementById('testButton');
	testButton.oncliick = function(){
		connection.send("This is a test message of the send function!");
		connection.close();
	}
}