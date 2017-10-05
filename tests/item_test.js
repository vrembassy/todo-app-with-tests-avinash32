var expect = chai.expect;

describe("Item test",function(){
	var $itemInstance;
	var $appInstance;
	var $checkBox;
	
	beforeEach(function(){
		$itemInstance = new Todo.itemView();
		$appInstance = new Todo.AppView();
		$checkBox = document.getElementById("checkBoxEat");
	});
	
	describe("Constructor",function(){
		it("itemInstance should be an instance of itemView",function(){
			expect($itemInstance).to.be.an.instanceOf(Todo.itemView);
		});
	});
	
	describe("Checking init function",function(){
		it("Init should return true after initialising every variables",function(){
			expect($itemInstance.init()).to.be.true;
		});
	});
	
	describe("checking the checkBox effect function",function(){
		it("checking normal effect",function(){
			var $name = $checkBox.nextSibling;
			expect($name.classList.contains("strikeItOut")).to.be.false;
		});
		it("checking striked out effect",function(){
			var $name = $checkBox.nextSibling;
			$checkBox.checked = true;
			expect($name.classList.contains("strikeItOut")).to.be.true;
		});
	});
	
	describe("checking remove function",function(){
		it("Removing event listeners and items",function(){
			this.timeout(10000);
			$appInstance.add("avinash");
			$div = document.querySelector("avinashdiv");
			$itemInstance.remove("avinashdiv","checkBoxavinash");
			expect($div).to.be.null;
		});
	});
	
	describe("Checking display function",function(){
		it("Display funtion should return a string",function(){
			expect($itemInstance.display("avinash","avinashdiv","checkBoxavinash")).to.be.a("string");
		});
	});
});