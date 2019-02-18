export default function initSlider() {
	const slider = document.querySelector('.slider');
	const sliderPointer = slider.querySelector('.slider__pointer');
	const sliderPointerSizes = {
		width: sliderPointer.getBoundingClientRect().width,
		height: sliderPointer.getBoundingClientRect().height
	};
	let isMoving = false;

	function mouseMove(event) {
		if (isMoving) {
			event.preventDefault();
			const min = -sliderPointerSizes.width / 2;
			const max = slider.offsetWidth - sliderPointer.offsetWidth / 2;
			const position = event.pageX - slider.offsetLeft - sliderPointer.offsetWidth / 2;
			sliderPointer.style.left = `${Math.min(Math.max(min, position), max)}px`;
		}
	}

	function mouseUp() {
		isMoving = false;
	}

	function mouseDown(event) {
		isMoving = true;
		mouseMove(event);
	}

	slider.addEventListener('mousedown', mouseDown);
	document.addEventListener('mousemove', mouseMove);
	document.addEventListener('mouseup', mouseUp);
}
