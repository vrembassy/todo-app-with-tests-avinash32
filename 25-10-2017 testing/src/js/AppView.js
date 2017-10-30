window.Todo = window.Todo || {};        
window.Todo.AppView = 
(function(){
    "use strict";
		//var store=new Todo.Store();
			var items,store;
			
		function AppView(todoArray) {
        	this.todoArray = todoArray;
			this.items = new Todo.ItemsView(todoArray);
			var ulElement = document.querySelector("#itemContainer");
			var itemText = document.querySelector("#todoTextBox");
			var clrbutton = document.querySelector("#clrButton");
			//itemText.addEventListener("keydown" ,this.add, false);       				//textbox eventlistener
			//clrbutton.addEventListener("click",this.items.clearScreen);        				//clear screen button eventlistener
			//ulElement.addEventListener("click",this.items.assignListeners);  				//checkbutton and deletebutton eventlistener
			this.display();
			return this;
		}
          
		
		AppView.prototype.display = function(){
			
			this.items.display();
			return this;				
		}
		AppView.prototype.add = function(){
			
				var itemText = document.querySelector("#todoTextBox");
				if(event.keyCode === 13){
				console.log('textbox input taken');
				if (itemText.value.length < 1 || itemText.value == " "){
					alert("enter proper input");
				}
				else{ 
						var itemid = "todo"+itemText.value;
						this.store = new Todo.Store(itemText.value);
						this.store.writeone();
						var insertedItem = this.store.readone();
						this.items = new Todo.ItemsView(insertedItem);
						this.items.add();
						itemText.value = null;
					}
				}				
		}
    return AppView; 
})();
 