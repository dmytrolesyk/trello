(function() {

	require('../css/style.css');
	const whenDataReceived = require('./fetchData.js');
	const buildTree = require('./buildTree.js');
	const events = require('./events.js');


		whenDataReceived('serverData.json').then(function(data){

				buildTree(data, events);
	
		});
	
})();