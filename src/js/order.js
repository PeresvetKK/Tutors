import '../scss/order.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {openNotify, setDate, setTime, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside, modal, editCourse} from '../vendors/script';
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
	editCourse();
	dropDownAside();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
	
    // let edit = document.getElementsByClassName('edit-block-cell__innerr');
	// for(let i = 0; i < edit.length; i++){
	// 	edit[i].addEventListener("click", function(){
	// 		let myLessons = document.querySelector("#my-lessons");
	// 		let myLessonsEdit = document.querySelector("#my-lessons--edit");
	// 		let information = document.querySelector("#estimation");
	// 		let open = document.querySelector("#open");
			
	// 		myLessons.classList.toggle("hide");
	// 		myLessonsEdit.classList.toggle("active");
	// 		open.classList.add("active");
	// 		information.classList.add('tabs__item--active');
	// 	});
	// }
});