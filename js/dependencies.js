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
	
	return{
		appInstance : appInstance,
		itemInstance : itemInstance,
		itemsInstance : itemsInstance
	}
})();