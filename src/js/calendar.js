import '../scss/calendar.scss';
import { mainDropdown, dropDownFunc, burger, tabs, dropDownAside} from '../vendors/script';
$(() => {
	tabs();
	mainDropdown();
	dropDownFunc();
	burger();
	dropDownAside();
});