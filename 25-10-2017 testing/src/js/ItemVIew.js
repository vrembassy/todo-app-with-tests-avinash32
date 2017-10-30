window.Todo = window.Todo || {};        
window.Todo.ItemView =
(function(window){
    // private methods
    "use strict"; 
	//var todo = {id: "1", name: "eat", state: "unchecked"};
	//var divid = "div"+todo.id;
	
    //ItemView constructor
		function ItemView(todo) {
			this.todo = todo;
			
			this.$el = $createEl("li"); 
			//this.$el.id = this.elId = "item_" + this.itemid;
			
			
			$delegate(this.$el,"checkButton","click",this.checkBoxEffect.bind(this));
			$delegate(this.$el,"deletestyle","click",this.remove.bind(this));
			
			return this;
        }
 
        ItemView.prototype.display = function () {
			var items = this.todo;
			var itemid=this.todo.id;
			var ul = document.querySelector("#itemContainer");	
			//var count =ul.childNodes.length;
			//var val=this.divid.value;
			
			var checkbuttonid = this.todo.id;
			var deletebuttonid = "deletebutton"+this.todo.id
			var divid = "div"+this.todo.id;
			var liid = "li"+this.todo.id;
			
			var elementArray = [];
			var index = 0;
			elementArray[index++] = "<li class='horline' id='"+liid+"'>";
			elementArray[index++] = "<span >"+items.name+"</span>";
			elementArray[index++] = "<input type = 'button' class = 'checkButton' value = '&#10004' id = '"+checkbuttonid+"' divid = '"+divid+"'/>";
			elementArray[index++] = "<input type = 'button' class = 'deletestyle' value = '&#10008' id = '"+deletebuttonid+"' divid ='"+divid+"' itemid='"+itemid+"'/>" ;
			elementArray[index++] = "</li>";
			elementArray = elementArray.join("");	
			
			//return elementArray;
			
			this.$el.append(elementArray);
			this.$el.innerHTML = elementArray;
			return this;
		} 
				
		ItemView.prototype.checkBoxEffect = function(id){	
			//var store= new Todo.Store(this.todo);		
			
			//var checkBox = document.getElementById(id);
			
			//var name = checkBox.previousSibling;
		this.$el.classList.toggle("strikedOut");
		
			if(this.$el.classList.contains("strikedOut")){
				//this.todo.state = "checked";
				var state = "checked";
				//store.setStatus(id,name.innerHTML,state);
				//console.log(todo);
				return this;
			}
			else{
				var state = "unchecked";
				//store.setStatus(id,name.innerHTML,state);
				//console.log(todo);
			}
		};
				
        ItemView.prototype.remove = function (divid,itemid) {
			//var store= new Todo.Store(this.todo);
			
			if(divid == "clrButton"){
				var newInputItem = document.querySelector("#todoTextBox");
				newInputItem.removeEventListener("keydown",Todo.AppView.add);
				var clrscr = document.querySelector("#clrButton");						
				clrscr.removeEventListener("click",Todo.AppView.clearScreen);
				document.body.innerHTML = null;
				console.log("Clear screen, inputbox Event listener removed and screen cleared");
			}
			else{
				var decision = confirm("Do you want to delete?");
				if(decision == true){
					
					var outerDivId =divid;
					console.log(divid);
					//var outerDiv = document.querySelector("#"+divid);
					//outerDiv.outerHTML = " "; //this also works
					//store.updateItems(itemid);  
					
					$removeEl(this.$el);
					this.$el=null;
					console.log("todo item deleted successfully");
					}
					else {
						alert("You chose not to delete that item");
					}
				}
			return this;
		}
	return ItemView;
                     
})(window);
	