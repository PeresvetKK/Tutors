import '../scss/free-lectures.scss';
import {sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter} from '../vendors/script';
$(() => {
	filter();
	sortTable();
	tabs();
	editCourse();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
});