var expect = chai.expect;

var $itemsInstance;
var $appInstance;
var $itemBox;
var $storeInstance;
var toDoElements;

	before(function(){
		$itemsInstance = Todo.dependencies.itemsInstance();
		$appInstance = Todo.dependencies.appInstance();
		$itemBox = Todo.dependencies.textBox();
		$storeInstance = Todo.dependencies.storeInstance();
		toDoElements = $storeInstance.getToDoElements();
	});
	
describe("Testing AppView",function(){
	
	describe("constructor",function(){
		it("the returned item must bre an instance of appView",function(){
			expect($appInstance).to.be.an.instanceOf(Todo.AppView);
		});
	});
	
	describe("checking the add function",function(){
		it("the add function should return true after adding",function(){
			expect($appInstance.add("shishir")).to.be.true;
			$itemsInstance.remove("shishirdiv","checkBoxshishir");
		});
	});
	
	describe("checking check function",function(){
		it("Event should fire on pressing enter button",function(){
			this.timeout(10000);
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			$itemBox.value = "vaishak";
			eventObj.keyCode = 13;
			$itemBox.dispatchEvent(eventObj);
			expect(document.getElementById("vaishakdiv")).to.exist;
			$itemsInstance.remove("vaishakdiv","checkBoxvaishak");
		});
	});
	
	describe("Checking init function",function(){
		it("Eat and sleep should be added to DOM",function(){
			expect(document.getElementById("Eatdiv")).to.exist;
			expect(document.getElementById("sleepdiv")).to.exist;
		});
	});
	
	describe("Checking store function",function(){
		it("The store function should return the summary of items stored after storing an item successfully",function(){
			$appInstance.storeElements({id: "checkBoxhello", name: "hello", state: "unchecked"});
			var $items = $storeInstance.getToDoElements();
			expect($items.checkBoxhello.id).to.be.eql("checkBoxhello");
		});
	});
	
	describe("Delete from storage function",function(){
		it("The items deleted should not be present in the storage",function(){
			toDoElements = $storeInstance.getToDoElements();
			var id = "checkBoxhello";
			$appInstance.deleteFromStorage(id);
			expect(toDoElements[id]).to.not.exist;
		});
	});
	
	describe("Checking change state function",function(){
		it("the state should be changed to checked",function(){
			$appInstance.changeState("checked","checkBoxEat");
			expect(toDoElements["checkBoxEat"].state).to.be.equal("checked");
		});
		it("the state should be changed to unchecked",function(){
			$appInstance.changeState("unchecked","checkBoxEat");
			expect(toDoElements["checkBoxEat"].state).to.be.equal("unchecked");
		});
	});
	
	
});