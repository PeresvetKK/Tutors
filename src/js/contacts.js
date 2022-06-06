import '../scss/contacts.scss';
import {csendScroll, heckKey, setDate, setTime, modal, openNotify, mainDropdown, dropDownFunc, burger, tabs, dropDownAside, openExit} from '../vendors/script';
$(() => {
	modal();
	openNotify();
	tabs();
	mainDropdown();
	dropDownFunc();
	burger();
	dropDownAside();
	setDate('date1');
	setTime('settime1');
	sendScroll();
	openExit();
});