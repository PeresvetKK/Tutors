<!-- <div class="bx-hdr-profile">
	 <? if (!$USER->IsAuthorized()) : ?>
<button class="nav__basket flexbox profilee nav__barUserAuthItem-login auth-sigIn">
		<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00016 9.83333C11.5738 9.83333 13.6668 7.74033 13.6668 5.16667C13.6668 2.593 11.5738 0.5 9.00016 0.5C6.4265 0.5 4.3335 2.593 4.3335 5.16667C4.3335 7.74033 6.4265 9.83333 9.00016 9.83333Z" fill="white"></path>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 21.5003C16.6453 21.5003 17.1668 20.9777 17.1668 20.3337C17.1668 15.8303 13.5023 12.167 9.00016 12.167C4.498 12.167 0.833496 15.8303 0.833496 20.3337C0.833496 20.9777 1.355 21.5003 2.00016 21.5003H16.0002Z" fill="white"></path>
		</svg>
	</button>	
 <? else : ?> 
	<a href="/personal/" class="nav__barLink nav__barUserAuthItem"><button class="nav__basket flexbox profilee nav__barUserAuthItem-login auth-sigIn">
		<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00016 9.83333C11.5738 9.83333 13.6668 7.74033 13.6668 5.16667C13.6668 2.593 11.5738 0.5 9.00016 0.5C6.4265 0.5 4.3335 2.593 4.3335 5.16667C4.3335 7.74033 6.4265 9.83333 9.00016 9.83333Z" fill="white"></path>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 21.5003C16.6453 21.5003 17.1668 20.9777 17.1668 20.3337C17.1668 15.8303 13.5023 12.167 9.00016 12.167C4.498 12.167 0.833496 15.8303 0.833496 20.3337C0.833496 20.9777 1.355 21.5003 2.00016 21.5003H16.0002Z" fill="white"></path>
		</svg>
	</button>
	</a>	

			 
	<? endif ?>
</div> -->

<a href="/personal/" class="nav__barLink nav__barUserAuthItem nav__basket flexbox profilee auth-sigIn">
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00016 9.83333C11.5738 9.83333 13.6668 7.74033 13.6668 5.16667C13.6668 2.593 11.5738 0.5 9.00016 0.5C6.4265 0.5 4.3335 2.593 4.3335 5.16667C4.3335 7.74033 6.4265 9.83333 9.00016 9.83333Z" fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 21.5003C16.6453 21.5003 17.1668 20.9777 17.1668 20.3337C17.1668 15.8303 13.5023 12.167 9.00016 12.167C4.498 12.167 0.833496 15.8303 0.833496 20.3337C0.833496 20.9777 1.355 21.5003 2.00016 21.5003H16.0002Z" fill="white"></path>
    </svg>
</a>




<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main\Localization\Loc;

if (strlen($arParams["MAIN_CHAIN_NAME"]) > 0)
{
	$APPLICATION->AddChainItem(htmlspecialcharsbx($arParams["MAIN_CHAIN_NAME"]), $arResult['SEF_FOLDER']);
}


$theme = Bitrix\Main\Config\Option::get("main", "wizard_eshop_bootstrap_theme_id", "blue", SITE_ID);
$availablePages = array();

if (!$USER->IsAuthorized() || $arResult['SHOW_LOGIN_FORM'] === 'Y')
{
    if ($arParams['USE_PRIVATE_PAGE_TO_AUTH'] !== 'Y')
    {
        ob_start();
        $APPLICATION->AuthForm('', false, false, 'N', false);
        $authForm = ob_get_clean();
    }
    else
    {
        if ($arResult['SHOW_FORGOT_PASSWORD_FORM'] === 'Y')
        {
            ob_start();
            $APPLICATION->IncludeComponent(
                'bitrix:main.auth.forgotpasswd',
                '.default',
                array(
                    'AUTH_AUTH_URL' => $arResult['PATH_TO_PRIVATE'],
//					'AUTH_REGISTER_URL' => 'register.php',
                ),
                false
            );
            $authForm = ob_get_clean();
        }
        elseif($arResult['SHOW_CHANGE_PASSWORD_FORM'] === 'Y')
        {
            ob_start();
            $APPLICATION->IncludeComponent(
                'bitrix:main.auth.changepasswd',
                '.default',
                array(
                    'AUTH_AUTH_URL' => $arResult['PATH_TO_PRIVATE'],
//					'AUTH_REGISTER_URL' => 'register.php',
                ),
                false
            );
            $authForm = ob_get_clean();
        }
        else
        {
            ob_start();
            $APPLICATION->IncludeComponent(
                'bitrix:main.auth.form',
                '.default',
                array(
                    'AUTH_FORGOT_PASSWORD_URL' => $arResult['PATH_TO_PASSWORD_RESTORE'],
//					'AUTH_REGISTER_URL' => 'register.php',
                    'AUTH_SUCCESS_URL' => $arResult['AUTH_SUCCESS_URL'],
                    'DISABLE_SOCSERV_AUTH' => $arParams['DISABLE_SOCSERV_AUTH'],
                ),
                false
            );
            $authForm = ob_get_clean();
        }
    }

    ?>

    <div class="row">
        <?
        if ($arParams['USE_PRIVATE_PAGE_TO_AUTH'] !== 'Y')
        {
            ?>
            <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div class="alert alert-danger"><?=GetMessage("SPS_ACCESS_DENIED")?></div>
            </div>
            <?
        }
        ?>
        <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <?=$authForm?>
        </div>
    </div>
    <?
}
else{
if ($arParams['SHOW_ORDER_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_ORDERS'],
		"name" => Loc::getMessage("SPS_ORDER_PAGE_NAME"),
		"icon" => '<i class="fa fa-calculator"></i>'
	);
}

