window.Todo = window.Todo || {};
window.Todo.main =
(function(){
	'use strict';
	Save.init();
	document.addEventListener("DOMContentLoaded",function(event){
		new Todo.AppView();
	});

})();