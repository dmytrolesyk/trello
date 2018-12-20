const modal = require('./modal.js');

function createModalButton(element) {
	
	let modalOpener = document.createElement('button');
	modalOpener.classList.add('modal-opener');
	modalOpener.addEventListener("click", (e)=> {
		e.stopPropagation(); 
		modal.initModal(element); 
	});

	for (let i = 0; i < 3; i++) {

		let modalOpenerDot = document.createElement('span');
		modalOpenerDot.classList.add('modal-opener-dot');
		modalOpener.appendChild(modalOpenerDot);
	}

	element.appendChild(modalOpener);
}

module.exports = createModalButton;