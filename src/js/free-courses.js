import '../scss/free-courses.scss';
import {mainDropdown, setDate, setTime, modal, openNotify, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter} from '../vendors/script';
$(() => {

	let edit = document.getElementsByClassName("breads");
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", function () {
            let myLessons = document.querySelector("#my-lessons");
            let freeCourses = document.querySelector("#free-courses--edit");

            myLessons.classList.toggle("hide");
            freeCourses.classList.toggle("active");
        });
    }
	modal();
	openNotify();
	filter();
	sortTable();
	tabs();
	editCourse();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	tableLoader();
	mainDropdown();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
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
	function breadsCourse() {
		let edit = document.getElementsByClassName("edit-block-cell__innerr");
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let myLessons = document.querySelector("#my-lessons");
				let myLessonsEdit = document.querySelector("#my-lessons--edit");
				let pancelInner = document.querySelector('#estimation');
				let freeCourses = document.querySelector('#free-courses--edit');
				let esti = document.querySelector('#estimationItem');
				let estiblock = pancelInner.querySelector("#open");
				myLessons.classList.remove("active");
				myLessonsEdit.classList.remove("active");
				pancelInner.classList.remove('active');
				freeCourses.classList.remove('hide');
				esti.classList.toggle('tabs__item--active');
				estiblock.classList.toggle('active');
			});
		}
	}
	pencelCourse();
	breadsCourse();
});