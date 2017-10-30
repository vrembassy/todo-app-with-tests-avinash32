Todo.dependencies = (function(){
	
	item = function(todo){
		return new Todo.ItemView(todo);
	}
	items = function(todo){
		return new Todo.ItemsView(todo);
	}
	store = function(todo){
		return new Todo.Store(todo);
	}
	app = function(todo){
		return new Todo.AppView(todo);
	}
	return{
		item : item,
		items : items,
		store : store,
		app : app
	};
})();