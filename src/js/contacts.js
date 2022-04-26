import '../scss/contacts.scss';
import {setDate, setTime, modal, openNotify, mainDropdown, dropDownFunc, burger, tabs, dropDownAside} from '../vendors/script';
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
});