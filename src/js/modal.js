const modal = (function() {

    const cleanTree = require('./cleanTree.js');
    const serviceData = require('./service.js');
    const events = require('./events.js');
    const modalBackground = document.getElementById('modalBackground');
    const closeModalButton = document.getElementById('closeModalButton');
    const modalContent = document.getElementById('modalContent');
    const modalFormSubmitButton = document.getElementById("modalFormSubmitButton");
    const inputTitle = document.getElementById("titleInput");
    const textContentInput = document.getElementById("textContentInput");

    function outsideClick(e) {
        if(e.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    }

    function closeModalWindow() {
            modalBackground.style.display = 'none';
        }
    
    function initModal(element) {

        function onFormUpdate(){

            const buildTree = require('./buildTree.js');

            let cardObjId = element.id;
            let parentColumnObjId = element.parentElement.id;

        
            let cardObjIndex;
            let parentColumnObjIndex;

            for (let i = 0; i < serviceData.length; i++) {
                if (serviceData[i].columnId === parentColumnObjId) {
                    parentColumnObjIndex = i;
                    break;
                }
            }

            for (let i = 0; i < serviceData[parentColumnObjIndex].cards.length; i++) {
                if(serviceData[parentColumnObjIndex].cards[i].cardId === cardObjId) {
                    cardObjIndex = i;
                }
            }

            const cardObj = serviceData[parentColumnObjIndex].cards[cardObjIndex];

            cardObj.cardTitle = inputTitle.value;
            cardObj.cardTextContent = textContentInput.value;

            document.getElementById('modalFormId').reset();
            closeModalWindow();
            cleanTree();
            buildTree(serviceData, events, false);

            modalFormSubmitButton.removeEventListener('click', onFormUpdate); 

        }

        modalBackground.style.display = 'block';
        
        closeModalButton.addEventListener('click', closeModalWindow);

        window.addEventListener('click', outsideClick);

        modalFormSubmitButton.addEventListener('click', onFormUpdate);

        modalContent.innerHTML = `${element.innerHTML}`;

    }

    return {
        initModal: initModal
    }

})();

module.exports = modal;