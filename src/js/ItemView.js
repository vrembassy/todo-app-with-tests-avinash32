window.Todo = window.Todo || {};
window.Todo.ItemView = 
(function(){
	var evntChecked;
	var evntUnChecked;
	'use strict';
	function ItemView(todo){
		this.todo = todo;
		this.$el = document.createElement('li');
		this.$el.id = this.todo.id;
		this.$el.className ="horline";
		
		$delegate(this.$el,"checkButton","click",this.checkBoxEffect.bind(this));
		$delegate(this.$el,"deletestyle","click",this.remove.bind(this));
		return this;
	}
	
	ItemView.prototype.display = function(){
		var checkBtnId = "check"+this.todo.id;
		var deleteBtnId = "delete"+this.todo.id;
		var elementArray = [];
		var index = 0;
		elementArray[index++] = "<span>"+this.todo.name+"</span>";
		elementArray[index++] = "<input type = 'button' class = 'checkButton' value = '&#10004' id = '"+checkBtnId+"'/>";
		elementArray[index++] = "<input type = 'button' class = 'deletestyle' value = '&#10008' liid ='"+this.$el.id+"' id = '"+deleteBtnId+"'/>";
		elementArray = elementArray.join("");
		this.$el.append(elementArray);
		this.$el.innerHTML = elementArray;
		return this;
	}
	
	ItemView.prototype.checkBoxEffect = function(id){
		var checkBox = document.querySelector("#"+id);
		var name = checkBox.previousSibling;
		name.classList.toggle("addlabel");
		if(name.classList.contains("addlabel")){
			var state = "checked";
			this.evntChecked = new CustomEvent("checked",{detail : {id : id, state : "checked"}});
			document.body.dispatchEvent(this.evntChecked);	
		}
		else{
			var state = "unchecked";
			this.evntUnChecked = new CustomEvent("unchecked",{detail : {id : id, state : "unchecked"}});
			document.body.dispatchEvent(this.evntUnChecked);	
		}
		
		return this;
	}
	
	ItemView.prototype.remove = function(divid){
		var store= new Todo.Store(this.todo);
		if(divid == "clrButton"){
			var newInputItem = document.querySelector("#todoTextBox");
			newInputItem.removeEventListener("keydown",Todo.AppView.add);
			var clrscr = document.querySelector("#clrButton");						
			clrscr.removeEventListener("click",Todo.AppView.clearScreen);
			document.body.innerHTML = null;
			console.log("Clear screen, inputbox Event listener removed and screen cleared");
		}
		else{
		//alert(divid);
			var decision = confirm("Do you want to delete?");
			if(decision == true){	
				var outerDiv = document.querySelector("#"+divid);
				outerDiv.parentNode.removeChild(outerDiv); //this also works			
				console.log("todo item deleted successfully");
				this.evntRemove= new CustomEvent("removed",{detail : outerDiv});
				document.body.dispatchEvent(this.evntRemove);	
			}
			else{
				alert("You chose not to delete that item");
			}
		}
	}
	return ItemView;	
})();