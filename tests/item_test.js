var expect = chai.expect;

describe("Testing ItemView",function(){
	var $itemInstance;
	var $appInstance;
	var $checkBox;
	var $name;
	
	before(function(){
		$itemInstance = Todo.dependencies.itemInstance();
		$appInstance = Todo.dependencies.appInstance();
		$checkBox = document.getElementById("checkBoxEat");
		$name = $checkBox.nextSibling;
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
		it("checking striked out effect",function(){
			$checkBox.click();
			expect($name.classList.contains("strikeItOut")).to.be.true;
		});
		it("checking normal effect",function(){
			$checkBox.click();
			expect($name.classList.contains("strikeItOut")).to.be.false;
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