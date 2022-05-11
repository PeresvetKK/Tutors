import '../scss/news.scss';
import {setDate, modal, openNotify, dropDownFunc, burger, dropDownAside, mainDropdown} from '../vendors/script';
$(() => {
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
	modal();
	openNotify();
    goBack();
    editCourse();
	mainDropdown();
	dropDownFunc();
	burger();
	dropDownAside();
	setDate('date1');
});