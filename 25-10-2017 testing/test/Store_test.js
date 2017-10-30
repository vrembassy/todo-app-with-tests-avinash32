var expect = chai.expect;

describe("Store Test Cases", function(){
"use strict";
var store,itemname1,itemname2;
var todo = {id: "2", name: "buy books", state: "unchecked"};
//var newtodo = {id: "2", name: "item2", state: "checked"};
	beforeEach(function(){
		store = new Todo.Store(todo);
			//app = new Todo.app(todo);
			
	});
		
	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(store).to.be.an.instanceOf(Todo.Store);
			expect(store.itemTodo).to.be.deep.equal(todo);
		});
	});
		
	describe("Writing item to localStorage", function(){
		it("should write the object", function() {
			itemname1 = store.writeone();
			var item = JSON.parse(window.localStorage.getItem(todo.id));
			expect(item).to.be.deep.equal(todo);
		});
	});
	
	describe("reading a single item from localStorage", function(){
		it("should be an object", function() {
			itemname2 = store.readone();
			expect(itemname2).to.be.an('object');
			//store.remove(todo.id);
		});
	});
	
	describe("reading multiple items from local storage", function(){
		it("should be an array of object", function(){
		itemname2 = store.readMany();
		//store.remove(newtodo.id);
		expect(itemname2).to.be.an('array');
		});
	});

});
