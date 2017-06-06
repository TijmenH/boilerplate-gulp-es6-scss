
/**
* @description
* Makes the notice say 'ok!' and turn green if all is good.
*/
export default class NoticeHandler {
	constructor() {
		this.notice = document.querySelector('.notice');
		if (this.notice) {
			// Find the notice elements
			this.noticeTitle = document.querySelector('.notice__title');
			this.noticeMessage = document.querySelector('.notice__message');
			// Create a nice ok message array
			const message = [
				'Ok!',
				'If you see this message, all is ok and the Javascript has succesfully been compiled!'
			];
			// Check if all is found and run the function to change the notice
			if (this.noticeTitle && this.noticeMessage) this.changeNotice(...message);
		}
	}

	/**
	* @description
	* Changes the notice with provided params
	*
	* @param {string} title - The title of the notice
	* @param {string} message - The message of the notice
	*/
	changeNotice(title, message) {
		// Change the innerHTML of the notice
		this.noticeTitle.innerHTML = title;
		this.noticeMessage.innerHTML = message;
		// Add class to make the message text green :)
		this.addClass(this.notice, `${this.notice.classList[0]}--green`);
	}

	/**
	* @description
	*	Adds the provided class to the provided element
	*
	* @param {object} element - The element to add the class to
	* @param {string} cls - The class to add to the element
	*/
	addClass(element, cls) {
		element.classList.add(cls);
	}
}
