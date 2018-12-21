(function() {

	require('../css/style.css');
	require('../css/modal.css');
	const whenDataReceived = require('./fetchData.js');
	const buildTree = require('./buildTree.js');
	const serviceData = require('./service.js');
	const events = require('./events.js');
	const fillEventsArray = require('./fillEventsService.js');
	fillEventsArray();

	

	whenDataReceived('serverJSON.json').then(data => {
			
			serviceData.push(...data);
			buildTree(serviceData, events, true);
			
	});

	//switched to the new branch;
	
})();