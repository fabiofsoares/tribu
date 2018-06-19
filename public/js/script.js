var content = document.querySelector('#menu-content');
var sidebarBody = document.querySelector('#menu-sidebar-body');
var button = document.querySelector('#menu-button');
var overlay = document.querySelector('#close');
var activatedClass = 'menu-activated';

sidebarBody.innerHTML = content.innerHTML;			

button.addEventListener('click', function(e) {
	e.preventDefault();

	this.parentNode.classList.add(activatedClass);
});

button.addEventListener('keydown', function(e) {
	if (this.parentNode.classList.contains(activatedClass))
	{
		if (e.repeat === false && e.which === 27)
			this.parentNode.classList.remove(activatedClass);
	}
});

overlay.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('close btn')
	this.parentNode.parentNode.classList.remove(activatedClass);
});

document.getElementById('user-btn').addEventListener('click', function(){
	document.querySelector('.user-content').classList.toggle('active')
})