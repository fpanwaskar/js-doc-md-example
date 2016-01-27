/**
 * AnotherClass does a very important job
 * @type {AnotherClass}
 */
var SomeClass = {
	/**
	 * Initialise the application channel
	 * @example Radio.channel('app').request('getRouter')
	 *          Returns the app router
	 * @example Radio.channel('app').request('openModal', )
	 *          Opens the modal @see SomeClass#openModal
	 * @channel 
	 */
	initialiseChannel: function() {
		// do something to initialise it
	},

	/**
	 * open application modal
	 * @param  {Object} content modal content definition
	 * @alias channel-reply
	 */
	openModal: function(content) {
		// open the application modal 
	}
}