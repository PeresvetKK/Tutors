import '../scss/contacts.scss';
import {sendScroll, heckKey, setDate, setTime, modal, openNotify, mainDropdown, dropDownFunc, burger, tabs, dropDownAside, openExit, scrollDown} from '../vendors/script';
$(() => {

	const headerSelectLectors = () =>{
		document.querySelectorAll('.btn-dropdown').forEach((element) => {
			element.addEventListener('click', function(){
				element.nextElementSibling.classList.toggle('dropdown-active');
				element.querySelector('.dropdown-arrow').classList.toggle('rotate180');
			});
		});
	}
	headerSelectLectors();
	modal();
	openNotify();
	tabs();
	mainDropdown();
	// dropDownFunc();
	burger();
	dropDownAside();
	setDate('date1');
	setTime('settime1');
	sendScroll();
	openExit();
	scrollDown();
});