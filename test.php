<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

$templateData = array(
    'TEMPLATE_THEME' => $this->GetFolder() . '/themes/' . $arParams['TEMPLATE_THEME'] . '/colors.css',
    'TEMPLATE_CLASS' => 'bx-' . $arParams['TEMPLATE_THEME']
);

if (isset($templateData['TEMPLATE_THEME'])) {
    $this->addExternalCss($templateData['TEMPLATE_THEME']);
}
//$this->addExternalCss("/bitrix/css/main/bootstrap.css");
//$this->addExternalCss("/bitrix/css/main/font-awesome.css");
?>
<div class="category__filters bx-filter">
    <form name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="<? echo $arResult["FORM_ACTION"] ?>" method="get" class="smartfilter category__filtersBox">
        <div class="submit-btn">
            <div class="submit-btn--inner">
                <input class="btn btn-themes bx-filter-submit button-h" type="submit" id="set_filter" name="set_filter" value="<?= GetMessage("CT_BCSF_SET_FILTER") ?>" />
            </div>
        </div>
        <h3 class="category__filtersTitle"><? echo GetMessage("CT_BCSF_FILTER_TITLE") ?></h3>
        <? foreach ($arResult["HIDDEN"] as $arItem) : ?>
            <input type="hidden" name="<? echo $arItem["CONTROL_NAME"] ?>" id="<? echo $arItem["CONTROL_ID"] ?>" value="<? echo $arItem["HTML_VALUE"] ?>" />
        <? endforeach; ?>
        <? foreach ($arResult["ITEMS"] as $key => $arItem) //prices
        {
            $key = $arItem["ENCODED_ID"];
            if (isset($arItem["PRICE"])) :
                if ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0)
                    continue;

                $step_num = 4;
                $step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / $step_num;
                $prices = array();
                if (Bitrix\Main\Loader::includeModule("currency")) {
                    for ($i = 0; $i < $step_num; $i++) {
                        $prices[$i] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MIN"]["VALUE"] + $step * $i, $arItem["VALUES"]["MIN"]["CURRENCY"], false);
                    }
                    $prices[$step_num] = CCurrencyLang::CurrencyFormat($arItem["VALUES"]["MAX"]["VALUE"], $arItem["VALUES"]["MAX"]["CURRENCY"], false);
                } else {
                    $precision = $arItem["DECIMALS"] ? $arItem["DECIMALS"] : 0;
                    for ($i = 0; $i < $step_num; $i++) {
                        $prices[$i] = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step * $i, $precision, ".", "");
                    }
                    $prices[$step_num] = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
                }
        ?>
                <div class="category__filtersItem category__filtersItem-price bx-filter-parameters-box bx-active">
                    <span class="bx-filter-container-modef"></span>
                    <h4 class="category__filtersItemTitle"><?= $arItem["NAME"] ?></h4>
                    <div class="bx-filter-block" data-role="bx_filter_block">
                        <div class="bx-filter-parameters-box-container">
                            <div class="bx-ui-slider-track-container">
                                <div class="bx-ui-slider-track" id="drag_track_<?= $key ?>">
                                    <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?= $key ?>"></div>
                                    <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?= $key ?>"></div>
                                    <div class="bx-ui-slider-pricebar-v" style="left: 0;right: 0;" id="colorAvailableActive_<?= $key ?>"></div>
                                    <div class="bx-ui-slider-range" id="drag_tracker_<?= $key ?>" style="left: 0%; right: 0%;">
                                        <a class="bx-ui-slider-handle left" style="left:0;" href="javascript:void(0)" id="left_slider_<?= $key ?>"></a>
                                        <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?= $key ?>"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="bx-filter-parameters-box-container-block bx-left">
                                <div class="bx-filter-input-container">
                                    <input class="min-price" type="text" name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>" size="5" placeholder="<?= $arItem["VALUES"]["MIN"]["VALUE"] ?>" onkeyup="smartFilter.keyup(this)" />
                                </div>
                            </div>
                            <div class="bx-filter-parameters-box-container-block bx-right">
                                <div class="bx-filter-input-container">
                                    <input class="max-price" type="text" name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>" size="5" placeholder="<?= $arItem["VALUES"]["MAX"]["VALUE"] ?>" onkeyup="smartFilter.keyup(this)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?
                $arJsParams = array(
                    "leftSlider" => 'left_slider_' . $key,
                    "rightSlider" => 'right_slider_' . $key,
                    "tracker" => "drag_tracker_" . $key,
                    "trackerWrap" => "drag_track_" . $key,
                    "minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                    "maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                    "minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
                    "maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
                    "curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                    "curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                    "fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"],
                    "fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                    "precision" => $precision,
                    "colorUnavailableActive" => 'colorUnavailableActive_' . $key,
                    "colorAvailableActive" => 'colorAvailableActive_' . $key,
                    "colorAvailableInactive" => 'colorAvailableInactive_' . $key,
                );
                ?>
                <script type="text/javascript">
                    BX.ready(function() {
                        window['trackBar<?= $key ?>'] = new BX.Iblock.SmartFilter(<?= CUtil::PhpToJSObject($arJsParams) ?>);
                    });
                </script>
            <? endif;
        }

        /*
        ?>
        <div class="category__filtersInputBox">
            <input class="category__filtersInput category__filtersInput-long" type="text" name="" id="">
            <label for="" class="category__filtersInputLabel flexbox">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8215 13.7256L9.65417 9.55827C10.4526 8.6057 10.9379 7.38661 10.9379 6.06907C10.9379 3.08598 8.452 0.600098 5.46891 0.600098C2.48583 0.600098 0 3.08604 0 6.06913C0 9.05221 2.48589 11.5381 5.46897 11.5381C6.7616 11.5381 7.95886 11.0707 8.90349 10.2991L13.0261 14.4217C13.1255 14.5211 13.2249 14.5211 13.4238 14.5211C13.6226 14.5211 13.7221 14.5211 13.8215 14.4217C14.0205 14.2228 14.0205 13.9246 13.8215 13.7256Z" fill="#DADADA"/>
                </svg>
                <span>Поиск</span>
            </label>
        </div>
        <?
        */

        //not prices
        foreach ($arResult["ITEMS"] as $key => $arItem) {
            if (
                empty($arItem["VALUES"])
                || isset($arItem["PRICE"])
            )
                continue;

            if (
                $arItem["DISPLAY_TYPE"] == "A"
                && ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"] <= 0
                )
            )
                continue;
            ?>


            <div class="category__filtersItem category__filtersItem-brands bx-filter-parameters-box bx-active">
                <span class="bx-filter-container-modef"></span>
                <h4 class="category__filtersItemTitle"><?= $arItem["NAME"] ?></h4>

                <div class="bx-filter-block" data-role="bx_filter_block">
                    <div class="row bx-filter-parameters-box-container">
                        <?
                        $arCur = current($arItem["VALUES"]);
                        switch ($arItem["DISPLAY_TYPE"]) {
                            case "A": //NUMBERS_WITH_SLIDER
                        ?>
                                <div class="col-xs-6 bx-filter-parameters-box-container-block bx-left">
                                    <i class="bx-ft-sub"><?= GetMessage("CT_BCSF_FILTER_FROM") ?></i>
                                    <div class="bx-filter-input-container">
                                        <input class="min-price" type="text" name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>" size="5" placeholder="<?= $arItem["VALUES"]["MIN"]["VALUE"] ?>" onkeyup="smartFilter.keyup(this)" />
                                    </div>
                                </div>
                                <div class="col-xs-6 bx-filter-parameters-box-container-block bx-right">
                                    <i class="bx-ft-sub"><?= GetMessage("CT_BCSF_FILTER_TO") ?></i>
                                    <div class="bx-filter-input-container">
                                        <input class="max-price" type="text" name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>" size="5" placeholder="<?= $arItem["VALUES"]["MAX"]["VALUE"] ?>" onkeyup="smartFilter.keyup(this)" />
                                    </div>
                                </div>

                                <div class="col-xs-10 col-xs-offset-1 bx-ui-slider-track-container">
                                    <div class="bx-ui-slider-track" id="drag_track_<?= $key ?>">
                                        <?
                                        $precision = $arItem["DECIMALS"] ? $arItem["DECIMALS"] : 0;
                                        $step = ($arItem["VALUES"]["MAX"]["VALUE"] - $arItem["VALUES"]["MIN"]["VALUE"]) / 4;
                                        $value1 = number_format($arItem["VALUES"]["MIN"]["VALUE"], $precision, ".", "");
                                        $value2 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step, $precision, ".", "");
                                        $value3 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step * 2, $precision, ".", "");
                                        $value4 = number_format($arItem["VALUES"]["MIN"]["VALUE"] + $step * 3, $precision, ".", "");
                                        $value5 = number_format($arItem["VALUES"]["MAX"]["VALUE"], $precision, ".", "");
                                        ?>
                                        <div class="bx-ui-slider-part p1"><span><?= $value1 ?></span></div>
                                        <div class="bx-ui-slider-part p2"><span><?= $value2 ?></span></div>
                                        <div class="bx-ui-slider-part p3"><span><?= $value3 ?></span></div>
                                        <div class="bx-ui-slider-part p4"><span><?= $value4 ?></span></div>
                                        <div class="bx-ui-slider-part p5"><span><?= $value5 ?></span></div>

                                        <div class="bx-ui-slider-pricebar-vd" style="left: 0;right: 0;" id="colorUnavailableActive_<?= $key ?>"></div>
                                        <div class="bx-ui-slider-pricebar-vn" style="left: 0;right: 0;" id="colorAvailableInactive_<?= $key ?>"></div>
                                        <div class="bx-ui-slider-pricebar-v" style="left: 0;right: 0;" id="colorAvailableActive_<?= $key ?>"></div>
                                        <div class="bx-ui-slider-range" id="drag_tracker_<?= $key ?>" style="left: 0;right: 0;">
                                            <a class="bx-ui-slider-handle left" style="left:0;" href="javascript:void(0)" id="left_slider_<?= $key ?>"></a>
                                            <a class="bx-ui-slider-handle right" style="right:0;" href="javascript:void(0)" id="right_slider_<?= $key ?>"></a>
                                        </div>
                                    </div>
                                </div>
                                <?
                                $arJsParams = array(
                                    "leftSlider" => 'left_slider_' . $key,
                                    "rightSlider" => 'right_slider_' . $key,
                                    "tracker" => "drag_tracker_" . $key,
                                    "trackerWrap" => "drag_track_" . $key,
                                    "minInputId" => $arItem["VALUES"]["MIN"]["CONTROL_ID"],
                                    "maxInputId" => $arItem["VALUES"]["MAX"]["CONTROL_ID"],
                                    "minPrice" => $arItem["VALUES"]["MIN"]["VALUE"],
                                    "maxPrice" => $arItem["VALUES"]["MAX"]["VALUE"],
                                    "curMinPrice" => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                    "curMaxPrice" => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                    "fltMinPrice" => intval($arItem["VALUES"]["MIN"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MIN"]["FILTERED_VALUE"] : $arItem["VALUES"]["MIN"]["VALUE"],
                                    "fltMaxPrice" => intval($arItem["VALUES"]["MAX"]["FILTERED_VALUE"]) ? $arItem["VALUES"]["MAX"]["FILTERED_VALUE"] : $arItem["VALUES"]["MAX"]["VALUE"],
                                    "precision" => $arItem["DECIMALS"] ? $arItem["DECIMALS"] : 0,
                                    "colorUnavailableActive" => 'colorUnavailableActive_' . $key,
                                    "colorAvailableActive" => 'colorAvailableActive_' . $key,
                                    "colorAvailableInactive" => 'colorAvailableInactive_' . $key,
                                );
                                ?>
                                <script type="text/javascript">
                                    BX.ready(function() {
                                        window['trackBar<?= $key ?>'] = new BX.Iblock.SmartFilter(<?= CUtil::PhpToJSObject($arJsParams) ?>);
                                    });
                                </script>
                            <?
                                break;
                            case "B": //NUMBERS
                            ?>
                                <div class="col-xs-6 bx-filter-parameters-box-container-block bx-left">
                                    <i class="bx-ft-sub"><?= GetMessage("CT_BCSF_FILTER_FROM") ?></i>
                                    <div class="bx-filter-input-container">
                                        <input class="min-price" type="text" name="<? echo $arItem["VALUES"]["MIN"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MIN"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MIN"]["HTML_VALUE"] ?>" size="5" onkeyup="smartFilter.keyup(this)" />
                                    </div>
                                </div>
                                <div class="col-xs-6 bx-filter-parameters-box-container-block bx-right">
                                    <i class="bx-ft-sub"><?= GetMessage("CT_BCSF_FILTER_TO") ?></i>
                                    <div class="bx-filter-input-container">
                                        <input class="max-price" type="text" name="<? echo $arItem["VALUES"]["MAX"]["CONTROL_NAME"] ?>" id="<? echo $arItem["VALUES"]["MAX"]["CONTROL_ID"] ?>" value="<? echo $arItem["VALUES"]["MAX"]["HTML_VALUE"] ?>" size="5" onkeyup="smartFilter.keyup(this)" />
                                    </div>
                                </div>
                            <?
                                break;
                            case "G": //CHECKBOXES_WITH_PICTURES
                            ?>
                                <div class="col-xs-12">
                                    <div class="bx-filter-param-btn-inline">
                                        <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                            <input style="display: none" type="checkbox" name="<?= $ar["CONTROL_NAME"] ?>" id="<?= $ar["CONTROL_ID"] ?>" value="<?= $ar["HTML_VALUE"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> />
                                            <?
                                            $class = "";
                                            if ($ar["CHECKED"])
                                                $class .= " bx-active";
                                            if ($ar["DISABLED"])
                                                $class .= " disabled";
                                            ?>
                                            <label for="<?= $ar["CONTROL_ID"] ?>" data-role="label_<?= $ar["CONTROL_ID"] ?>" class="bx-filter-param-label <?= $class ?>" onclick="smartFilter.keyup(BX('<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')); BX.toggleClass(this, 'bx-active');">
                                                <span class="bx-filter-param-btn bx-color-sl">
                                                    <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])) : ?>
                                                        <span class="bx-filter-btn-color-icon" style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                    <? endif ?>
                                                </span>
                                            </label>
                                        <? endforeach ?>
                                    </div>
                                </div>
                            <?
                                break;
                            case "H": //CHECKBOXES_WITH_PICTURES_AND_LABELS
                            ?>
                                <div class="col-xs-12">
                                    <div class="bx-filter-param-btn-block">
                                        <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                            <input style="display: none" type="checkbox" name="<?= $ar["CONTROL_NAME"] ?>" id="<?= $ar["CONTROL_ID"] ?>" value="<?= $ar["HTML_VALUE"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> />
                                            <?
                                            $class = "";
                                            if ($ar["CHECKED"])
                                                $class .= " bx-active";
                                            if ($ar["DISABLED"])
                                                $class .= " disabled";
                                            ?>
                                            <label for="<?= $ar["CONTROL_ID"] ?>" data-role="label_<?= $ar["CONTROL_ID"] ?>" class="bx-filter-param-label<?= $class ?>" onclick="smartFilter.keyup(BX('<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')); BX.toggleClass(this, 'bx-active');">
                                                <span class="bx-filter-param-btn bx-color-sl">
                                                    <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])) : ?>
                                                        <span class="bx-filter-btn-color-icon" style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                    <? endif ?>
                                                </span>
                                                <span class="bx-filter-param-text" title="<?= $ar["VALUE"]; ?>"><?= $ar["VALUE"]; ?><?
                                                                                                                                if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])) :
                                                                                                                                ?> (<span data-role="count_<?= $ar["CONTROL_ID"] ?>"><? echo $ar["ELEMENT_COUNT"]; ?></span>)<?
                                                                                                                                            endif; ?></span>
                                            </label>
                                        <? endforeach ?>
                                    </div>
                                </div>
                            <?
                                break;
                            case "P": //DROPDOWN
                                $checkedItemExist = false;
                            ?>
                                <div class="col-xs-12">
                                    <div class="bx-filter-select-container">
                                        <div class="bx-filter-select-block" onclick="smartFilter.showDropDownPopup(this, '<?= CUtil::JSEscape($key) ?>')">
                                            <div class="bx-filter-select-text" data-role="currentOption">
                                                <?
                                                foreach ($arItem["VALUES"] as $val => $ar) {
                                                    if ($ar["CHECKED"]) {
                                                        echo $ar["VALUE"];
                                                        $checkedItemExist = true;
                                                    }
                                                }
                                                if (!$checkedItemExist) {
                                                    echo GetMessage("CT_BCSF_FILTER_ALL");
                                                }
                                                ?>
                                            </div>
                                            <div class="bx-filter-select-arrow"></div>
                                            <input style="display: none" type="radio" name="<?= $arCur["CONTROL_NAME_ALT"] ?>" id="<? echo "all_" . $arCur["CONTROL_ID"] ?>" value="" />
                                            <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                                <input style="display: none" type="radio" name="<?= $ar["CONTROL_NAME_ALT"] ?>" id="<?= $ar["CONTROL_ID"] ?>" value="<? echo $ar["HTML_VALUE_ALT"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> />
                                            <? endforeach ?>
                                            <div class="bx-filter-select-popup" data-role="dropdownContent" style="display: none;">
                                                <ul>
                                                    <li>
                                                        <label for="<?= "all_" . $arCur["CONTROL_ID"] ?>" class="bx-filter-param-label" data-role="label_<?= "all_" . $arCur["CONTROL_ID"] ?>" onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape("all_" . $arCur["CONTROL_ID"]) ?>')">
                                                            <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                        </label>
                                                    </li>
                                                    <?
                                                    foreach ($arItem["VALUES"] as $val => $ar) :
                                                        $class = "";
                                                        if ($ar["CHECKED"])
                                                            $class .= " selected";
                                                        if ($ar["DISABLED"])
                                                            $class .= " disabled";
                                                    ?>
                                                        <li>
                                                            <label for="<?= $ar["CONTROL_ID"] ?>" class="bx-filter-param-label<?= $class ?>" data-role="label_<?= $ar["CONTROL_ID"] ?>" onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')"><?= $ar["VALUE"] ?></label>
                                                        </li>
                                                    <? endforeach ?>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?
                                break;
                            case "R": //DROPDOWN_WITH_PICTURES_AND_LABELS
                            ?>
                                <div class="col-xs-12">
                                    <div class="bx-filter-select-container">
                                        <div class="bx-filter-select-block" onclick="smartFilter.showDropDownPopup(this, '<?= CUtil::JSEscape($key) ?>')">
                                            <div class="bx-filter-select-text fix" data-role="currentOption">
                                                <?
                                                $checkedItemExist = false;
                                                foreach ($arItem["VALUES"] as $val => $ar) :
                                                    if ($ar["CHECKED"]) {
                                                ?>
                                                        <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])) : ?>
                                                            <span class="bx-filter-btn-color-icon" style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                        <? endif ?>
                                                        <span class="bx-filter-param-text">
                                                            <?= $ar["VALUE"] ?>
                                                        </span>
                                                    <?
                                                        $checkedItemExist = true;
                                                    }
                                                endforeach;
                                                if (!$checkedItemExist) {
                                                    ?><span class="bx-filter-btn-color-icon all"></span> <?
                                                                                                        echo GetMessage("CT_BCSF_FILTER_ALL");
                                                                                                    }
                                                                                                        ?>
                                            </div>
                                            <div class="bx-filter-select-arrow"></div>
                                            <input style="display: none" type="radio" name="<?= $arCur["CONTROL_NAME_ALT"] ?>" id="<? echo "all_" . $arCur["CONTROL_ID"] ?>" value="" />
                                            <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                                <input style="display: none" type="radio" name="<?= $ar["CONTROL_NAME_ALT"] ?>" id="<?= $ar["CONTROL_ID"] ?>" value="<?= $ar["HTML_VALUE_ALT"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> />
                                            <? endforeach ?>
                                            <div class="bx-filter-select-popup" data-role="dropdownContent" style="display: none">
                                                <ul>
                                                    <li style="border-bottom: 1px solid #e5e5e5;padding-bottom: 5px;margin-bottom: 5px;">
                                                        <label for="<?= "all_" . $arCur["CONTROL_ID"] ?>" class="bx-filter-param-label" data-role="label_<?= "all_" . $arCur["CONTROL_ID"] ?>" onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape("all_" . $arCur["CONTROL_ID"]) ?>')">
                                                            <span class="bx-filter-btn-color-icon all"></span>
                                                            <? echo GetMessage("CT_BCSF_FILTER_ALL"); ?>
                                                        </label>
                                                    </li>
                                                    <?
                                                    foreach ($arItem["VALUES"] as $val => $ar) :
                                                        $class = "";
                                                        if ($ar["CHECKED"])
                                                            $class .= " selected";
                                                        if ($ar["DISABLED"])
                                                            $class .= " disabled";
                                                    ?>
                                                        <li>
                                                            <label for="<?= $ar["CONTROL_ID"] ?>" data-role="label_<?= $ar["CONTROL_ID"] ?>" class="bx-filter-param-label<?= $class ?>" onclick="smartFilter.selectDropDownItem(this, '<?= CUtil::JSEscape($ar["CONTROL_ID"]) ?>')">
                                                                <? if (isset($ar["FILE"]) && !empty($ar["FILE"]["SRC"])) : ?>
                                                                    <span class="bx-filter-btn-color-icon" style="background-image:url('<?= $ar["FILE"]["SRC"] ?>');"></span>
                                                                <? endif ?>
                                                                <span class="bx-filter-param-text">
                                                                    <?= $ar["VALUE"] ?>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    <? endforeach ?>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?
                                break;
                            case "K": //RADIO_BUTTONS
                            ?>
                                <div class="col-xs-12">
                                    <div class="radio">
                                        <label class="bx-filter-param-label" for="<? echo "all_" . $arCur["CONTROL_ID"] ?>">
                                            <span class="bx-filter-input-checkbox">
                                                <input type="radio" value="" name="<? echo $arCur["CONTROL_NAME_ALT"] ?>" id="<? echo "all_" . $arCur["CONTROL_ID"] ?>" onclick="smartFilter.click(this)" />
                                                <span class="bx-filter-param-text"><? echo GetMessage("CT_BCSF_FILTER_ALL"); ?></span>
                                            </span>
                                        </label>
                                    </div>
                                    <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                        <div class="radio">
                                            <label data-role="label_<?= $ar["CONTROL_ID"] ?>" class="bx-filter-param-label" for="<? echo $ar["CONTROL_ID"] ?>">
                                                <span class="bx-filter-input-checkbox <? echo $ar["DISABLED"] ? 'disabled' : '' ?>">
                                                    <input type="radio" value="<? echo $ar["HTML_VALUE_ALT"] ?>" name="<? echo $ar["CONTROL_NAME_ALT"] ?>" id="<? echo $ar["CONTROL_ID"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> onclick="smartFilter.click(this)" />
                                                    <span class="bx-filter-param-text" title="<?= $ar["VALUE"]; ?>"><?= $ar["VALUE"]; ?><?
                                                                                                                                    if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])) :
                                                                                                                                    ?>&nbsp;(<span data-role="count_<?= $ar["CONTROL_ID"] ?>"><? echo $ar["ELEMENT_COUNT"]; ?></span>)<?
                                                                                                                                                    endif; ?></span>
                                                </span>
                                            </label>
                                        </div>
                                    <? endforeach; ?>
                                </div>
                            <?
                                break;
                            case "U": //CALENDAR
                            ?>
                                <div class="col-xs-12">
                                    <div class="bx-filter-parameters-box-container-block">
                                        <div class="bx-filter-input-container bx-filter-calendar-container">
                                            <? $APPLICATION->IncludeComponent(
                                                'bitrix:main.calendar',
                                                '',
                                                array(
                                                    'FORM_NAME' => $arResult["FILTER_NAME"] . "_form",
                                                    'SHOW_INPUT' => 'Y',
                                                    'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="' . FormatDate("SHORT", $arItem["VALUES"]["MIN"]["VALUE"]) . '" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                    'INPUT_NAME' => $arItem["VALUES"]["MIN"]["CONTROL_NAME"],
                                                    'INPUT_VALUE' => $arItem["VALUES"]["MIN"]["HTML_VALUE"],
                                                    'SHOW_TIME' => 'N',
                                                    'HIDE_TIMEBAR' => 'Y',
                                                ),
                                                null,
                                                array('HIDE_ICONS' => 'Y')
                                            ); ?>
                                        </div>
                                    </div>
                                    <div class="bx-filter-parameters-box-container-block">
                                        <div class="bx-filter-input-container bx-filter-calendar-container">
                                            <? $APPLICATION->IncludeComponent(
                                                'bitrix:main.calendar',
                                                '',
                                                array(
                                                    'FORM_NAME' => $arResult["FILTER_NAME"] . "_form",
                                                    'SHOW_INPUT' => 'Y',
                                                    'INPUT_ADDITIONAL_ATTR' => 'class="calendar" placeholder="' . FormatDate("SHORT", $arItem["VALUES"]["MAX"]["VALUE"]) . '" onkeyup="smartFilter.keyup(this)" onchange="smartFilter.keyup(this)"',
                                                    'INPUT_NAME' => $arItem["VALUES"]["MAX"]["CONTROL_NAME"],
                                                    'INPUT_VALUE' => $arItem["VALUES"]["MAX"]["HTML_VALUE"],
                                                    'SHOW_TIME' => 'N',
                                                    'HIDE_TIMEBAR' => 'Y',
                                                ),
                                                null,
                                                array('HIDE_ICONS' => 'Y')
                                            ); ?>
                                        </div>
                                    </div>
                                </div>
                            <?
                                break;
                            default: //CHECKBOXES
                            ?>
                                <div class="category__filtersItemCheckBox">
                                    <? foreach ($arItem["VALUES"] as $val => $ar) : ?>
                                        <div class="category__filtersInputBox-checkbox flexbox">
                                            <input class="category__filtersInput-checkbox" type="checkbox" value="<? echo $ar["HTML_VALUE"] ?>" name="<? echo $ar["CONTROL_NAME"] ?>" id="<? echo $ar["CONTROL_ID"] ?>" <? echo $ar["CHECKED"] ? 'checked="checked"' : '' ?> onclick="smartFilter.click(this)" />
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.933 0.345352C12.5104 -0.115117 11.8087 -0.115117 11.3861 0.345352L5.16652 7.11338L2.62286 4.31581C2.1843 3.86403 1.49855 3.86403 1.05999 4.33319C0.64535 4.80235 0.64535 5.54952 1.06796 6.02737L4.34521 9.5808L4.39306 9.64162C4.82364 10.1195 5.51737 10.1195 5.94795 9.64162L12.933 2.03084C13.3557 1.56169 13.3557 0.805821 12.933 0.345352Z" fill="white" />
                                            </svg>
                                            <label data-role="label_<?= $ar["CONTROL_ID"] ?>" class="category__filtersInputLabel category__filtersInputLabel-checkbox <? echo $ar["DISABLED"] ? 'disabled' : '' ?>" for="<? echo $ar["CONTROL_ID"] ?>">
                                                <span class="bx-filter-param-text" title="<?= $ar["VALUE"]; ?>"><?= $ar["VALUE"]; ?><?
                                                                                                                                if ($arParams["DISPLAY_ELEMENT_COUNT"] !== "N" && isset($ar["ELEMENT_COUNT"])) :
                                                                                                                                ?>&nbsp;(<span data-role="count_<?= $ar["CONTROL_ID"] ?>"><? echo $ar["ELEMENT_COUNT"]; ?></span>)<?
                                                                                                                                                endif; ?></span>
                                            </label>
                                        </div>
                                    <? endforeach; ?>
                                </div>
                        <?
                        }
                        ?>
                    </div>
                    <div style="clear: both"></div>
                </div>
            </div>
        <?
        }
        ?>

        <div class="row">
            <div class="col-xs-12 bx-filter-button-box">
                <div class="bx-filter-block">
                    <div class="bx-filter-parameters-box-container">

                        <input class="btn btn-link category__filtersReset" type="submit" id="del_filter" name="del_filter" value="<?= GetMessage("CT_BCSF_DEL_FILTER") ?>" />
                        <div class="bx-filter-popup-result <? if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"] ?>" id="modef" <? if (!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"'; ?> style="display: inline-block;">
                            <? echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . intval($arResult["ELEMENT_COUNT"]) . '</span>')); ?>
                            <span class="arrow"></span>
                            <br />
                            <a href="<? echo $arResult["FILTER_URL"] ?>" target=""><? echo GetMessage("CT_BCSF_FILTER_SHOW") ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clb"></div>
    </form>
</div>
<script type="text/javascript">
    var smartFilter = new JCSmartFilter('<? echo CUtil::JSEscape($arResult["FORM_ACTION"]) ?>', '<?= CUtil::JSEscape($arParams["FILTER_VIEW_MODE"]) ?>', <?= CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"]) ?>);
</script>