if ($arParams['SHOW_ACCOUNT_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_ACCOUNT'],
		"name" => Loc::getMessage("SPS_ACCOUNT_PAGE_NAME"),
		"icon" => '<i class="fa fa-credit-card"></i>'
	);
}

if ($arParams['SHOW_PRIVATE_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_PRIVATE'],
		"name" => Loc::getMessage("SPS_PERSONAL_PAGE_NAME"),
		"icon" => '<i class="fa fa-user-secret"></i>'
	);
}

if ($arParams['SHOW_ORDER_PAGE'] === 'Y')
{

	$delimeter = ($arParams['SEF_MODE'] === 'Y') ? "?" : "&";
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_ORDERS'].$delimeter."filter_history=Y",
		"name" => Loc::getMessage("SPS_ORDER_PAGE_HISTORY"),
		"icon" => '<i class="fa fa-list-alt"></i>'
	);
}

if ($arParams['SHOW_PROFILE_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_PROFILE'],
		"name" => Loc::getMessage("SPS_PROFILE_PAGE_NAME"),
		"icon" => '<i class="fa fa-list-ol"></i>'
	);
}

if ($arParams['SHOW_BASKET_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arParams['PATH_TO_BASKET'],
		"name" => Loc::getMessage("SPS_BASKET_PAGE_NAME"),
		"icon" => '<i class="fa fa-shopping-cart"></i>'
	);
}

if ($arParams['SHOW_SUBSCRIBE_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arResult['PATH_TO_SUBSCRIBE'],
		"name" => Loc::getMessage("SPS_SUBSCRIBE_PAGE_NAME"),
		"icon" => '<i class="fa fa-envelope"></i>'
	);
}

if ($arParams['SHOW_CONTACT_PAGE'] === 'Y')
{
	$availablePages[] = array(
		"path" => $arParams['PATH_TO_CONTACT'],
		"name" => Loc::getMessage("SPS_CONTACT_PAGE_NAME"),
		"icon" => '<i class="fa fa-info-circle"></i>'
	);
}

$customPagesList = CUtil::JsObjectToPhp($arParams['~CUSTOM_PAGES']);
if ($customPagesList)
{
	foreach ($customPagesList as $page)
	{
		$availablePages[] = array(
			"path" => $page[0],
			"name" => $page[1],
			"icon" => (strlen($page[2])) ? '<i class="fa '.htmlspecialcharsbx($page[2]).'"></i>' : ""
		);
	}
}

$currency = $discount["DISCOUNT_TYPE"] == "P"?"%":"₽";


