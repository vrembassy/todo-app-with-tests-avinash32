var expect = chai.expect;

describe("App View Test Cases", function(){
	"use strict";
	var app,items;
	var $itemText,$clrbutton;
	var div;
	before(function(){
		this.$itemText = document.createElement("input"); 

		this.$itemText.type = "text";
		this.$itemText.id = "todoTextBox";
		this.$clrbutton = document.createElement("input"); 
		this.$clrbutton.type = "button";
		this.$clrbutton.id = "clrButton";
		this.$clrbutton.className = "button";
		this.div = document.querySelector("#fixtures");
		this.div.append(this.$itemText);
		this.div.append(this.$clrbutton);
		app = new Todo.AppView();
	});
	
	describe("constructor", function(){
		it("should be constructor", function(){
			expect(app).to.be.an.instanceOf(Todo.AppView);
		});
	});
	
	describe("display", function(){
		it("should return the html content", function() {
			
			expect(app.display()).to.be.an.instanceOf(Object);
		});
	});
	
	describe("add", function(){
		
		it("Event should fire on pressing enter button",function(){
			
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			this.$itemText.value = "impl";
			
			eventObj.keyCode = 13;
			this.$itemText.dispatchEvent(eventObj);
			expect(this.div.querySelector("#todoTextBox")).to.exist;
			window.localStorage.removeItem("todo"+localStorage.length);
			
		});
	 
}); 
});