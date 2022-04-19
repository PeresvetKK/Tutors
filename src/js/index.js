import '../scss/index.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import {setDateTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	editCourse();
	changeBtn();
	tableDropdown();
	dropDownAside();
	setDateTime();
});