import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../scss/index.scss';
import {filter, longMessage, sendScroll, checkKey, dinamocBtn, offset, breadsDrop, pushClose, openNotify,	setDate, setTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, tableDropdown, dropDownAside, editCourseTwo, openExit, hidePassword, timeSlider} from '../vendors/script';
$(() => {
	setDate('date1');
	setDate('date2');
	setDate('date3');
	setDate('date4');
	setDate('date10');
	setDate('date11');
	setTime('settime1');
	filter();
	function modalEvent(button, modals) {
		let btn = document.getElementsByClassName(button);
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function () {
				let mainbody = document.querySelector('.scroll');
				mainbody.classList.add('fixed-scroll');
				let modal = document.querySelector(modals);
				let close = modal.querySelector('.modal__inner-svg');
				modal.classList.toggle('active__modal');
				close.addEventListener('click', function () {
					modal.classList.remove('active__modal');
					mainbody.classList.remove('fixed-scroll');
				});
			});
		}
	}
	hidePassword();
	modalEvent('modalevent', '.modal-event');
	modalEvent('open-modal-edit', '.modal-add-task');
	openNotify();
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	// editCourse();
	longMessage();
	openExit();
	editCourseTwo("course-table__id", "#my-lessons--edit");
	editCourseTwo("open-lesson", "#estimation");
	editCourseTwo("open-dogovor", "#deals");
	editCourseTwo('open-stud-lk', '#users-lk');
	changeBtn();
	tableDropdown();
	dropDownAside();
	pushClose();
	dinamocBtn();
	sendScroll();
	// timeSlider();
	function pencelCourse() {
		let edit = document.getElementsByClassName("edit-block-cell__inner");
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let myLessons = document.querySelector("#my-lessons");
				let myLessonsEdit = document.querySelector("#my-lessons--edit");
				let pancelInner = document.querySelector('#estimation');
				let esti = document.querySelector('#estimationItem');
				let estiblock = pancelInner.querySelector("#open");
				// myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");
				pancelInner.classList.toggle('active');
				esti.classList.toggle('tabs__item--active');
				estiblock.classList.toggle('active');
			});
		}
	}
	function breadsmodal(){
		
			let edit = document.getElementsByClassName("open-block");
			for (let i = 0; i < edit.length; i++) {
				edit[i].addEventListener("click", function () {
					let myLessons = document.querySelector("#my-lessons");
					let deals = document.querySelector('#deals');
					let estiblock = document.querySelector("#open-tab");
					let esti = document.querySelector('#button-active');
					myLessons.classList.toggle("hide");
					deals.classList.toggle('active');
					estiblock.classList.toggle('active');
					esti.classList.toggle('tabs__item--active');
				});
			}
	}
	pencelCourse();
	breadsmodal();
	function modalDogovor(){
		let btn = document.getElementsByClassName('btn-dogovor');
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function () {
				let mainbody = document.querySelector('.scroll');
				mainbody.classList.add('fixed-scroll');
				let modal = document.querySelector('.modal-dogovor');
				let close = modal.querySelector('.modal__inner-svg');
				modal.classList.toggle('active__modal');
				close.addEventListener('click', function () {
					modal.classList.remove('active__modal');
					mainbody.classList.remove('fixed-scroll');
				});
			});
		}
	}
	modalDogovor();
	// stars('stars__input');
});