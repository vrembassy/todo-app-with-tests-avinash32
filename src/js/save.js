window.Todo = window.Todo || {};
var Save = (function(){
	var ref;
    var readHandler = null;
    var name = 'items/';
	var app;
	
    function init(readHandler){

        // Initialize Firebase
        var config = {
                    apiKey: "AIzaSyA7sq3l3B2IK5JNvx_8t_ZqYoZhvSZ5T1U",
					authDomain: "practice-19fef.firebaseapp.com",
					databaseURL: "https://practice-19fef.firebaseio.com",
					projectId: "practice-19fef",
					storageBucket: "",
					messagingSenderId: "723802370120"
				};
        app = firebase.initializeApp(config);
		ref = firebase.database().ref(name);
        ref.on('child_added', function(snapshot){
            if (readHandler) readHandler(snapshot.val());
        });
    }

    function add(item) {
        var key = ref.push().key; 
        var updates = {};
        updates[item.id] = item;
        ref.update(updates);
    }

    function update(item) {
        var updates = {};
        updates[item.id] = item;
        ref.update(updates);
    }

    function remove(id) {
        var updates = {};
        updates[id] = null;
        ref.update(updates);
    }

    function clean() {
        ref.off();
    }
	
	function read(){
		var item;
		var store = new Todo.Store();
		ref.on("value", function(items) {
			item = items.val();
			for(var x in item){
				store.writeOne(item[x]);
			console.log(item[x].id);
			console.log(item[x].name);
			console.log(item[x].state);
			
			}
		});
	}
    return {
        init: init,
        add: add,
        update: update,
        remove: remove,
        clean: clean,
		read : read,
    }
})();