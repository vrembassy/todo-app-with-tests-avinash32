window.Todo = window.Todo || {};        
window.Todo.Store =
(function(window){
	
		function Store(todo) {
			
			this.todo = todo;
		
		}
   
		Store.prototype.writeone = function() {
			var count = localStorage.length;
			count++;
			var Itid = "todo"+count;
			var itemname = this.todo;
			var stat = "unchecked";
		    window.localStorage.setItem(Itid,JSON.stringify({id:Itid,name:itemname,state:stat}));
		}
		
		Store.prototype.readone = function() {
			var Itid = localStorage.length;
			
			var newitem = JSON.parse(window.localStorage.getItem("todo"+Itid));
			console.log(newitem);
			return newitem;
		}
  
		Store.prototype.readMany = function(){
			var arr = [];
			var index = 0;
			window.localStorage.setItem('todo1', JSON.stringify({id:'todo1',name:'buy milk',state:'unchecked'}));
			for(var key in localStorage){
				var storeditems = JSON.parse(window.localStorage.getItem(key));
				arr[index++]= storeditems;
			}
			return arr; 
		}
		Store.prototype.setStatus = function(Id,Name,State){
			window.localStorage.setItem(Id,JSON.stringify({id:Id,name:Name,state:State}));
			var newitem = JSON.parse(window.localStorage.getItem(Id));
			console.log(newitem);
		}
		Store.prototype.updateItems = function(id)
		{
			window.localStorage.removeItem(id);
			
		}
        
    return Store;           
})(window);
 