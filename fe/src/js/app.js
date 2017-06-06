import NoticeHandler from './components/notice/noticeHandler';

/**
* ENTRY JS FILE
* Use this file to run all JS scripts
*/
document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.notice')) {
		new NoticeHandler();
	}

	console.log('app.js OK!');
});
