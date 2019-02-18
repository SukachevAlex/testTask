export default function initTextarea() {
	const textarea = document.querySelector('.input-textarea');
	const textareaMinRows = 3;
	const textareaMaxRows = 20;

	textarea.addEventListener('keyup', function () {
		const rowCount = textarea.value.split('\n').length;
		textarea.setAttribute('rows', Math.min(Math.max(textareaMinRows, rowCount), textareaMaxRows));
	});
}
