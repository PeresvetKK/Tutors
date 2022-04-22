import '../scss/index.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {openNotify, setDateTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	function modalEvent() {
		let btn = document.getElementsByClassName('modalevent');
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function () {
				let mainbody = document.querySelector('.scroll');
				mainbody.classList.add('fixed-scroll--mobile');
				let modal = document.querySelector('.modal-event');
				let close = modal.querySelector('.modal__inner-svg');
				modal.classList.toggle('active__modal');
				close.addEventListener('click', function () {
					modal.classList.remove('active__modal');
					mainbody.classList.remove('fixed-scroll--mobile');
				});
			});
		}
	}
	modalEvent();
	openNotify();
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	editCourse();
	changeBtn();
	tableDropdown();
	dropDownAside();
	setDateTime();
});