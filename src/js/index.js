import '../scss/index.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import {tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, editCourse, changeBtn, profileDropDown, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	var dat = new AirDatepicker('#set-data', {
		onSelect: function(dataText, inst){
			var dateAsString = dataText.formattedDate;
			console.log(dateAsString);
			var input = document.getElementById('set-data');
			input.value = dateAsString;
			input.setAttribute('data-quantity', input.value);
		}
	});

	var input = document.getElementById('set-data');
	input.addEventListener('input', function () {
		input.setAttribute('data-quantity', input.value);
	});
	tableLoader();
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