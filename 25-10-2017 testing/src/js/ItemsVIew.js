window.Todo = window.Todo || {};        
window.Todo.ItemsView =
(function(window){
    // private methods
	//var todo = {id: "1", name: "eat", state: "unchecked"};
	//var divid ="div"+todo.id;
	var item,itemsTodo;
	var $div,divid;
    //ItemsView constructor
		function ItemsView(todoArray) {
			this.todoArray = todoArray;
				//alert(this.todoArray.id);
			this.item = new Todo.ItemView(this.todoArray);
			this.itemsTodo = new Todo.ItemView(this.todoArray);
			this.$div = $createElDiv ("div");
			//this.$div.id = "div" +this.todoArray.id;
			//$div.id = items+"div";
			return this;
			}	
   
 
        ItemsView.prototype.display = function () {
			var items = this.todoArray;
			var div = document.createElement("DIV");
			div.id="div"+items.id;
			this.$div.innerHTML = this.item.display();
			//var $ul = document.querySelector("#itemContainer");
			//$ul.appendChild(div);
			console.log("new TODO item added");
			console.log(items);
			return this;
		}
		
		ItemsView.prototype.add = function(){
			//this.item = new Todo.ItemView(this.todoArray);
			this.display();
			//var ul = document.querySelector("#itemContainer");
			//ul.appendChild(this.$div);
			console.log("new TODO item added");
			//console.log(items);
		}
               
		ItemsView.prototype.assignListeners = function(){
			this.item =new Todo.ItemView(this.todoArray);
			this.itemsTodo = new Todo.ItemsView(this.todoArray);
			console.log("reached delegation");
			var id = event.target.id;
			
			var $item = event.target;
			
			if ($item.classList.contains("checkButton")){
				var DivId = event.target.getAttribute("id");
				this.item.checkBoxEffect(DivId);
			}
			else if($item.classList.contains("deletestyle")){	
				var outerDivId = event.target.getAttribute("divid");
				var itemId = event.target.getAttribute("itemid");
				//outerDivId ="li"+this.todoArray.id;
				//console.log(outerDivId);
				this.itemsTodo.remove(outerDivId,itemId);													//remove (ItemsView-->ItemView)
				//store.remove(outerDivId);														//delete (ItemsView-->Store)
				}
		}
		
		ItemsView.prototype.remove = function (id,itemid) {
			//alert("hi");
			//var item = new Todo.ItemView(this.todoArray);
			this.item.remove(id,itemid);
			$removeEl(this.$div);
			this.$div=null;
			return this;	
		}
				
		
		
		ItemsView.prototype.clearScreen = function(){
			//alert(this.todoArray);
			var clrbutton = document.querySelector("#clrButton");
			this.item = new Todo.ItemView(this.todoArray);
			this.item.remove(clrbutton.id);
			
		}
    return ItemsView;     
})(window);
 