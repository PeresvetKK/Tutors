import '../scss/my-lessons.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import {editCourse, tableLoader,tabs, sortTable, mainDropdown, dropDownFunc, burger, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {
	tableLoader();
	tabs();
	sortTable();	
	mainDropdown();
	dropDownFunc();
	burger();
	tableDropdown();
	editCourse();
	dropDownAside();
	let edit = document.getElementsByClassName("edit-icon");

	for(let i = 0; i < edit.length; i++){
		edit[i].addEventListener("click", function(){
			let myLessons = document.querySelector("#my-lessons");
			let myLessonsEdit = document.querySelector("#my-lessons--edit");
			let information = document.querySelector("#information");
			let open = document.querySelector("#open");
			
			myLessons.classList.toggle("hide");
			myLessonsEdit.classList.toggle("active");
			open.classList.add("active");
			information.classList.add('tabs__item--active');
		});
	}
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
});