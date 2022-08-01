import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import 'air-datepicker/air-datepicker.js'
import 'clockpicker/src/clockpicker.js';
import 'clockpicker/src/clockpicker.css';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export function dropDownFunc() {
    let dropDown = document.getElementsByClassName('container__dropdown');
    for(let i = 0; i < dropDown.length; i++){
        dropDown[i].addEventListener('click', function(){
            let item = dropDown[i].querySelector('.dropdown');
            let arrow = dropDown[i].querySelector('.dropdown-arrow');
            item.classList.toggle('dropdown-active');
            arrow.classList.toggle('rotate180');
            // let itemsText = dropDown[i].getElementsByClassName('roles__inner');
            // for(let i = 0; i < itemsText.length; i++){
            //     itemsText[i].addEventListener('click', function(){
            //         itemsText[0].textContent = this.textContent;
            //     });
            // }
        });
    }
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
            let mainLessons = document.querySelector("#main-lessons--edit");
            let information = document.querySelector("#information");
            let open = document.querySelector("#open");

            myLessons.classList.toggle("hide");
            myLessonsEdit.classList.toggle("active");
            open.classList.add("active");
            information.classList.add('tabs__item--active');
        });
    }
}
export function editCourseTwo(pencel, open) {
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
            let openBlock = openWrapper.getElementsByClassName('openBlock')

            openWrapper.classList.add("active");
            for(let i = 0; i < openBlock.length; i++){
                openBlock[i].classList.add('active');
            }
            if(openBt){
                openBt.classList.add('tabs__item--active');
            }
        });
    }
}
// export function editLessons(){
//     let edit = document.getElementsByClassName("edit-block-cell__inner");
//     for (let i = 0; i < edit.length; i++) {
//         edit[i].addEventListener("click", function () {
//             let myLessons = document.querySelector("#my-lessons--edit");
//             let myLessonsEdit = document.querySelector("#main-lessons--edit");
//             let information = document.querySelector("#information");
//             let open = document.querySelector("#open-lesson");

