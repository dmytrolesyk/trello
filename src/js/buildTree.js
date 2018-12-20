const createEventListeners = require('./createEventListeners.js');
const createModalButton = require('./createModalButton.js');
const events = require('./events.js');

function buildTree(data, events) {
	for (let i = 0; i<data.length; i++) {

	if(!(data[i].cards.length)) { continue} ;
		var column = document.createElement('div');
		column.classList.add('column');
		column.id = data[i].columnId;

		for (let y = 0; y < data[i].cards.length; y++) {

			var card = document.createElement('div');
			card.classList.add('card');
			card.setAttribute("draggable", "true");
			card.id = data[i].cards[y].cardId;
			createEventListeners(events, card);
			card.innerHTML = `<h3>${data[i].cards[y].cardTitle}</h3>
			<h4>${data[i].cards[y].cardAuthor}</h4>
			<h4>${data[i].cards[y].cardDate}</h4>
			<p>${data[i].cards[y].cardTextContent}<p>`;
			column.appendChild(card);
			createModalButton(card);

		}

		document.getElementById('flex-container').appendChild(column);
	}
}

module.exports = buildTree;