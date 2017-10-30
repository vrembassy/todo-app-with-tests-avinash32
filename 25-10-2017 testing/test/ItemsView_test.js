var expect = chai.expect;

describe("ItemsView Test Cases", function(){
"use strict";

	var items,name,app,item;
var todo = {id: "1", name: "eat", state: "unchecked"};
	var $ul,$checkbox,$delButton,$outdiv;

	beforeEach(function(){
		items = new Todo.ItemsView(todo);
		$ul = document.createElement("ul");
		
	});
	
	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(items).to.be.an.instanceOf(Todo.ItemsView);
			expect(items.todoArray).to.be.deep.equal(todo);
		});
	});
	
	describe("display", function(){
		it("should return the html content", function() {
			expect(items.display().$div).to.be.a.instanceOf(Element);
		});
	});
	
	describe("remove", function(){
        it("should delete the element", function() {
			this.timeout(10000);
           
            $ul.append(items.display().$div);
			
			expect(items.remove().$div).to.be.null;
        });
    });
	
});