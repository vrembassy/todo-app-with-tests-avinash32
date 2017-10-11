Todo.dependencies = (function(){
	
	appInstance = function(){
		return new Todo.AppView();
	}
	
	itemInstance = function(){
		return new Todo.itemView();
	}
	
	itemsInstance = function(){
		return new Todo.itemsView();
	}
	
	storeInstance = function(){
		return new Todo.store();
	}
	
	textBox = function(){
		return document.getElementById("newToDoItem");
	}
	
	return{
		appInstance : appInstance,
		itemInstance : itemInstance,
		itemsInstance : itemsInstance,
		storeInstance : storeInstance,
		textBox : textBox
	}
})();