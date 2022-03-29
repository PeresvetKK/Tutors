import '../scss/index.scss';

import header from '../components/header.html';
import aside from '../components/aside.html';


$(() => {
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
	function tabs() {
		$('.tabs__item').click(function () {
			var id = $(this).attr('data-tab'),
				content = $('.tab-content[data-tab="' + id + '"]');

			$('.tabs__item.tabs__item--active').removeClass('tabs__item--active');
			$(this).addClass('tabs__item--active');

			$('.tab-content.active').removeClass('active');
			content.addClass('active');
		});
	}
	function editCourse() {
		let edit = document.getElementsByClassName("course-table__id");
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
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
	}
	function changeBtn() {
		// let btn = document.querySelector('.btn__save--L');
		// if(btn.classList.contains("btn__disabled--L")){
		// 	btn.addEventListener('click', function(e){
		// 		e.preventDefault();
		// 	});
		// }else{
		// 	btn.defaultPrevented;
		// }
		let inputForm = document.getElementsByClassName('form__input');
		for (let i = 0; i < inputForm.length; i++) {
			inputForm[i].addEventListener('change', function () {
				let btn = document.querySelector('.btn__save--L');
				btn.classList.remove('btn__disabled--L');
			})
		}
	}
	function profileDropDown() {
		let containerDropDown = document.querySelector('.drop-status');
		let profileDropDown = document.querySelector('.profile-dropdown');
		let profileArrow = document.querySelector('.status-arrow');
		containerDropDown.addEventListener('click', () => {
			profileDropDown.classList.toggle('profile-dropdown--active');
			profileArrow.classList.toggle("rotate180");
		});
		let itemDropDown = document.getElementsByClassName('profile-dropdow__item');
		let textStatus = document.querySelector('.drop-status__text');
		for (let i = 0; i < itemDropDown.length; i++) {
			itemDropDown[i].addEventListener('click', function (e) {
				let eveText = e.target.textContent;
				textStatus.textContent = eveText;
				profileDropDown.classList.toggle('profile-dropdown--active');
				if (e.target.classList.contains('noactive')) {
					containerDropDown.classList.add('profile-dropdow--noactive');
				} else {
					containerDropDown.classList.remove('profile-dropdow--noactive');
				}
				profileArrow.classList.toggle("rotate180");
			});
		}
	}
	function tableDropdown() {
		let containerDropDown = document.querySelector('#root');

		containerDropDown.addEventListener('click', (event) => {
			if (event.target.classList.contains('row-counter__select') || event.target.classList.contains('row-counter__icon')) {
				let parent = event.target.parentElement;
				let dropDown = parent.querySelector('.row-counter__dropdown');
				dropDown.classList.toggle('active');
			}
		});
	}
	function dropDownAside() {
		let item = document.getElementsByClassName('menu__box--dropdown');
		for (let i = 0; i < item.length; i++) {
			item[i].addEventListener('click', function () {
				let arrow = item[i].querySelector(".menu__link--arrow");
				let dropdown = item[i].querySelector('.aside__dropdown');

				dropdown.classList.toggle('aside__dropdown--active');
				arrow.classList.toggle('rotate180');
			});
		}
	}
	function mainDropdown() {
		let tabsDropdown = document.getElementsByClassName('form__box--select');
		for (let i = 0; i < tabsDropdown.length; i++) {
			tabsDropdown[i].addEventListener('click', function () {
				let parent = this.parentElement;
				let tabs = parent.querySelector('.main__tabs');
				tabs.classList.toggle('tabs-active');

				let items = parent.getElementsByClassName('tabs__item');
				for (let i = 0; i < items.length; i++) {
					items[i].addEventListener('click', function () {
						let textDropdown = parent.querySelector('.category__text');
						textDropdown.textContent = this.textContent;
						let tabs = parent.querySelector('.main__tabs');
						tabs.classList.remove('tabs-active');
					});
				}
			});
		}
	}
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