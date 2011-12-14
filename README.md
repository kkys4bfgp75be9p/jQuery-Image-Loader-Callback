# jQuery Image Loader Callback
Small plugin to dynamically load images as needed and provide a callback method for when they are loaded to the browser. 
## Use Case
Most image galleries will load all the images to the page and hide them with css.  I wanted a way to only load images when the user
requests to view them.  For example, am image gallery may show only 10 images at a time, but will much more than that on load. This is resource
intensive on your server and cost money if your using a cloud hosting provider such as Amazon s3. With this plugin I was able to load the initial image
tag with a loader (which gets cached to the browser and only loads once, not for each image), then load the image I wanted when the user requests it.
### HTML
```html
<img id="image-1" src="/path/to/loader.gif" />
````
### Javascript
```javascript
$(document).ready(function(){
	$("#image-1").loadImage('/path/to/new/image.jpg',function(){
		$(this).css({height:'120px'});//alter the css styling after the image has loaded
	});
});
```
### Example:
[Example code on JS Fiddle](http://jsfiddle.net/jamescharlesworth/tBFKv/2/)
### License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	
	
