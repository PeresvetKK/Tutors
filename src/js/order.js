import '../scss/order.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {openExit, dinamocBtn, offset, editCourseTwo, sendScroll, checkKey, filter, openNotify, setDate, setTime, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside, modal, scrollDown} from '../vendors/script';
import { doc } from 'prettier';
$(() => {
	modal();
	openNotify();
	tableLoader();
	tabs();
	sortTable();	
	mainDropdown();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	filter();
	dinamocBtn();
	editCourseTwo('open-lesson' ,'#my-lessons--edit');
	editCourseTwo('open-spisanie' ,'#estimation');
	setDate('date2');
	setDate('date3');
	sendScroll();
	openExit();
	scrollDown();
	// yesNo();
	function editCourse(pencel, open) {
		let edit = document.getElementsByClassName(pencel);
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let child = document.getElementsByClassName('main__header');
				for(let i = 0; i < child.length; i++){
					let item = child[i].parentElement;
					item.classList.remove('active');
				}
				let openWrapper = document.querySelector(open);
				let openBt = openWrapper.querySelector('.openButton');
				let openBlock = openWrapper.querySelector('.openBlock')

				openWrapper.classList.add("active");
				openBlock.classList.add("active");
				if(openBt){
					openBt.classList.add('tabs__item--active');
				}
			});
		}
	}
	editCourse("edit-block-cell__inner", "#my-lessons--edit");
	editCourse("open-patez", "#estimation");
	editCourse("course-table__id", "#zayavka");
	editCourse("to-lessons", "#lessons");
});