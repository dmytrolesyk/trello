const modal = (function() {

	const modalBackground = document.getElementById('modalBackground');
	const closeModalButton = document.getElementById('closeModalButton');
	const modalContent = document.getElementById('modalContent');

	function outsideClick(e) {
		if(e.target === modalBackground) {
			modalBackground.style.display = 'none';
		}
	}
	
	function initModal(element) {

		modalBackground.style.display = 'block';
		
		closeModalButton.addEventListener('click', function(){
			modalBackground.style.display = 'none';
		});

		window.addEventListener('click', outsideClick);
		modalContent.innerHTML = `<h3>${element.innerHTML}<h3>`;

	}

	return {
		initModal: initModal
	}

})();

module.exports = modal;