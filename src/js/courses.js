import '../scss/courses.scss';
import {modal, openNotify, filter, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, mainDropdown} from '../vendors/script';
$(() => {
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
	mainDropdown();
	tableLoader();
});