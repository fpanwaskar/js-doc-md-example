/**
 * SomeClass very important
 * @type {SomeClass}
 */
var SomeClass = {
	/**
	 * Initialise the application channel
	 * @example Radio.channel('app').request('getRouter')
	 *          Returns the app router
	 * @example Radio.channel('app').request('openModal', )
	 *          Opens the modal see {@link SomeClass#openModal}
	 * @channel link
	 */
	initialiseChannel: function() {
		// do something to initialise it
	},

	/**
	 * open application modal
	 * @param  {Object} content modal content definition
	 * @channel reply
	 */
	openModal: function(content) {
		// open the application modal 
	},

	/**
	 * Ignore this function
	 * @return {Object} This is a very important
	 */
	someFunction: function() {
		// we want the docs for this to be ignored
	},

	/**
	 * Ignore this function
	 * @randomtag this represents a spelling error.
	 */
	someFunction: function() {
		// we want the docs for this to be ignored
	}
}