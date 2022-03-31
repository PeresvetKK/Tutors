import '../scss/free-lectures.scss';

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

    let filterBtn = document.querySelector('.filter__btn');
    filterBtn.addEventListener('click', function(){
        let filter = document.querySelector('.filter');
        let close = filter.querySelector('.filter__close');
        // let bod = document.querySelector('.scroll');

        filter.classList.toggle('active');
        // bod.classList.add('fixed-scroll');
        close.addEventListener('click', function(){
            filter.classList.remove('active');
            // bod.classList.remove('fixed-scroll');
        });
    });
	function sortTable() {
		let tableSort = document.getElementsByClassName('table-swap');
		for (let i = 0; i < tableSort.length; i++) {
			tableSort[i].addEventListener('click', function () {
				for (let i = 0; i < tableSort.length; i++) {
					tableSort[i].classList.remove('active-table--sort');
				}
				this.classList.toggle('active-table--sort');
			});
		}
	}
	sortTable();
	tabs();
	editCourse();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
});