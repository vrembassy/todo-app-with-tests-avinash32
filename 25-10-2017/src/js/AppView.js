window.Todo = window.Todo || {};        
window.Todo.AppView = 
(function(){
    "use strict";
		
		var items,store;
			
		function AppView(todo) {
        	this.todo = todo;
			this.items = new Todo.ItemsView(todo);
			var ulElement = document.querySelector("#itemContainer");
			var itemName = document.querySelector("#todoTextBox");
			var clrbutton = document.querySelector("#clrButton");
			itemName.addEventListener("keydown" ,this.add, false);       				
			clrbutton.addEventListener("click",this.items.clearScreen);        			
			ulElement.addEventListener("click",this.items.assignListeners);  				
			this.display();
		}
          
		
		AppView.prototype.display = function(){
			
			this.items.display();
						
		}
		AppView.prototype.add = function(){
			
				var itemName = document.querySelector("#todoTextBox");
				if(event.keyCode === 13){
				console.log('textbox input taken');
				if (itemName.value.length < 1 || itemName.value == " "){
					alert("wrong input");
				}
				else{ 
						var itemid = "todo"+itemName.value;
						this.store = new Todo.Store(itemName.value);
						this.store.writeone();
						var insertedItem = this.store.readone();
						this.items = new Todo.ItemsView(insertedItem);
						this.items.add();
						itemName.value = null;
					}
				}				
		}
    return AppView; 
})();
 