import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../scss/free-courses.scss';
import {yesNo, timeSlider, sendScroll, checkKey, dinamocBtn, offset, breadsDrop, searchResult, mainDropdown, setDate, setTime, modal, openNotify, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter, openExit } from '../vendors/script';
$(() => {
	let edit = document.getElementsByClassName("breads");
	for (let i = 0; i < edit.length; i++) {
		edit[i].addEventListener("click", function () {
			let myLessons = document.querySelector("#my-lessons");
			let freeCourses = document.querySelector("#free-courses--edit");

			myLessons.classList.toggle("hide");
			freeCourses.classList.toggle("active");
		});
	}
	modal();
	openNotify();
	filter();
	sortTable();
	tabs();
	dropDownFunc();
	burger();
	yesNo();
	tableDropdown();
	dropDownAside();
	tableLoader();
	mainDropdown();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
	searchResult();
	breadsDrop();
	dinamocBtn();
	sendScroll();
	openExit();
	function editCourse(pencel, open) {
		let edit = document.getElementsByClassName(pencel);
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let child = document.getElementsByClassName('main__header');
				for (let i = 0; i < child.length; i++) {
					let item = child[i].parentElement;
					item.classList.remove('active');
				}
				let openWrapper = document.querySelector(open);
				let openBt = openWrapper.querySelector('.openButton');
				let openBlock = openWrapper.querySelector('.openBlock')

				openWrapper.classList.add("active");
				openBlock.classList.add("active");
				if (openBt) {
					openBt.classList.add('tabs__item--active');
				}
			});
		}
	}
	editCourse("course-table__id", "#my-lessons--edit");
	editCourse("open-block", "#free-courses--edit");
	editCourse("to-lessons", "#estimation");
	function favourite() {
		$('.favourites').on('click', function () {
			this.classList.toggle('favourites--active');
		})
	}
	favourite();
	// var dateSlider = document.getElementById('slider-date');
	// function timestamp(str) {
	// 	return new Date(str).getTime();
	// }
	// noUiSlider.create(dateSlider, {
	// 	range: {
	// 		min: timestamp('2021'),
	// 		max: timestamp('2022')
	// 	},
	// 	// step: 7 * 24 * 60 * 60 * 1000,
	// 	start: [timestamp('2021'), timestamp('2023')],
	// });
	// var dateValues = [
	// 	document.getElementById('event-start'),
	// 	document.getElementById('event-end')
	// ];
	// var formatter = new Intl.DateTimeFormat('en-GB', {
	// 	// dateStyle: 'full'
	// });
	// dateSlider.noUiSlider.on('update', function (values, handle) {
	// 	dateValues[handle].innerHTML = formatter.format(new Date(+values[handle]));
	// });
	
	timeSlider(".slider-one");
	timeSlider(".slider-two");
});