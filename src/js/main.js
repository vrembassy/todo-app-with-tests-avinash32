window.Todo = window.Todo || {};
window.Todo.main =
(function(){
	'use strict';
	document.addEventListener("DOMContentLoaded",function(event){
		new Todo.AppView();
	});

})();