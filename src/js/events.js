const createCardColumn = require('./createCardColumn.js');
const events = [
	{
		eventName: "click",
		eventHandler: createCardColumn.newCard
	},
	{
		eventName: "contextmenu",
		eventHandler: createCardColumn.newColumn
	}

];

module.exports = events;