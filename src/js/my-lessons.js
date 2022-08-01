import '../scss/my-lessons.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {yesNo, openExit, dinamocBtn, offset, editCourseTwo, sendScroll, checkKey, searchResult, openNotify, filter, setDate, setTime, editCourse, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside, modal, scrollDown} from '../vendors/script';
$(() => {
	modal();
	openNotify();
	dinamocBtn();
	editCourseTwo('open-lesson', '#my-lessons--edit');
	filter();
	tableLoader();
	tabs();
	sortTable();	
	mainDropdown();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	setDate('date1');
	setDate('date2');
	setDate('date50');
	setTime('settime1');
	searchResult();
	sendScroll();
	openExit();
	yesNo();
	// for(let i = 0; i < edit.length; i++){
	// 	edit[i].addEventListener("click", function(){
	// 		let myLessons = document.querySelector("#my-lessons");
	// 		let myLessonsEdit = document.querySelector("#my-lessons--edit");
	// 		let information = document.querySelector("#information");
	// 		let open = document.querySelector("#open");
			
	// 		myLessons.classList.toggle("hide");
	// 		myLessonsEdit.classList.toggle("active");
	// 		open.classList.add("active");
	// 		information.classList.add('tabs__item--active');
	// 	});
	// }
	scrollDown();
});