function createEventListeners(events, element) {
	events.forEach(function(event){
		this.addEventListener(event.eventName, event.eventHandler);
	}, element)
}

module.exports = createEventListeners;