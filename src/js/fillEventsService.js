const events = require('./events.js');
const createCardColumn = require('./createCardColumn.js');
const dnd = require('./dragAndDrop.js');

function fillEventsArray() {

	events.push({eventName: "click", eventHandler: createCardColumn.newCard});
	events.push({eventName: "contextmenu", eventHandler: createCardColumn.newColumn});
	events.push({eventName: "dragstart", eventHandler: dnd.dragStart});
	events.push({eventName: "dragend", eventHandler: dnd.dragEnd});
	events.push({eventName: "dragenter", eventHandler: dnd.dragEnter});
	events.push({eventName: "dragleave", eventHandler: dnd.dragLeave});
	events.push({eventName: "dragover", eventHandler: dnd.dragOver});
	events.push({eventName: "drop", eventHandler: dnd.dragDrop});

}

module.exports = fillEventsArray;