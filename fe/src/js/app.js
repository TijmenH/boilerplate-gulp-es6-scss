import Hello from './components/greeting/hello';

/**
* ENTRY JS FILE
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
