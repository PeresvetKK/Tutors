import '../scss/tasks.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'

import {filter, openExit, dinamocBtn, offset, editCourseTwo, sendScroll, checkKey, openNotify, setDate, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, changeBtn, tableDropdown, dropDownAside, scrollDown} from '../vendors/script';
$(() => {

    function completeTask(){
        $('.open-complete-modal').on('click', function(){
            let complite = document.querySelector('.complite-modal');
            complite.classList.toggle('active__modal');
            let scroll = document.querySelector('.scroll');
            scroll.classList.toggle('fixed-scroll');
            $('.modal__inner-svg').on('click', function(){
                complite.classList.remove('active__modal');
                scroll.classList.remove('fixed-scroll');
            })
        })
    }
    // function editCourse() {
	// 	let edit = document.getElementsByClassName("edit-block-cell__inner");
	// 	for (let i = 0; i < edit.length; i++) {
	// 		edit[i].addEventListener("click", function () {
	// 			let myLessons = document.querySelector("#my-lessons");
	// 			let myLessonsEdit = document.querySelector("#my-lessons--edit");

	// 			myLessons.classList.toggle("hide");
	// 			myLessonsEdit.classList.toggle("active");
				
	// 		});
	// 	}
	// }
	editCourseTwo('open-plan', "#my-lessons--edit");
    function goBack(){
		let edit = document.querySelector(".back-arrow");
			edit.addEventListener("click", function () {
				let myLessons = document.querySelector("#my-lessons");
				let myLessonsEdit = document.querySelector("#my-lessons--edit");
				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");	
			});
	}
	openNotify();
    goBack();
	filter();
	completeTask();
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	changeBtn();
	tableDropdown();
	dropDownAside();
	setDate('date1');
	setDate('date50');
	sendScroll();
	dinamocBtn();
	openExit();
	scrollDown();
});