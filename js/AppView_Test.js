var expect = chai.expect;

describe("AppView", function() {
	var app = new Todo.AppView();
	var storeInstance = new Todo.store();
	var itemsInstance = new Todo.itemsView();
	var itemInstance = new Todo.itemView();
	
	describe("#add",function(item){
    it("Items View should return true", function() {
		var stat = app.add("Avinash");
		expect(stat).to.equal(true);
	});
    });
	
	describe("#check",function(){
		it("should check whether enter is pressed or not",function(){
		
		});
	});
	
	describe("#init",function(){
		it("checking init function of appview",function(){
			var preItems = ["Eat","sleep"];
			var preloadedItems = storeInstance.init();
			var itemInit = itemInstance.init();
			var itemsInit = itemsInstance.init();
		
			expect(preloadedItems).to.eql(preItems);
			expect(itemInit).to.equal(true);
			expect(itemsInit).equal(true);
			
			var ulElement = document.getElementById("itemContainerId");
			var listener = ulElement.onclick;
			expect(listener).to.not.equal(null);
		});
	});
	
	
});