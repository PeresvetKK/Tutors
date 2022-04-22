import '../scss/calendar.scss';
import {modal, openNotify, mainDropdown, dropDownFunc, burger, tabs, dropDownAside} from '../vendors/script';
$(() => {
	modal();
	openNotify();
	tabs();
	mainDropdown();
	dropDownFunc();
	burger();
	dropDownAside();
});