//             myLessons.classList.toggle("active");
//             myLessonsEdit.classList.toggle("active");
//             open.classList.add("active");
//             information.classList.add('tabs__item--active');
//         });
//     }
// }
export function setDate(element){
    if (document.documentElement.lang === "en") {
        var langs = {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'HH:mm',
            firstDay: 1
        }
    } 
    else if (document.documentElement.lang === "ru") {
        var langs = {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
            daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            today: 'Сегодня',
            clear: 'Очистить',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'HH:mm',
            firstDay: 1
        }
    }
    else if (document.documentElement.lang === "cs") {
        var langs = {
            days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            daysShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
            today: 'dneska',
            clear: 'vyčistit',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'HH:mm',
            firstDay: 0
        }
    }
    
    let elem = document.querySelector(`.${element}`);
    new AirDatepicker(`.${element}`, {
        locale: langs,
        onSelect: function (dataText, inst) {
            var dateAsString = dataText.formattedDate;
            var input = elem;
            input.value = dateAsString;
            input.setAttribute('data-quantity', input.value);
            if(dataText.date == undefined){
                input.value = ""
                input.setAttribute('data-quantity', input.value);
            }
        },
    });
    
    var input = elem;
    
    input.addEventListener('input', function () {
        input.setAttribute('data-quantity', input.value);
    });

}
export function setTime(element){
    $('.clockpicker').clockpicker()
        .find('input').change(function () {
            var input = document.querySelector(`.${element}`);
            // console.log(input);
            input.value = this.value;
            input.setAttribute('data-time', input.value);
        });
    $(`${element}`).clockpicker({
        autoclose: true,
        afterDone: function () {
            var closeTime = element.querySelector('.clockpicker-popover');
            closeTime.style.display = "none";
        }
    });
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
export function timeSlider(element) {
    let slider = document.querySelector(element);
    let leftValue = slider.parentElement.querySelector('.leftvalue');
    let rightValue = slider.parentElement.querySelector('.rightvalue');

    // 0 = initial minutes from start of day
    // 1440 = maximum minutes in a day
    // step: 30 = amount of minutes to step by. 
    let initialStartMinute = 0;
    let initialEndMinute = 1440;
    let step = 15;

    slider = noUiSlider.create(slider, {
        start: [initialStartMinute, initialEndMinute],
        connect: true,
        step: step,
        range: {
            'min': initialStartMinute,
            'max': initialEndMinute
        }
    });

    const convertToHour = value => Math.floor(value / 60);

    const convertToMinute = (value, hour) => value - hour * 60;

    const formatHoursAndMinutes = (hours, minutes) => {
        if (hours.toString().length == 1) {
            hours = '0' + hours;
        }

        if (minutes.toString().length == 1) {
            minutes = '0' + minutes;
        }

        return hours + ':' + minutes;
    };

    const convertValuesToTime = (values, handle) => {
        let hours = 0;
        let minutes = 0;

        if (handle === 0) {
            hours = convertToHour(values[0]);
            minutes = convertToMinute(values[0], hours);
            leftValue.innerHTML = formatHoursAndMinutes(hours, minutes);
            return;
        };

        hours = convertToHour(values[1]);
        minutes = convertToMinute(values[1], hours);
        rightValue.innerHTML = formatHoursAndMinutes(hours, minutes);
    };

    slider.on('update', (values, handle) => convertValuesToTime(values, handle));
}
export function modal() {
    let btn = document.getElementsByClassName('btn__task modal-active');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let mainbody = document.querySelector('.scroll');
            mainbody.classList.add('fixed-scroll');
            let modal = document.querySelector('.modal-add');
            let close = modal.querySelector('.modal__inner-svg');
            modal.classList.toggle('active__modal');
            close.addEventListener('click', function () {
                modal.classList.remove('active__modal');
                mainbody.classList.remove('fixed-scroll');
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
            this.classList.toggle('rotate180');
        });
    }
}
export function filter() {
    let filterBtn = document.getElementsByClassName('filter__btn');
    for(let i = 0; i < filterBtn.length; i++){
        filterBtn[i].addEventListener('click', function () {
            let filter = document.getElementsByClassName('filter');
            let close = document.getElementsByClassName('filter__close');
            // let bod = document.querySelector('.scroll');
            for(let i = 0; i < filter.length; i++){
                filter[i].classList.toggle('active');
            }
            for(let i = 0; i < close.length; i++){
                close[i].addEventListener('click', function () {
                    filter[i].classList.remove('active');
                    // bod.classList.remove('fixed-scroll');
                });
            }
        });
    }
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
export function openNotify(){
    $('.notify').on('click', function(){
        let body = document.querySelector('#root');
        
        let notify = document.querySelector('.notify-block');
        notify.classList.toggle('active');

        if(notify.classList.contains('active')){
            body.classList.add('fixed-scroll__mobile');
        }else{
            if(body.classList.contains('fixed-scroll__mobile'))
            body.classList.remove('fixed-scroll__mobile');
        }
    })
    $('.notify-block__close').on('click', function(){
        let body = document.querySelector('#root');
        let notify = document.querySelector('.notify-block');

        notify.classList.toggle('active');
        if(body.classList.contains('fixed-scroll__mobile')){
            body.classList.remove('fixed-scroll__mobile');
        }
    })
}
export function searchResult(){
    $('.input__search').on('change', function(){
        let result = document.querySelector('.search-result');
        result.classList.toggle('active');
        let closeResult = document.querySelector('.close-result');
        closeResult.classList.add('active');
    })
    $('.close-result').on('click', function(){
        let result = document.querySelector('.search-result');
        result.classList.toggle('active');
        let closeResult = document.querySelector('.close-result');
        closeResult.classList.toggle('active');
        $('.input__search').val('');
    })
}
export function pushClose(){
    $('.push__close').on('click', function(){
        // this.parentElement.classList.add('hide');
        this.parentElement.style.display="none";
    })
}
export function breadsDrop(){
    
}
export function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top , left: rect.left}
}
export function longMessage(){
    $('#root').on('click', function(e){
        if(! e.target.classList.contains('table-comment')){
            let hideAllComment = document.getElementsByClassName('table-comment__full');
            if(hideAllComment){
            for(let i = 0; i < hideAllComment.length; i++){
                hideAllComment[i].classList.remove('table-comment__full--active');
            }
            }
        }
    });
    let miniComment = document.getElementsByClassName('table-comment');
    for(let i = 0; i < miniComment.length; i++){
        let item = miniComment[i];
        item.addEventListener('click', function(e){
            let hideAllComment = document.getElementsByClassName('table-comment__full');
            for(let i = 0; i < hideAllComment.length; i++){
                hideAllComment[i].classList.remove('table-comment__full--active');
            }
            let input = e.target;
            var topHeight = offset(input);
            let longComment = e.target.parentElement.querySelector('.table-comment__full');

            longComment.classList.toggle('table-comment__full--active');
            longComment.style.top = `${topHeight.top - 13}px`;
        });
        // item.addEventListener('mouseover', function(e){
        //     let input = e.target;
        //     var topHeight = offset(input);
        //     let longComment = e.target.parentElement.querySelector('.table-comment__full');
        //     longComment.classList.toggle('table-comment__full--active');
        //     longComment.style.top = `${topHeight.top - 13}px`;
        // });
        // item.addEventListener('mouseout', function(e){
        //     let input = e.target;
        //     var topHeight = offset(input);
        //     let longComment = e.target.parentElement.querySelector('.table-comment__full');
        //     longComment.classList.toggle('table-comment__full--active');
        //     longComment.style.top = `${topHeight.top - 13}px`;
        // });
    }
    // $(window).on('scroll', function(){
    //     if($('table-comment__full')){

    //     console.log($(window).scrollTop() - $('.table-comment__full').offset().top);
    //     }
    // });
    // $(window).on("scroll", function() {
    //     const header_bottom = document.getElementsByClassName('table-comment__full');
    //     if(header_bottom){
    //     for(let i = 0; i < header_bottom.length; i++){
            
            
    //         // let scrollHeights = window.pageYOffset;
    //         // let heightElement = header_bottom[i].clientTop;
    //         // console.log(scrollHeights + " scrollHeight");
    //         // console.log(heightElement + " elementHeight");
    //             // if (header_bottom[i].classList.contains('table-comment__full--active')) {
    //             //   header_bottom[i].classList.toggle('table-comment__full--active');
    //             //   console.log('+');
    //             // }
            
    //     }
    //   })
}
export function dinamocBtn(){
    let bod = document.querySelector('#root');
    bod.addEventListener('click', function(e){
        if(e.target.classList.contains('cell__inner')){
            let input = e.target;
            var topHeight = offset(input);
            let btn = input.querySelector('.breads-drop');
            btn.classList.toggle('active');
            var par = document.querySelector('.cell__inner');
            var parHeight = offset(par);
            btn.style.top = `${topHeight.top - 13}px`;
                // let bod = document.querySelector('#root');
                // bod.classList.add('fixed-scroll');
                // btn.style.visibility="visible";
        }
        else if(e.target.parentElement.classList.contains('cell__inner')){
            let input = e.target.parentElement;
            var topHeight = offset(input);
            let btn = input.querySelector('.breads-drop');
            btn.classList.toggle('active');
            var par = document.querySelector('.cell__inner');
            var parHeight = offset(par);
            btn.style.top = `${topHeight.top - 13}px`;
        }
        else if(e.target.parentElement.parentElement.classList.contains('cell__inner')){
            let input = e.target.parentElement.parentElement;
            var topHeight = offset(input);
            let btn = input.querySelector('.breads-drop');
            btn.classList.toggle('active');
            var par = document.querySelector('.cell__inner');
            var parHeight = offset(par);
            btn.style.top = `${topHeight.top - 13}px`;
        }
        else{
            let inputs = document.getElementsByClassName('breads-drop');
            for(let i = 0; i < inputs.length; i++){
                inputs[i].classList.remove('active');
            }
        }
    });
}
export function stars(input){
    let inputs = document.querySelector(input);
    console.log(inputs);
    let count = inputs.value;
    for(let i = 0; i <= count; i++){
        let item = inputs.nextSiblingElement.getElementsByClassName('stars__item');
        for(let i = 0; i <= count; i++){
            item[i].classList.toggle('stars__item--active');
        }
    }
}
export function checkKey(e, form) {
    if (e.ctrlKey && e.keyCode == 13){
        form.submit();
    }
}
export function sendScroll(){
    let send = document.getElementsByClassName('send-svg');
    for(let i = 0; i < send.length; i++){
        send[i].addEventListener('click', function(){
            let chat = send[i].parentElement.parentElement.parentElement.previousElementSibling;
            let scrollHeight = Math.max(chat.scrollHeight, chat.offsetHeight, chat.clientHeight);
            chat.scrollBy(0, scrollHeight);
        });
    }
}
export function openExit(){
    let box = document.querySelector('.open-exit');
    box.addEventListener('click', function(){
        let ex = document.querySelector('.exit');
        ex.classList.toggle('hide');
    })
}
export function hidePassword(){
    let eye = document.getElementsByClassName('password-control');
    for(let i = 0; i < eye.length; i++){
        let item = eye[i];
        item.addEventListener('click', function(e){
            e.preventDefault();
            let parent = item.parentElement;
            let input = parent.querySelector('.form__input');
            input.classList.toggle('view');
            if($(input).attr('type') == 'password'){
                $(input).attr('type', 'text');
            } 
            else{
                $(input).attr('type', 'password');
            }
        });
    }
}   
export function yesNo(){
    $('#open-next').on('click', function(){
        let hidedBlock = document.querySelector('#next-block');
        hidedBlock.classList.add('active');
    })
    $('#dont-open').on('click', function(){
        let hidedBlock = document.querySelector('#next-block');
        hidedBlock.classList.remove('active');
    })
}
export function scrollDown() {
    $('.tabs__item').on('click', (e) => {
        if(e.target.hasAttribute('data-scroll')){
            var windowCoords = document.documentElement.clientHeight;
            window.scrollTo(0, windowCoords)
        }
    })
  }
