import '../scss/my-lessons.scss';

import header from '../components/header.html';
import aside from '../components/aside.html';

$(() => {
	$("#root").prepend(aside);
	$("#root").prepend(header);

	//Dropdow
	function dropDownFunc() {
		let containerDropDown = document.querySelector('body');
		let dropDown = document.querySelector('.dropdown');

		containerDropDown.addEventListener('click', (event) => {
			if (event.target.classList.contains('btn-dropdown')) {
				dropDown.classList.toggle('dropdown-active');
			}
			else {
				dropDown.classList.remove('dropdown-active');
			}
		});
	}
	//Burger-menu
	function burger() {
		let burger = document.querySelector(".burger");
		burger.addEventListener("click", function () {
			let aside = document.querySelector(".aside");
			let bod = document.querySelector('.scroll');

			aside.classList.toggle("aside--active");
			bod.classList.toggle("fixed-scroll");
			burger.classList.toggle("burger-active");
		});
	}
	
	// сбрасывае табы
	function defaultChange() {
		const lessonsCurrent = document.querySelector('.my-lessons__current');
		const lessonsPast = document.querySelector('.my-lessons__past');

		lessonsCurrent.style.display = "block";
		lessonsPast.style.display = "none";
	}
	// работа табов
	function tabsFunc() {
		const lessonsCurrent = document.querySelector('.my-lessons__current');
		const lessonsPast = document.querySelector('.my-lessons__past');
		let tabs = document.getElementsByClassName("tabs__item");
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener("click", function (e) {


				for (let n = 0; n < tabs.length; n++) {
					tabs[n].classList.remove("tabs__item--active");
				}
				e.target.classList.add("tabs__item--active");
				if (e.target.classList.contains("current")) {
					lessonsCurrent.style.display = "block";
					lessonsPast.style.display = "none";
				}
				else if (e.target.classList.contains("past")) {
					lessonsCurrent.style.display = "none";
					lessonsPast.style.display = "block";
					
				}
			})
		}
	}

	let edit = document.querySelector('.row-counter__pages');
	edit.addEventListener('click', function(){
		
	});
	
	dropDownFunc();
	burger();
	defaultChange();
	tabsFunc();
});