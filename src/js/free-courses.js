import '../scss/free-courses.scss';
import {dinamocBtn, offset, breadsDrop, searchResult, mainDropdown, setDate, setTime, modal, openNotify, tableLoader, sortTable, dropDownFunc, burger, tabs, editCourse, tableDropdown, dropDownAside, filter} from '../vendors/script';
$(() => {

	let edit = document.getElementsByClassName("breads");
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener("click", function () {
            let myLessons = document.querySelector("#my-lessons");
            let freeCourses = document.querySelector("#free-courses--edit");

            myLessons.classList.toggle("hide");
            freeCourses.classList.toggle("active");
        });
    }
	modal();
	openNotify();
	filter();
	sortTable();
	tabs();
	dropDownFunc();
	burger();
	tableDropdown();
	dropDownAside();
	tableLoader();
	mainDropdown();
	setDate('date1');
	setDate('date2');
	setTime('settime1');
	searchResult();
	breadsDrop();
	dinamocBtn();
	function editCourse(pencel, open) {
		let edit = document.getElementsByClassName(pencel);
		for (let i = 0; i < edit.length; i++) {
			edit[i].addEventListener("click", function () {
				let child = document.getElementsByClassName('main__header');
				for(let i = 0; i < child.length; i++){
					let item = child[i].parentElement;
					item.classList.remove('active');
				}
				let openWrapper = document.querySelector(open);
				let openBt = openWrapper.querySelector('.openButton');
				let openBlock = openWrapper.querySelector('.openBlock')

				openWrapper.classList.add("active");
				openBlock.classList.add("active");
				if(openBt){
					openBt.classList.add('tabs__item--active');
				}
			});
		}
	}
	editCourse("course-table__id", "#my-lessons--edit");
	editCourse("open-block", "#free-courses--edit");
	editCourse("to-lessons", "#estimation");
	function favourite(){
		$('.favourites').on('click', function(){
			this.classList.toggle('favourites--active');
		})
	}
	favourite();
});