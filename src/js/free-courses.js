import '../scss/free-courses.scss';
import {tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter} from '../vendors/script';
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
	filter();
	sortTable();
	tabs();
	editCourse();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	tableLoader();
});