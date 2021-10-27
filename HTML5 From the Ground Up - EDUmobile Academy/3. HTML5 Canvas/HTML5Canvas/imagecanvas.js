window.onload = function() {
	var canvas = document.getElementById("dboard");
	var context = canvas.getContext('2d');
	
/* 	var mountain = new Image();
	mountain.onload = function() {
		context.drawImage(mountain, 20, 20, 760, 460);
	}
	mountain.src = "mountain.jpg";
	 */
	
									// The above is simply drawing an image from file whilst the below is cropping the image based on coordinates
	
/* 	var mountain = new Image();
	mountain.onload = function() {
		var imgX = 155;
		var imgY = 140;
		var imgW = 1000;
		var imgH = 667;
		var canX = 80;
		var canY = 65;
		var canW = 760;
		var canH = 460;
		context.drawImage(mountain, imgX, imgY, imgW, imgH, canX, canY, canW, canH);
	}
	mountain.src = "mountain.jpg"; */
	
	//the below is an example of image manipulation in javascript
	
	var mountain = new Image();
	mountain.onload = function() {
		context.drawImage(mountain, 20, 20, 760, 460);
		var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
		var data = imageData.data;
		
		//use for loop to separate and manipulate data
		for (var i = 0; i < data.length; i+=4) {
			var red = data[i];
			var green = data[i +1];
			var blue = data[i +2];
			var alpha = data[i +4]; //these can be ignored, just for informational purposes i.e. what each data value is etc 
									 //basically the below is getting rgb & averaging them out so hopefully grayscales the image
		
			var avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
			imageData.data[i] = avg;
			imageData.data[i + 1] = avg;
			imageData.data[i + 2] = avg;
		}
		
		context.putImageData(imageData, 0, 0);

	}
	mountain.src = "mountain.jpg";
	
									// nope, for whatever reason the attempt at grayscale doesn't work, will triple-check tutorial but certain its line for line accurate. 	
}