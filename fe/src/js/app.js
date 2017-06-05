import Hello from './components/greeting/hello';

/**
* ENTRY FILE for JS, include this in the head of your html!
*
*/
document.addEventListener('DOMContentLoaded', () => {
	console.log('Ready!');
	/**
	* Other JS files here, with some way of only including them when needed.
	*/
	if (document.querySelector('.greeting')) {
		new Hello();
	}
});
