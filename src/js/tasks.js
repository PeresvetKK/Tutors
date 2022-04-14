import '../scss/tasks.scss';
import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'

import {setDateTime, tableLoader, modal, sortTable, mainDropdown, dropDownFunc, burger, tabs, changeBtn, tableDropdown, dropDownAside} from '../vendors/script';
$(() => {

    function editCourse(){
        $('.complite-task').on('click', function(){
            let complite = document.querySelector('.complite-modal');
            complite.classList.toggle('active__modal');
            let scroll = document.querySelector('.scroll');
            scroll.classList.toggle('fixed-scroll--mobile');
            $('.modal__inner-svg').on('click', function(){
                complite.classList.remove('active__modal');
                scroll.classList.remove('fixed-scroll--mobile');
            })
        })
    }
    editCourse();
	tableLoader();
	modal();
	sortTable();
	mainDropdown();
	dropDownFunc();
	burger();
	tabs();
	changeBtn();
	tableDropdown();
	dropDownAside();
	setDateTime();
});