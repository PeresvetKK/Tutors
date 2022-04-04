export function dropDownFunc() {
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
export function burger() {
    let burger = document.querySelector(".burger");
    burger.addEventListener("click", function () {
        let aside = document.querySelector(".aside");
        let bod = document.querySelector('.scroll');

        aside.classList.toggle("aside--active");
        bod.classList.toggle("fixed-scroll");
        burger.classList.toggle("burger-active");
    });
}
export function tabs() {
    $('.tabs__item').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.tab-content[data-tab="' + id + '"]');

        $('.tabs__item.tabs__item--active').removeClass('tabs__item--active');
        $(this).addClass('tabs__item--active');

        $('.tab-content.active').removeClass('active');
        content.addClass('active');
    });
}
export function editCourse() {
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
export function changeBtn() {
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
export function profileDropDown() {
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
export function tableDropdown() {
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
export function dropDownAside() {
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
export function mainDropdown() {
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
export function modal() {
    let btn = document.getElementsByClassName('btn__add--M');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let mainbody = document.querySelector('.scroll');
            // mainbody.classList.toggle('fixed-scroll');
            let modal = document.querySelector('.modal-add');
            let close = modal.querySelector('.modal__inner-svg');
            modal.classList.toggle('active__modal');
            close.addEventListener('click', function () {
                modal.classList.remove('active__modal');
            });
        });
    }
}
export function sortTable() {
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
export function filter() {
    let filterBtn = document.querySelector('.filter__btn');
    filterBtn.addEventListener('click', function () {
        let filter = document.querySelector('.filter');
        let close = filter.querySelector('.filter__close');
        // let bod = document.querySelector('.scroll');

        filter.classList.toggle('active');
        // bod.classList.add('fixed-scroll');
        close.addEventListener('click', function () {
            filter.classList.remove('active');
            // bod.classList.remove('fixed-scroll');
        });
    });
}
export function tableLoader(){
    let showLoader = document.getElementsByClassName('row-counter__pages');
    for(let i = 0; i < showLoader.length; i++){
        showLoader[i].addEventListener('click', function(){
            let parent = this.parentElement.parentElement.parentElement;
            let loader = parent.querySelector('.tbody');
            loader.classList.toggle('loader-table');
            let progressLoader = parent.querySelector('.loader-progress');
            progressLoader.classList.toggle('active');
        });
    }
}