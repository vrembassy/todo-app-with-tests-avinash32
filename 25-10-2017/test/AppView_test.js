var expect = chai.expect;

describe("AppView Test Cases", function(){
	"use strict";

	var items,item,app;
	var todo = {id: "1", name: "eat", state: "unchecked"};
	var $ul,$checkbox,$delButton,$itemBox;

	beforeEach(function(){
		$itemBox= document.getElementById("todoTextBox");
		app = new Todo.AppView(todo);
		items = new Todo.ItemsView(todo);
		item = new Todo.ItemView(todo);
		$ul = document.createElement("ul");
		$itemBox = document.createElement("input"); 
		$itemBox.type = "text";
		$itemBox.id = "textBoxId"
		//$div = document.createElement('DIV');
	});
	
	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(app).to.be.an.instanceOf(Todo.AppView);
			expect(app.todo).to.be.deep.equal(todo);
		});
	});
	
	describe("display", function(){
		it("should return the html content", function() {
			expect(app.display()).to.be.an.instanceOf(Object);
		});
	});
	
	describe("add", function(){
		
		it("Event should fire on pressing enter button",function(){
			$ul.appendChild($itemBox);
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			$itemBox.value = "impl";
			eventObj.keyCode = 13;
			$itemBox.dispatchEvent(eventObj);
			expect($ul.querySelector("#textBoxId")).to.exist;
			
		});
	
});
});