const createCardColumn = (function(){

	
	const serviceData = require('./service.js');
	const createEventListeners = require('./createEventListeners.js');
	const events = require('./events.js');
	const createModalButton = require('./createModalButton.js');
	const formatDate = require('./formatDate.js');

	let columnsIdCounter = 0;
	let cardsIdCounter = 0;

	function newCard(e) {

		if (!(e.target.classList.contains('card'))) { return }
		let clonedCard = e.target.cloneNode();
		cardsIdCounter = ++cardsIdCounter;
		clonedCard.id = "card-" + cardsIdCounter;
		clonedCard.setAttribute("draggable", "true");
		createEventListeners(events, clonedCard);
		e.target.parentElement.appendChild(clonedCard);

		let parentColumnId = e.target.parentElement.id;

		//update array, find the index of the column where the new card was created

		for (let i = 0; i < serviceData.length; i++) {
			if(parentColumnId === serviceData[i].columnId) {
				var parentColumnIndex = i;
				break;
			}
		}

		//create card object to be pushed to data array

		let cardObj = {

			cardId: clonedCard.id,
			cardTitle: clonedCard.id,
			cardAuthor: "",
			cardDate: formatDate(),
			cardTextContent: ""

		}

		serviceData[parentColumnIndex].cards.push(cardObj);

		clonedCard.innerHTML = `<h3>${cardObj.cardTitle}</h3>
			<h4>${cardObj.cardAuthor}</h4>
			<h4>${cardObj.cardDate}</h4>
			<p>${cardObj.cardTextContent}<p>`;

		createModalButton(clonedCard);

		console.log(serviceData);
	}


	function newColumn(e) {

		e.preventDefault();
		if (!(e.target.classList.contains('card'))) { return }

		let clonedColumn = e.target.parentElement.cloneNode();
		columnsIdCounter = ++columnsIdCounter;
		clonedColumn.id = "column-" + columnsIdCounter;

		let clonedCard = e.target.cloneNode(true);
		cardsIdCounter = ++cardsIdCounter;
		clonedCard.id = "card-" + cardsIdCounter;
		clonedCard.setAttribute("draggable", "true");
		createEventListeners(events, clonedCard);
		clonedCard.innerHTML = `Title: ${clonedCard.id}`;

		clonedColumn.appendChild(clonedCard);
		document.getElementById("flex-container").appendChild(clonedColumn);


		let cardObj = {

			cardId: clonedCard.id,
			cardTitle: clonedCard.id,
			cardAuthor: "",
			cardDate: formatDate(),
			cardTextContent: ""

		}


		let columnObj = {
			columnId: clonedColumn.id,
			columnTitle: clonedColumn.id,
			cards: [cardObj]
		}

		serviceData.push(columnObj);

		clonedCard.innerHTML = `<h3>${cardObj.cardTitle}</h3>
		<h4>${cardObj.cardAuthor}</h4>
		<h4>${cardObj.cardDate}</h4>
		<p>${cardObj.cardTextContent}<p>`;

		createModalButton(clonedCard);

	}
	

	return {
		newCard: newCard,
		newColumn: newColumn
	}

})();

module.exports = createCardColumn;