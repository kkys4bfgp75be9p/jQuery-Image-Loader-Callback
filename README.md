# jQuery Image Loader Callback

Small plugin to dynamically load images as needed and provide a callback method for when they are loaded to the browser. 

## Use Case

Most image galleries will load all the images to the page and hide them with css.  I wanted a way to only load images when the user
requests to view them.  For example, am image gallery may show only 10 images at a time, but will much more than that on load. This is resource
intensive on your server and cost money if your using a cloud hosting provider such as Amazon s3. With this plugin I was able to load the initial image
tag with a loader (which gets cached to the browser and only loads once, not for each image), then load the image I wanted when the user requests it.

### HTML
```html
	<img id="image-1" src="/path/to/loader.fig" />
````

### Javascript
```javascript
$(document).ready(function(){
	$("#image-1").loadImage('/path/to/new/image.jpg',function(){
		$(this).css({height:'120px'});//alter the css styling after the image has loaded
	});
});
```
	
	
