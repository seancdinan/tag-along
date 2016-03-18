
var tagAlong = {
	include: function(filePath){
		var addScript = document.createElement('script');
		addScript.src = filePath;
		document.body.appendChild(addScript);
		console.log('TagAlong --> Including: ',filePath);
	}
}