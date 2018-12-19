(function() {

	require('../css/style.css');
	const whenDataReceived = require('./fetchData.js');
	const buildTree = require('./buildTree.js');
	const createCardColumn = require('./createCardColumn.js');
	const events = [];
	events.push(
	{
		eventName: "click",
		eventHandler: createCardColumn.newCard
	});
	events.push(
	{
		eventName: "contextmenu",
		eventHandler: createCardColumn.newColumn
	});


		whenDataReceived('serverData.json').then(function(data){

				buildTree(data, events);
		});
	
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

*/