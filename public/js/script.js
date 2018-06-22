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

let btn_step_2 = document.querySelector('#btn-step-2'),	
	btn_step_4 = document.querySelector('#btn-step-4');

if(btn_step_2){
	btn_step_2.addEventListener('click', function(e){
		e.preventDefault();
		document.getElementById('form-step-02').submit();
	}) 
}

if(btn_step_4){
	btn_step_4.addEventListener('click', function(e){
		e.preventDefault();
		document.getElementById('form-step-04').submit();
	}) 
}

let select_district = document.getElementById('district'),
	tribu_name = document.getElementById('tribu_name');

if(select_district){
	select_district.addEventListener('change', function(){
		tribu_name.innerHTML = 'Paris ' + this.value;
	})
}
	
$(window).on('load', function(){ 
	setTimeout(function(){
		$('#spiner ').addClass('hidden');
	}, 1000);
});
