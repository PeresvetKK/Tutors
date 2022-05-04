import '../scss/my-lessons.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {openNotify, filter, setDate, setTime, editCourse, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside, modal} from '../vendors/script';
$(() => {
	modal();
	openNotify();
	filter();
	tableLoader();
	tabs();
	sortTable();	
	mainDropdown();
	dropDownFunc();
	burger();
	tableDropdown();
	editCourse();
	dropDownAside();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
	
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
});