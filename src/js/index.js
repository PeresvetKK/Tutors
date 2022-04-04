import '../scss/index.scss';
import {modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, profileDropDown, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	editCourse();
	changeBtn();
	profileDropDown();
	tableDropdown();
	dropDownAside();
});