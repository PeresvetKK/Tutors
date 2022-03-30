import { doc } from 'prettier';
import '../scss/contacts.scss';
$(() => {
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
	$('.tabs__item').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.tab-content[data-tab="' + id + '"]');

		$('.tabs__item.tabs__item--active').removeClass('tabs__item--active'); // 1
		$(this).addClass('tabs__item--active'); // 2

		$('.tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
	function dropDownAside(){
		let item = document.getElementsByClassName('menu__box--dropdown');
		for(let i = 0; i < item.length; i++){
			item[i].addEventListener('click', function(){
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
	dropDownAside();
});