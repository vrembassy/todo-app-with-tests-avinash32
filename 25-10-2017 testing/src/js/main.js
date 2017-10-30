window.Todo = window.Todo || {};        
window.Todo.main = 
(function() {
	'use strict';
	
 document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM is loaded");
	
               var store=new Todo.Store();
				var items = store.readMany();
									
				for(var i=0;i<items.length;i++){
				
				var app=new Todo.AppView(items[i]);
				
				} 
 });				
})();