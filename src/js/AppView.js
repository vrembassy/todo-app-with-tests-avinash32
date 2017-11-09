window.Todo = window.Todo || {};
window.Todo.AppView = 
(function(){
	var items;
	var item;
	var $itemText;
	var state;
	var evntChecked;
	"use strict";
	function AppView(){
		var store = new Todo.Store();
		var todoArray = store.readMany();
		this.items = new Todo.ItemsView(todoArray);
		this.display();
		$itemText = document.querySelector("#todoTextBox");
		$itemText.addEventListener("keydown", this.add, false);
		this.items = new Todo.ItemsView(todoArray);
		var clrbutton = document.querySelector("#clrButton");
		clrbutton.addEventListener("click",this.items.clearScreen);
		var ulElement = document.querySelector("#itemContainer");
		ulElement.addEventListener("click",this.items.assignListeners);
		ulElement.addEventListener("checked",function(e){alert(e.target.id)});
		document.body.addEventListener("checked",this.doSomeWork,false);
		document.body.addEventListener("unchecked",this.doSomeWork,false);
		document.body.addEventListener("removed",this.remove_local,false);
				
		return this;
	}
	
	AppView.prototype.display = function(){
		this.items.display();
		return this;
	}
	
	AppView.prototype.remove_local = function(e){
		var store = new Todo.Store();
		store.removed_local(e.detail.id);
		Save.remove(e.detail.id);
	}
	
	AppView.prototype.add = function(){
		var itemText = document.querySelector("#todoTextBox");
		if(event.keyCode === 13){
			console.log('textbox input taken');
			if (itemText.value.length < 1 || itemText.value == " "){
				alert("enter proper input");
			}
			else{ 
				var count = localStorage.length+1;	
				var itemid = "todo"+count;
				var itemname = itemText.value;
				var stat = "unchecked";
				var newItem = {id:itemid,name:itemname,state:stat};
				this.items = new Todo.ItemsView(newItem);
				this.items.add(newItem);
				var store = new Todo.Store();
				store.writeOne(newItem);
				Save.add(newItem);
				itemText.value = null;
			}
		}		
	}
	
	AppView.prototype.doSomeWork = function(e){
		var id = e.detail.id.substring(5);
		var store = new Todo.Store();
		var items = JSON.parse(store.readOne(id));
		if(items.state == "checked"){
			items.state = "unchecked";
		}
		else{
			items.state = "checked";
		}
		Save.update(items);
		store.setStatus(id,e.detail.state);
		console.log(id);
	}
	
	return AppView;
})();