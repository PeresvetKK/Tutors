import { doc } from 'prettier';
import '../scss/other.scss';
import {dropDownFunc, burger, dropDownAside, mainDropdown} from '../vendors/script';
$(() => {
	$('.tabs__item').click(function () {
		var id = $(this).attr('data-tab'),
			content = $('.tab-content[data-tab="' + id + '"]');

		$('.tabs__item.tabs__item--active').removeClass('tabs__item--active'); // 1
		$(this).addClass('tabs__item--active'); // 2

		$('.tab-content.active').removeClass('active'); // 3
		content.addClass('active'); // 4
	});
	mainDropdown();
	dropDownFunc();
	burger();
	dropDownAside();
});