import '../scss/my-lessons.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {setDateTime, editCourse, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	tableLoader();
	tabs();
	sortTable();	
	mainDropdown();
	dropDownFunc();
	burger();
	tableDropdown();
	editCourse();
	dropDownAside();
	setDateTime();
	let edit = document.getElementsByClassName("edit-icon");

	for(let i = 0; i < edit.length; i++){
		edit[i].addEventListener("click", function(){
			let myLessons = document.querySelector("#my-lessons");
			let myLessonsEdit = document.querySelector("#my-lessons--edit");
			let information = document.querySelector("#information");
			let open = document.querySelector("#open");
			
			myLessons.classList.toggle("hide");
			myLessonsEdit.classList.toggle("active");
			open.classList.add("active");
			information.classList.add('tabs__item--active');
		});
	}
});