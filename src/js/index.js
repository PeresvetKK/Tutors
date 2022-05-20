import '../scss/index.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {sendScroll, checkKey, stars, dinamocBtn, offset, breadsDrop, pushClose, openNotify,	setDate, setTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	setDate('date1');
	setDate('date2');
	setDate('date3');
	setTime('settime1');
	function modalEvent() {
		let btn = document.getElementsByClassName('modalevent');
		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function () {
				let mainbody = document.querySelector('.scroll');
				mainbody.classList.add('fixed-scroll');
				let modal = document.querySelector('.modal-event');
				let close = modal.querySelector('.modal__inner-svg');
				modal.classList.toggle('active__modal');
				close.addEventListener('click', function () {
					modal.classList.remove('active__modal');
					mainbody.classList.remove('fixed-scroll');
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
	pushClose();
	dinamocBtn();
	sendScroll();
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