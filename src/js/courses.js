import '../scss/courses.scss';

import header from '../components/header.html';
import aside from '../components/aside.html';



$(() => {
	$("#root").prepend(aside);
	$("#root").prepend(header);

	function show_hide_password(target) {
		var input = document.getElementById('password-input');
		if (input.getAttribute('type') == 'password') {
			target.classList.add('view');
			input.setAttribute('type', 'text');
		} else {
			target.classList.remove('view');
			input.setAttribute('type', 'password');
		}
		return false;
	}
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
		const profile = document.querySelector('.profile-block');
		const schedule = document.querySelector('.schedule-block');
		const subjectsBlock = document.querySelector('.subjects-block');
		const courseBlock = document.querySelector('.course-block');
		const salaryBlock = document.querySelector('.salary-block');

		profile.style.display = "block";
		schedule.style.display = "none";
		subjectsBlock.style.display = "none";
		courseBlock.style.display = "none";
		salaryBlock.style.display = "none";
	}
	// работа табов
	function tabsFunc() {
		const profile = document.querySelector('.profile-block');
		const schedule = document.querySelector('.schedule-block');
		const subjectsBlock = document.querySelector('.subjects-block');
		const courseBlock = document.querySelector('.course-block');
		const salaryBlock = document.querySelector('.salary-block');
		let tabs = document.getElementsByClassName("tabs__item");
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener("click", function (e) {


				for (let n = 0; n < tabs.length; n++) {
					tabs[n].classList.remove("tabs__item--active");
				}
				e.target.classList.add("tabs__item--active");
				if (e.target.classList.contains("profile")) {
					profile.style.display = "block";
					schedule.style.display = "none";
					subjectsBlock.style.display = "none";
					courseBlock.style.display = "none";
					salaryBlock.style.display = "none";
				}
				else if (e.target.classList.contains("schedule")) {
					profile.style.display = "none";
					schedule.style.display = "block";
					subjectsBlock.style.display = "none";
					courseBlock.style.display = "none";
					salaryBlock.style.display = "none";
				}
				else if (e.target.classList.contains("subjects")) {
					profile.style.display = "none";
					schedule.style.display = "none";
					subjectsBlock.style.display = "block";
					courseBlock.style.display = "none";
					salaryBlock.style.display = "none";
				}
				else if (e.target.classList.contains("course")) {
					profile.style.display = "none";
					schedule.style.display = "none";
					subjectsBlock.style.display = "none";
					courseBlock.style.display = "block";
					salaryBlock.style.display = "none";
				}
				else if (e.target.classList.contains("salary")) {
					profile.style.display = "none";
					schedule.style.display = "none";
					subjectsBlock.style.display = "none";
					courseBlock.style.display = "none";
					salaryBlock.style.display = "block";
				}
			})
		}
	}

	
	dropDownFunc();
	burger();
	defaultChange();
	tabsFunc();
});