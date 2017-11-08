var expect = chai.expect;

describe("Store Test Cases", function(){
	"use strict";
	var items,itemname1,itemname2; 
	var todo = {id: "todo10", name: "buy stationary", state: "unchecked"};
	
	beforeEach(function(){
		items = new Todo.Store();
	});
	
	describe("constructor", function(){
		it("should be constructor", function(){
			expect(items).to.be.an.instanceOf(Todo.Store);
		});
	});
	
	describe("Writing item to localStorage", function(){
		it("should write the object", function() {
			itemname1 = items.writeOne(todo);
			var item = JSON.parse(window.localStorage.getItem(todo.id));
			expect(item).to.be.deep.equal(todo);
			
	});
	
	describe("reading multiple items from local storage", function(){
		it("should be an array of object", function(){
			itemname2 = items.readMany();
			expect(itemname2).to.be.an('array');
		});
	});
	
	describe("update the status of item in localstorage", function(){
		it("should update the status", function(){
			var state = "checked"; 
			items.setStatus(todo.id,state);
			var newTodo = JSON.parse(window.localStorage.getItem(todo.id));
			console.log(newTodo);
			expect(newTodo.state).to.be.equal(state);
			window.localStorage.removeItem("todo10");
		});
		});
	});
});