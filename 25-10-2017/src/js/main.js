window.Todo = window.Todo || {};        
window.Todo.main = 
(function() {
	
 document.addEventListener("DOMContentLoaded", function(event){
	console.log("DOM loaded");
				var store=new Todo.Store();
				var storedItems = store.readMany();
									
				for(var i=0;i<storedItems.length;i++){
				
				var app=new Todo.AppView(storedItems[i]);
				
				} 
 });				
})();