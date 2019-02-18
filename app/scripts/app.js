import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import initSlider from './slider';
import initTextarea from './textarea';

$(() => {
	svg4everybody();
	initSlider();
	initTextarea();
});
