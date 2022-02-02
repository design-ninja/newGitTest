document.querySelectorAll('CoolButton').forEach(button => {
	button.onmousemove = (e) => {
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left; //x position within the element.
		var y = e.clientY - rect.top;  //y position within the element.
		var xpercent = x / e.target.offsetWidth;
		var ypercent = y / e.target.offsetHeight;
		e.target.style.setProperty('--mouse-x', xpercent * 100);
		e.target.style.setProperty('--mouse-y', ypercent * 100);
	}	
});
