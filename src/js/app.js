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
			console.log(serviceData)
			buildTree(serviceData, events);
			
	});

	//switched to the new branch;
	
})();


/*

[
	{
		columnId: 1,
		columnTitle: "column-1", 
		cards: [
			{
				cardId: 1, 
				cardTitle: "card-1",
				date: "",
				author: ""
			}
		]
	}
]

Новая задача расширить JSON;


title
date of creation 22-01-2007 18:47
button

modal:
input for title
datepicker for date //date of creation

author (list[selection/option])

			let modalOpener = document.createElement('button');
			modalOpener.classList.add('modal-opener');

			for (let z = 0; i < 3; i++) {

				let modalOpenerDot = document.createElement('span');
				modalOpenerDot.classList.add('modal-opener-dot');
				modalOpener.appendChild(modalOpenerDot);			
			}

			card.appendChild(modalOpener);

*/
