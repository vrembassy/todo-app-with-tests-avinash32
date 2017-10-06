var expect = chai.expect;

describe("Testing itemsView",function(){
	var $itemsInstance;
	var $itemInstance;
	var $ulElement;
	var $appInstance;
	var div;
	var $checkBox;
	var name;
	var $deleteButton;
	
	before(function(){
		$itemsInstance = new Todo.itemsView();
		$itemInstance = new Todo.itemView();
		$appInstance = new Todo.AppView();
		$ulElement = document.getElementById("itemContainerId");
		div = document.createElement("div");
		$checkBox = document.getElementById("checkBoxEat");
		$name = $checkBox.nextSibling;
	});
	
	describe("contstructor",function(){
		it("Should return an instance of itemsView",function(){
			expect($itemsInstance).to.be.an.instanceOf(Todo.itemsView);
		});
	});
	
	describe("Testing init function",function(){
		it("Should return true after initializing everything",function(){
			expect($itemsInstance.init()).to.be.true;
		});
	});
	
	describe("Checking the display function",function(){
		it("should insert new items into the DOM",function(){
			//i'm assuming random items and inserting it into the DOM since it doesn't have anything to do with how the users see the app
			expect(div.innerHTML = $itemInstance.display("avinash","checkBoxavinash","avinashdiv")).to.be.a('string');
		});
	});
	
	describe("Checking the remove function",function(){
		it("inserting a random item and deleting it there to check the remove function",function(){
			$appInstance.add("harsha");
			$itemsInstance.remove("harshadiv","checkBoxharsha");
			expect(document.getElementById("harshadiv").innerHTML).to.be.eql('');
		});
	});
	
	describe("checking delegation",function(){
		it("check checkbox effect delegation",function(){
			$checkBox.click();
			expect($name.classList.contains("strikeItOut")).to.be.true;
			$checkBox.click();
		});
		it("checking delete button delegation",function(){
			$appInstance.add("kiran");
			$outerDiv = document.getElementById("kirandiv");
			$deleteButton = document.getElementById("deleteButtonkiran");
			$deleteButton.click();
			//to make sure the button clicked is actually a delete button
			expect($deleteButton.classList.contains("moveRightSide")).to.be.true;
			expect($outerDiv.innerHTML).to.be.eql('');
		});
	});
});