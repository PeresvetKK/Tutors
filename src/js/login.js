import '../scss/login.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {longMessage, sendScroll, checkKey, dinamocBtn, offset, breadsDrop, pushClose, openNotify,	setDate, setTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, tableDropdown, dropDownAside, editCourseTwo, openExit, hidePassword} from '../vendors/script';
$(() => {

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
	
	hidePassword();
	modalEvent();
	openNotify();
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	tabs();
	// editCourse();
	longMessage();
	changeBtn();
	tableDropdown();
	dropDownAside();
	pushClose();
	dinamocBtn();
	sendScroll();

    $('.recovery-btn').on('click', function(){
        let myLessons = document.querySelector(".recovery");
				let myLessonsEdit = document.querySelector(".login");
				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");	
    });
    $('.open-push').on('click', function(){
        let myLessons = document.querySelector(".recovery");
				let myLessonsEdit = document.querySelector(".push");
				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");	
    })
    $('.go-login').on('click', function(){
        let myLessons = document.querySelector(".push");
				let myLessonsEdit = document.querySelector(".login");
				myLessons.classList.toggle("active");
				myLessonsEdit.classList.toggle("active");
    });
    function goBack(){
		let edit = document.querySelector(".back");
			edit.addEventListener("click", function () {
				let myLessons = document.querySelector(".recovery");
				let myLessonsEdit = document.querySelector(".login");
				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");	
			});
	}
    goBack();
	// stars('stars__input');
});