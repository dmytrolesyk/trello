const createCardColumn = (function(){


	const createEventListeners = require('./createEventListeners.js');
	const events = [{eventName: "click", eventHandler:newCard},{eventName: "contextmenu", eventHandler:newColumn}]
	let columnsIdCounter = 0;
	let cardsIdCounter = 0;

	function newCard(e) {

		let clonedCard = e.target.cloneNode();
		cardsIdCounter = ++cardsIdCounter;
		clonedCard.id = cardsIdCounter;
		clonedCard.setAttribute("draggable", "true");
		createEventListeners(events, clonedCard);
		clonedCard.innerHTML = `Title: card-${clonedCard.id}`;
		e.target.parentElement.appendChild(clonedCard);

		let parentColumnId = e.target.parentElement.id;

		//update array, find the index of the column where the new card was created

		for (let i = 0; i < data.length; i++) {
			if(parentColumnId === data[i].columnId) {
				let parentColumnIndex = i;
				break;
			}
		}

		//create card object to be pushed to data array

		let cardObj = {
			cardId: clonedCard.id,
			cardTitle: `card-${clonedCard.id}`
		}

		data[parentColumnIndex].cards.push(cardObj);
	}

	function newColumn(e){

		e.preventDefault();

		let clonedColumn = e.target.parentElement.cloneNode();
		columnsIdCounter = ++columnsIdCounter;
		clonedColumn.id = columnsIdCounter;

		let clonedCard = e.target.cloneNode(true);
		cardsIdCounter = ++cardsIdCounter;
		clonedCard.id = cardsIdCounter;
		clonedCard.setAttribute("draggable", "true");
		createEventListeners(events, clonedCard);
		clonedCard.innerHTML = `Title: card-${clonedCard.id}`;

		clonedColumn.appendChild(clonedCard);
		document.getElementById("flex-container").appendChild(clonedColumn);

		let cardObj = {
			cardId: clonedCard.id,
			cardTitle: `card-${clonedCard.id}`
		}

		let columnObj = {
			columnId: clonedColumn.id,
			columnTitle: `column-${clonedColumn.id}`,
			cards: [cardObj]
		}

		data.push(columnObj);
	}

	return {
		newCard: newCard,
		newColumn: newColumn
	}

})();

module.exports = createCardColumn;