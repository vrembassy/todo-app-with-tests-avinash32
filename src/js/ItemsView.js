window.Todo = window.Todo || {};
window.Todo.ItemsView = 
(function(){
	var $el;
	var todoItem;
	var item,$itemsTodo;
	'use strict';
	function ItemsView(todoArray){
		
		this.todoArray = todoArray;
		$el = document.querySelector("#itemContainer");
		for(var i=0;i< todoArray.length;i++){
			$todoItem = new Todo.ItemView(todoArray[i]);
			console.log($todoItem.todo);
			
		} 
		return this;
	}
	
	ItemsView.prototype.display = function(){
		
		this.todoArray.forEach(function(todoItem){
			var item = new Todo.ItemView(todoItem);
			var html = item.display().$el;
			$el.appendChild(html);
		})
		console.log("todo items added");		
		return this;
	}
	
	ItemsView.prototype.add = function(todo){
		var item = new Todo.ItemView(todo);
		var html = item.display().$el;
		$el.appendChild(html);
		console.log(todo);
		console.log("one item added");
	}
	
	ItemsView.prototype.remove = function (id) {
		$todoItem.remove(id);
					
	}
	
	ItemsView.prototype.assignListeners = function(){
		console.log("reached delegation");
		var id = event.target.id;	
		var $item = event.target;
		if ($item.classList.contains("checkButton")){
			
			var DivId = event.target.getAttribute("id");
			$todoItem.checkBoxEffect(DivId);
		}
		else if($item.classList.contains("deletestyle")){
			var outerDivId = event.target.getAttribute("liid");
			$todoItem.remove(outerDivId);
		}
	}
		
	ItemsView.prototype.clearScreen = function(){
		var clrbutton = document.querySelector("#clrButton");
		$todoItem.remove(clrbutton.id);	
	}
	
	return ItemsView;
})();