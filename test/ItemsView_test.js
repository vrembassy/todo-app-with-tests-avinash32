var expect = chai.expect;

describe("Items View Test Cases", function(){
	"use strict";
	var items;
	var $el;
	var todo =[{id: "todo11", name: "buy books", state: "unchecked"},
			   {id: "todo12", name: "buy bag", state: "unchecked"},
			   {id: "todo13", name: "buy milk", state: "unchecked"}];
	
	beforeEach(function(){
		items = new Todo.ItemsView(todo);
		this.$el = document.createElement("ul");
		this.$el.id = "itemContainer";
		var div = document.querySelector("#fixtures");
		div.append(this.$el);
		
		});
	
	describe("constructor", function(){
		it("should be constructor", function(){
			expect(items).to.be.an.instanceOf(Todo.ItemsView);
			expect(items.todoArray).to.be.an.instanceOf(Object);
		});
	});
	
	describe("display", function(){
		it("should return the html content", function() {
			
			expect(items.display()).to.be.an.instanceOf(Object);
		});
	});
});