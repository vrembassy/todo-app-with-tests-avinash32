var expect = chai.expect;

describe("Store Test Cases", function(){
"use strict";
var store,itemname1,itemname2;
var todo = {id: "1", name: "item1", state: "checked"};
var newtodo = {id: "2", name: "item2", state: "checked"};
	beforeEach(function(){
		store = new Todo.dependencies.store(todo);
			app = new Todo.dependencies.app(todo);
			
	});
		
	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(store).to.be.an.instanceOf(Todo.Store);
			expect(store.name).to.be.deep.equal(todo);
		});
	});
		
	describe("fetching preloaded item(init)", function(){
		it("should be an array of preloaded items", function() {
			itemname1 = store.init();
			expect(itemname1).to.be.an('array');
		});
	});
	
	describe("saving the items", function(){
		it("should be an object", function() {
			itemname2 = store.save(todo);
			expect(itemname2).to.be.an('object');
			store.remove(todo.id);
		});
	});
	
	describe("removing stored items", function(){
		it("should delete the item", function(){
		itemname2=store.save(newtodo);
		store.remove(newtodo.id);
		expect(toDoItems[newtodo.id]).to.be.undefined;
		});
	});

});
