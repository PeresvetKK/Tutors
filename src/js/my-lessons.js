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

	$('.tabs__item').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.tab-content[data-tab="' + id + '"]');

		$('.tabs__item.tabs__item--active').removeClass('tabs__item--active'); // 1
		$(this).addClass('tabs__item--active'); // 2

		$('.tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});

	dropDownFunc();
	burger();
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
});