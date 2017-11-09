window.Todo = window.Todo || {};
window.Todo.Store = 
(function(){
	'use strict';
	function Store(){
		return this;
	}
	
	Store.prototype.readMany = function(){
		var arr = [];
		var index = 0;
		Save.read();
		for(var key in localStorage){
			var storeditems = JSON.parse(window.localStorage.getItem(key));
			arr[index++]= storeditems;
		}
		return arr; 
	}
	
	Store.prototype.writeOne = function(newItem) {
		var itemid = newItem.id;
		window.localStorage.setItem(itemid,JSON.stringify({id:itemid,name:newItem.name,state:newItem.state}));
	}	
	
	Store.prototype.setStatus = function(Id,State){
			var Name = JSON.parse(localStorage.getItem(Id));
			window.localStorage.setItem(Id,JSON.stringify({id:Id,name:Name.name,state:State}));
			var newitem = JSON.parse(window.localStorage.getItem(Id));
			console.log(newitem);
	}
	
	Store.prototype.removed_local = function(Id){
		
		window.localStorage.removeItem(Id);
		
	}
	
	Store.prototype.readOne = function(id){
		return window.localStorage.getItem(id);
	}
	return Store;
})();



