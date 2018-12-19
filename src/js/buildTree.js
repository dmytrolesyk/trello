const createEventListeners = require('./createEventListeners.js');

function buildTree(data, events) {
	for (let i = 0; i<data.length; i++) {
		if(!(data[i].cards.length)) continue;
		let column = document.createElement('div');
		column.classList.add('column');
		column.id = data[i].columnId;

		for (let y = 0; y < data[i].cards.length; y++) {
			let card = document.createElement('a');
			card.classList.add('card');
			card.id = data[i].cards[y].cardId;
			createEventListeners(events, card);
			card.innerHTML = `Title: ${data[i].cards[y].cardTitle}`;
			column.appendChild(card);
		}

		document.getElementById('flex-container').appendChild(column);
	}
}

module.exports = buildTree;