import '../scss/my-lessons.scss';

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
	function tableDropdown() {
		let containerDropDown = document.querySelector('#root');

		containerDropDown.addEventListener('click', (event) => {
			if (event.target.classList.contains('row-counter__select') || event.target.classList.contains('row-counter__icon')) {
				let parent = event.target.parentElement;
				
				let dropDown = parent.querySelector('.row-counter__dropdown');
				dropDown.classList.toggle('active');
				
				let text = parent.querySelector('.row-counter__select');
				let item = parent.getElementsByClassName('row-counter__dropdown--item');
				for (let i = 0; i < item.length; i++){
					item[i].addEventListener('click', function(){
						text.textContent = this.textContent;
						dropDown.classList.remove('active');
					});
				}
			}else{
				let drop = document.getElementsByClassName('row-counter__dropdown');
				for(let i = 0; i < drop.length; i++){
					drop[i].classList.remove('active');
				}
			}
		});
	}
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
	tableDropdown();
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
});