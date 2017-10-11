var expect = chai.expect;
	
describe("Testing Store",function(){
	
	var $storeInstance;
	var $toDoElements;
		before(function(){
			$storeInstance = Todo.dependencies.storeInstance();
			$toDoElements = $storeInstance.getToDoElements();
			$appInstance = Todo.dependencies.appInstance();
		});
	
	describe("constructor",function(){
		it("$storeInstance should be an instance of store",function(){
			expect($storeInstance).to.be.an.instanceOf(Todo.store);
		})	
	});
	
	describe("checking init function",function(){
		it("should return  an array",function(){
			expect($storeInstance.init()).to.be.an("array");
		});
	});
	
	describe("checking store elements function",function(){
		it("items should be stored in the storage",function(){
			$storeInstance.storeElements({id: "checkBoxgym", name: "gym", state: "unchecked"});
			expect($toDoElements["checkBoxgym"]).to.exist;
			$appInstance.deleteFromStorage("checkBoxgym");
		});
	});
	
	describe("Checking getToDoElements function",function(){
		it("the function should return the stored items",function(){
			expect($storeInstance.getToDoElements()).to.be.an("object");
		});
	});
	
	describe("Checking setState function",function(){
		it("the function should change the state of stored items",function(){
			$storeInstance.setState("checkBoxEat","checked");
			expect($toDoElements["checkBoxEat"].state).to.be.equal("checked");
			$storeInstance.setState("checkBoxEat","unchecked");
		});
	});
	
});