import '../scss/calendar.scss';
import {sendScroll, checkKey, setDate, setTime, modal, openNotify, mainDropdown, dropDownFunc, burger, tabs, dropDownAside, openExit, scrollDown} from '../vendors/script';
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
	scrollDown();
});