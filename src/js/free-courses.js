import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import '../scss/free-courses.scss';
import {yesNo, timeSlider, sendScroll, checkKey, dinamocBtn, offset, breadsDrop, searchResult, mainDropdown, setDate, setTime, modal, openNotify, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter, openExit, scrollDown, modalNew } from '../vendors/script';
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
	modalNew('box-modal__zayv', 'modal-ost-zayav');
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
	setDate('date2000');
	setTime('settime1');
	setTime('settime200');
	searchResult();
	breadsDrop();
	dinamocBtn();
	sendScroll();
	openExit();
	scrollDown();
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
	// timeSlider(".slider-one");
	// timeSlider(".slider-two");
	// timeSlider(".slider-sixtin");
	// timeSlider(".slider-fourtin");


	// дроп "готовые фильтры"
	const dropwDowns = (triger, trigered) =>{
		document.querySelector(`.${triger}`).addEventListener('click', (e) => e.currentTarget.querySelector(`.${trigered}`)
																			   .classList.toggle('active'));
	}
	// при клике на "сохранить фильтры" в модалке добавление фильтров(доделать), удаление фильтра, отмена фильтров
	const filtresModal = () => {
		$('.save-filter-btn').on('click', (e) => {
			// let input = e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
			let categories = document.querySelector('.modal-saveFiltres').querySelector('.filtres-names')
			let modal = $('.modal-saveFiltres .filtres-names');
			categories.insertAdjacentHTML('beforeend', 
				`
				<button class="filtres-name" type="button">
					${'input.value'}
					<svg class="removeFiltresCategory" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 16L8 8" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M16 8L8 16" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>                                        
				</button>	
				`)
				// input.value = '' 
			
			
			$('.cancel-filtres').on('click', (e) => {
				e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = ""
			})
			$('.removeFiltresCategory').on('click', (e) => {
				e.currentTarget.parentElement.remove();
			})
		})
		$('.removeFiltresCategory').on('click', (e) => {
			e.currentTarget.parentElement.remove();
		})
	}
	// добавляет в таблицу строку с фильтрами
	const addRowCompitedFiltres = () => {
		$('.complited-filtres').on('click', (e) => {
			e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('created-filtres-row--active')
			e.target.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.insertAdjacentHTML('afterbegin', 
			`
			<button class="filtres-name row-filtres-name" type="button">
				input.value
				<svg class="removeFiltresCategory" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 16L8 8" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M16 8L8 16" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>                                        
			</button>
			<button class="filtres-name row-filtres-name" type="button">
				input.value
				<svg class="removeFiltresCategory" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 16L8 8" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M16 8L8 16" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>                                        
			</button>
			<button class="filtres-name row-filtres-name" type="button">
				input.value
				<svg class="removeFiltresCategory" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M16 16L8 8" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M16 8L8 16" stroke="#8F9498" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>                                        
			</button>
			`
			)	
			// e.target.parentElement.parentElement.parentElement.parentElement.parentElement.insertAdjacentHTML('afterend', 
			// `

			// `
			// )	
			$('.reset-compited-filtres').on('click', (e) => {
				e.target.parentElement.classList.remove('created-filtres-row--active')
			})
			$('.row-filtres-name').on('click', (e) =>{
				e.currentTarget.remove();
			})
		})
	}

	addRowCompitedFiltres();
	// при клике на "сохранить фильтры" открывается модалка
	modalNew('save-filter-btn', 'modal-saveFiltres');
	// открывается дроп "готовые фильтры"
	dropwDowns('filtres-drop', 'filtres-save-drop');
	// при клике на карандаш открывается модалка редактирования фильтра
	modalNew('filtres-save-drop-1', 'modal-complited-filtres')
	filtresModal();
});