var expect = chai.expect;

describe("ItemView Test Cases", function(){
"use strict";

var item,name;
var todo = {id: "1", name: "eat", state: "unchecked"};
var $ul;

	beforeEach(function(){
		item = new Todo.itemView(todo);
		//$checkbox = document.getElementById("buttonEat");
		//name = $checkbox.previousSibling;
		$ul = document.createElement("ul");
	});

	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(item).to.be.an.instanceOf(Todo.itemView);
		});
	});
	
	describe("check the checkbox status", function(){
        it("check strike effect", function(){
            //$checkbox.click();
			item.display().checkBoxEffect();
			expect(item.$el.classList.contains('strikeItOut')).to.be.true;
        });
        it("normal effect", function(){
            //$checkbox.click();
			//item.display().checkBoxEffect();
            expect(item.$el.classList.contains('strikeItOut')).to.be.false;
        })
    });
	
	describe("display", function(){
        it("should return the html content", function() {
            expect(item.display(todo.name,todo.id).$el).to.be.an.instanceOf(Element);
        });
    });
	
	describe("remove", function(){
       it("should delete the element", function() {
			this.timeout(10000);
            $ul.append(item.display(todo.name,todo.id,"eatdiv").$el);
			//var divid = document.querySelector("sleepdiv");
			expect(item.remove("eatdiv","checkBoxeat").$el).to.be.null;
        });
		}); 
}); 	