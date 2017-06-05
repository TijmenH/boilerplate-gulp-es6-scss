
/**
* @description
* Just a basic example, greeting you!
*/
export default class Hello {
	constructor() {
		this.greetingTitle = document.querySelector('.greeting__title');
		this.sayHello();
	}

	sayHello() {
		this.greetingTitle.innerHTML = 'Hello there!';
	}
}
