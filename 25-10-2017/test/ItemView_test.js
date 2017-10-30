var expect = chai.expect;

describe("ItemView Test Cases", function(){
"use strict";

var item,name;
var todo = {id: "1", name: "eat", state: "unchecked"};
var divid;
var $ul;

	beforeEach(function(){
		item = new Todo.ItemView(todo);
		$ul = document.createElement("ul");
		divid = todo.id;
	});

	describe("constructor", function(){
		it("should be constructor", function() {
			this.timeout(10000);
			expect(item).to.be.an.instanceOf(Todo.ItemView);
			expect(item.todo).to.be.deep.equal(todo);
		});
	});
	
	describe("check the checkbox status", function(){
		it("normal effect", function(){
            expect(item.$el.classList.contains('addlabel')).to.be.false;
        })
        it("check strike effect", function(){
			item.display().checkBoxEffect();
			expect(item.$el.classList.contains('addlabel')).to.be.true;
        });
        it("uncheck strike effect", function(){
			item.display().checkBoxEffect();
			item.display().checkBoxEffect();
			expect(item.$el.classList.contains('addlabel')).to.be.false;
        });
    });
	
	describe("display", function(){
        it("should return the html content", function() {
            expect(item.display().$el).to.be.an.instanceOf(Element);
        });
    });
	
	describe("remove", function(){
        it("should delete the element", function() {
			this.timeout(10000);
            $ul.append(item.display().$el);
			expect(item.remove().$el).to.be.null;
        });
    });
	
	 describe("event handlers", function(){
        it("completion click event called", function(){

            $ul.append(item.display().checkBoxEffect().$el);
            //simulate click 
            $ul.querySelector(".checkButton").click();

            //whether the event handler is called
            expect(item.$el.classList.contains('addlabel')).to.be.true;
            
        });
        it("remove click event called", function(){

            $ul.append(item.display().$el);

            //simulate click 
            $ul.querySelector(".deletestyle").click();

            //whether the event handler is called
            expect(item.remove().$el).to.be.null;
            
        });

    });

	
	
}); 	