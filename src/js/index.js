import '../scss/index.scss';

import header from '../components/header.html';
import aside from '../components/aside.html';

import sched from '../components/schedule.html';
import subjects from '../components/subjects.html';
import course from '../components/course.html';
import salary from '../components/salary.html';

$(() => {
	$("#root").prepend(aside);
	$("#root").prepend(header);
	$(".schedule-block").prepend(sched);
	$(".subjects-block").prepend(subjects);
	$(".course-block").prepend(course);
	$(".salary-block").prepend(salary);

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
	$('.tabs__item').click(function() {
		var id = $(this).attr('data-tab'),
			content = $('.tab-content[data-tab="'+ id +'"]');
		
		$('.tabs__item.tabs__item--active').removeClass('tabs__item--active'); // 1
		$(this).addClass('tabs__item--active'); // 2
		
		$('.tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	 });
	
	dropDownFunc();
	burger();
});