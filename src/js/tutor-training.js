import '../scss/tutor-training.scss';
import {openExit, sendScroll, checkKey, setDate, setTime, modal, openNotify, dropDownFunc} from '../vendors/script';
$(() => {
	
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
	function editCourse() {
		let edit = document.getElementsByClassName("edit");
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let myLessons = document.querySelector("#my-lessons");
				let myLessonsEdit = document.querySelector("#my-lessons--edit");

				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");
				
			});
		}
	}
	function goBack(){
		let edit = document.querySelector(".back-arrow");
			edit.addEventListener("click", function () {
				let myLessons = document.querySelector("#my-lessons");
				let myLessonsEdit = document.querySelector("#my-lessons--edit");
				myLessons.classList.toggle("hide");
				myLessonsEdit.classList.toggle("active");	
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
	const accrodeon = () =>{ // делаем замыкание
		// выбираем все li
		const chItems = document.querySelectorAll('.characteristics__item');
		
		// forEach для перебора всех li
		chItems.forEach( item =>{
			const chButton = item.querySelector('.characteristics__title');
			const chContent = item.querySelector('.characteristics__description');
	
			// при клике на кнопку контент появляется и закрывается. Плавность получается засчёт высоты блока(scrollHeight)
			chButton.addEventListener('click', ()=>{
				if (chContent.classList.contains('open')){
					chContent.style.height = '';
				}else{
					chContent.style.height = chContent.scrollHeight + 'px';
				}
				chButton.classList.toggle('active');
				chContent.classList.toggle('open');
			});
		});
	};
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
	modal();
	openNotify();
	mainDropdown();
	accrodeon();
	dropDownFunc();
	burger();
	editCourse();
	goBack();
	dropDownAside();
	setDate('date1');
	setTime('settime1');
	sendScroll();
	openExit();
});