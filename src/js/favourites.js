import '../scss/favourites.scss';
import {modal, openNotify, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, mainDropdown} from '../vendors/script';
$(() => {
	modal();
	openNotify();
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