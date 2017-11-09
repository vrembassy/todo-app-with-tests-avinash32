var expect = chai.expect;

describe("Item View Test Cases", function(){
	"use strict";
	var item,$ul,$div;
	var todo = {id: "todo10", name: "buy stationary", state: "unchecked"};
	var todo2 = {id: "todo20", name: "buy suppliments", state: "unchecked"};
	beforeEach(function(){
		item = new Todo.ItemView(todo);
		$ul = document.createElement("ul");
		this.div = document.querySelector("#fixtures");
		
		//$ul.append(item.display().$el);
	});
	
	describe("constructor", function(){
		it("should be constructor", function(){
			expect(item).to.be.an.instanceOf(Todo.ItemView);
			expect(item.todo).to.be.deep.equal(todo);
		});
	});
	
	
	
	describe("display", function(){
        it("should return the html content", function() {
           expect(item.display().$el).to.be.an.instanceOf(Element);
        });
    });
	
	describe("check the checkbox status", function(){
		it("normal effect", function(){
            expect(item.$el.classList.contains('addlabel')).to.be.false;
        });
        it("check strike effect", function(){
			this.div.appendChild(item.display().$el);
			item.display().checkBoxEffect("check"+todo.id);
			expect(item.$el.childNodes[0].classList.contains('addlabel')).to.be.true;
        });
        it("uncheck strike effect", function(){
			this.timeout(10000);
			this.div.appendChild(item.display().$el);
			item.display().checkBoxEffect("check"+todo.id);
			item.display().checkBoxEffect("check"+todo.id);
			expect(item.$el.childNodes[0].classList.contains('addlabel')).to.be.false;
        });
    });
	
	describe("remove", function(){
        it("should delete the element", function() {
			var item2 = new Todo.ItemView(todo2);
			this.timeout(10000);
			this.div.appendChild(item2.display().$el);
			item2.remove(item2.todo.id);
			expect(document.querySelector("#"+todo2.id)).to.be.not.exist;
        });
    });
	
});