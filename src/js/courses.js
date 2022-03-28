import '../scss/courses.scss';

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
	function tableDropdown(){
		let containerDropDown = document.querySelector('#root');

		containerDropDown.addEventListener('click', (event) => {
			if (event.target.classList.contains('row-counter__select') || event.target.classList.contains('row-counter__icon')) {
				let parent = event.target.parentElement;
				let dropDown = parent.querySelector('.row-counter__dropdown');
				dropDown.classList.toggle('active');
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
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
});