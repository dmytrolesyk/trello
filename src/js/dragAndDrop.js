const dnd = (function(){

	const serviceData = require('./service.js');
	const buildTree = require('./buildTree.js');
	const cleanTree = require('./cleanTree.js');
	const events = require('./events.js');
	var dragSrcEl = null;


	function dragStart(e) {


		e.target.classList.add("dragged");
		setTimeout(()=> e.target.classList.add("invisible"), 0.1);

		dragSrcEl = e.target;
		e.dataTransfer.setData("text/html", this.innerHTML);
	}

	function dragEnd(e) {

		e.target.classList.remove("dragged");
		e.target.classList.remove("invisible");

		const cols = document.getElementsByClassName("column");
		[].forEach.call(cols, function(col) {
		col.classList.remove("over");
	});

	}

	function dragEnter(e) {

		e.target.parentElement.classList.add("over");
	}

	function dragOver(e) {

		e.preventDefault();
	}

	function dragLeave(e) {

		e.target.parentElement.classList.remove("over");
	}

	function dragDrop(e) {

		const receivedData = e.dataTransfer.getData("text/html");

		const draggedCardId = dragSrcEl.id;
		const draggedCardColumnId = dragSrcEl.parentElement.id;


		//find the index of the column of the card which is being dragged
		for (let i = 0; i < serviceData.length; i++) {
			if (draggedCardColumnId === serviceData[i].columnId) {
				var draggedCardColumnIndex = i;
			}
		}

		//find the index of the card being dragged
		for (let i = 0; i < serviceData[draggedCardColumnIndex].cards.length; i++) {
			if (draggedCardId === serviceData[draggedCardColumnIndex].cards[i].cardId) {
				var draggedCardIndex = i;
			}
		}

		//delete the card object in the array in the column it's being dragged from, store its value in the variable
		const draggedCardObject = serviceData[draggedCardColumnIndex].cards.splice(draggedCardIndex, 1)[0];

		const droppedCardId = e.target.id;
		const droppedCardColumnId = e.target.parentElement.id;


		//find the index of the column object of the card on which the dragged card is being dropped on
		for (let i = 0; i < serviceData.length; i++) {
			if (droppedCardColumnId === serviceData[i].columnId) {
				var droppedCardColumnIndex = i;
			}
		}

		//find the index of the card object on which the dragged card is being dropped on
		for (let i = 0; i < serviceData[droppedCardColumnIndex].cards.length; i++) {
			if (droppedCardId === serviceData[droppedCardColumnIndex].cards[i].cardId) {
				var droppedCardIndex = i;
			}
		}

		//insert the dragged card object into the new place
		serviceData[droppedCardColumnIndex].cards.splice(droppedCardIndex, 0, draggedCardObject);

		cleanTree();
		buildTree(serviceData, events);

		document.getElementById(draggedCardId).innerHTML = receivedData;

	}

	return {

		dragStart: dragStart,
		dragEnd: dragEnd,
		dragEnter: dragEnter,
		dragOver: dragOver,
		dragLeave: dragLeave,
		dragDrop: dragDrop

	}

})();

module.exports = dnd;