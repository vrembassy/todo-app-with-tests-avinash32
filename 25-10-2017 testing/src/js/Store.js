window.Todo = window.Todo || {};        
window.Todo.Store =
(function(window){
    // private methods
    //Store constructor
		function Store(itemTodo) {
			
			this.itemTodo = itemTodo;
		
		}
   
		Store.prototype.writeone = function() {
			//var count=localStorage.length;
			//count++;
			//var itemid = "todo"+count;
			var itemid = this.itemTodo.id;
			//var itemname = this.itemTodo;
			var itemname= this.itemTodo.name;
			var stat = "unchecked";
		    window.localStorage.setItem(itemid,JSON.stringify({id:itemid,name:itemname,state:stat}));
		}
		
		Store.prototype.readone = function() {
			
			//var itemid = localStorage.length;
			var itemid = localStorage.length-1;
			var newitem = JSON.parse(window.localStorage.getItem("todo"+itemid));
			console.log(newitem);
			return newitem;
		}
  
		Store.prototype.readMany = function(){
			var arr = [];
			var index = 0;
			window.localStorage.setItem('todo1', JSON.stringify({id:'todo1',name:'buy milk',state:'unchecked'}));
			for(var key in localStorage){
				var storeditems =JSON.parse(window.localStorage.getItem(key));
				arr[index++]=storeditems;
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
 