if (empty($availablePages))
{
	ShowError(Loc::getMessage("SPS_ERROR_NOT_CHOSEN_ELEMENT"));
}
else
{
	?>
    <main class="userSettings">
        <div class="modal orderDetail">
            <div class="wrap">
                <div class="orderDetail__box" id="orderDetail__box">
                    <div class="orderDetail__closeBtn modal__closeBtn modal__closeBtn-inset close-btn"></div>
                    <div class="orderDetail__header">
                        <h3 class="orderDetail__title">
                            Заказ от <span id="orderDetail__date"></span>
                        </h3>
                        <div class="orderDetail__serial">Заказ <span id="orderDetail__orderNum"></span></div>
                    </div>
                    <div class="goods__basketBox flexbox">
                        <div class="goods__basketBody flexbox" id="goods__basketBody">

                        </div>
                        <div class="goods__basketFooter flexbox">
                            <div class="goods__total flexbox">
                                Итого <span class="goods__totalPrice" id="goods__totalPrice"></span>
                            </div>
<button class="goods__basketItemControl" id="e_basket" data-order-id="5">
                                Повтор заказа
                            </button>

                            <script>
                                let returnOrder = document.getElementById('e_basket');
                                let closeModal = document.querySelector(".modal__closeBtn-inset");
                                const currentURL =  window.location.href;
                                let hello = currentURL.replace("#2", "");
                                console.log(hello);
                                returnOrder.addEventListener('click', function() {
                                    let orderElement = document.getElementById('orderDetail__orderNum').textContent;
                                    window.location.href = hello + `?id=${orderElement}`;
                                    console.log(window.location.href);

                                });

                                closeModal.addEventListener('click', function(){
                                    window.location.href = currentURL;
                                });

                            </script>
                            <? if(!empty($_GET["id"])):
                                $order=new repeatOrder($_GET["id"]);
                            endif;?>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="lk">
            <div class="wrap">
                <?$APPLICATION->IncludeComponent(
                    "bitrix:breadcrumb",
                    "nav",
                    Array(
                        "PATH" => "",
                        "SITE_ID" => "s2",
                        "START_FROM" => "0"
                    )
                );?>
                <div class="lk__header">
                    <div class="lk__headerCol">
                        <div class="lk__user">
                            <h1 class="lk__userTitle">
                                <?=$USER->GetFullName()?>
                            </h1>
                            <div class="lk__userCounter">

                                <div id="lk__count"></div>
                            </div>
                        </div>
                    </div>
                    <? /*
                    <div class="lk__headerSale flexbox">

                        <h4 class="lk__headerSaleTitle">
                            Ваша скидка
                        </h4>
                        <div class="lk__headerSaleValue" id="lk__headerSaleValue">0%</div>
                        <div class="lk__headerSaleText">Чтобы достигнуть 7% скидки сделайте заказ на сумму более 50 000
                            ₽</div>
                    </div>
                    */ ?>
                </div>

                <div class="lk__tabs owl-carousel owl-theme">
                    <button class="lk__tabItem">Персональные данные</button>
                    <button class="lk__tabItem" id="e_personal-order-list"">История заказов</button>
                    <button class="lk__tabItem" id="e_personal-items-list">Товары</button>
                </div>
            </div>
            <div class="lk__main">
                <div class="wrap">
                    <div class="lk__box">
                        <div class="lk__window lk__window-profile">
                        <?php
                        if ($arParams['SHOW_PRIVATE_PAGE'] === 'Y')
                        {
                            $APPLICATION->IncludeComponent(
                                "bitrix:main.profile",
                                "eshop",
                                Array(
                                    "SET_TITLE" =>$arParams["SET_TITLE"],
                                    "AJAX_MODE" => "N",
                                    "SEND_INFO" => $arParams["SEND_INFO_PRIVATE"],
                                    "CHECK_RIGHTS" => $arParams['CHECK_RIGHTS_PRIVATE'],
                                    "EDITABLE_EXTERNAL_AUTH_ID" => $arParams['EDITABLE_EXTERNAL_AUTH_ID'],
                                    "DISABLE_SOCSERV_AUTH" => $arParams['DISABLE_SOCSERV_AUTH'],
                                ),
                                $component
                            );
                        }
                        ?>
                        <a href="">Выход</a>
                        </div>
                        <div class="lk__window lk__window-history">
                            <div class="lk__filter">
                                <span class="lk__filterTitle">Сортировать по: </span>
                                <button type="button" class="lk__filterBtn decrease" id="lk__filterBtn">Дате</button>
                            </div>
                            <div class="lk__history">
                                <div class="lk__historyBox flexbox">
                                    <div class="lk__historyHeader flexbox">
                                        <div class="lk__historyItem lk__historyItem-date">Дата</div>
                                        <div class="lk__historyItem lk__historyItem-serial">Номер заказа</div>
                                        <div class="lk__historyItem lk__historyItem-amount">Сумма</div>
                                        <div class="lk__historyItem lk__historyItem-status">Статус</div>
                                        <div class="lk__historyItem lk__historyItem-more"></div>
                                    </div>
                                    <div class="lk__historyBody flexbox" id="lk__historyBody">

                                    </div>
                                </div>
                            </div>
                            <div class="lk__pagi">
                                <div class="lk__pagiBox flexbox" id="history__pagiBox">

                                </div>
                            </div>
                        </div>
                        <div class="lk__window lk__window-stocks" id="lk__window-stocks">
                            <div class="lk__window lk__window-stocks tabContent-active tabContent-visible" data-index="3">
                                <h3 class="lk__title lk__title-stocks">
                                    Вы покупали
                                </h3>
                                <div class="lk__stocks" id="ls__stocks">
                                    <div class="lk__stocksFilter" id="lk__stocksFilter">
                                        <button class="lk__stocksFilterBtn active" onclick="selectSection(this)">Все</button>
                                    </div>
                                    <div class="lk__stocksBox flexbox" id="ls__stocksBox">

                                    </div>
                                </div>
                            </div>
                            <div class="lk__pagi">
                                <div class="lk__pagiBox flexbox" id="stocks__pagiBox">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

	
<?
}
}
?>


<div class="nav__barUserAuth">
   <?if (!$USER->IsAuthorized()):?>
<button class="nav__barLink nav__barUserAuthItem nav__barUserAuthItem-signUp"></button>
 <button class="nav__barLink nav__barUserAuthItem nav__barUserAuthItem-login"></button>
  <div class="ajax">
  </div>
   <?else:?> <a href="/personal/" class="nav__barLink nav__barUserAuthItem"><?=$USER->GetFullName()?></a> 
<a href="/?logout=yes" class="nav__barLink nav__barUserAuthItem">Выйти</a>
  <?endif?>
</div>