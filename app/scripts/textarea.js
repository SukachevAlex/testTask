export default function initTextarea() {
	const textarea = document.querySelector('.input-textarea');
	const textareaMinRows = 18;
	const textareaMaxRows = 25;

	textarea.addEventListener('keyup', function () {
		const rowCount = textarea.value.split('\n').length;
		textarea.setAttribute('rows', Math.min(Math.max(textareaMinRows, rowCount), textareaMaxRows));
	});
}
