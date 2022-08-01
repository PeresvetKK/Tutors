import '../scss/courses.scss';
import {yesNo, dinamocBtn, offset, editCourseTwo, sendScroll, checkKey, searchResult, setTime, setDate, modal, openNotify, filter, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, mainDropdown, openExit, scrollDown} from '../vendors/script';
$(() => {
	modal();
	openNotify();
	filter();
	sortTable();
	tabs();
	dinamocBtn();
	editCourseTwo('course-table__id', "#my-lessons--edit");
	editCourseTwo('open-lesson', "#estimation");
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	mainDropdown();
	tableLoader();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
	sendScroll();
	openExit();
	scrollDown();
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
	pencelCourse();
	searchResult();
	yesNo();
});