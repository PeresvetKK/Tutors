







<section class="catalog-detail py-3 py-md-5 "  id="<?=$itemIds['ID']?>" >



<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="row pb-5">
                <div class="col-lg-6 col-xxl-4">
                    <h1 class="catalog-detail__title"><?=$actualItem['NAME'] ?></h1>
                    <p class="universal__text mb-5">Код товара: 1469028</p>
                    <div class="catalog-detail__slider">
                        
                        
                        
         
                        
                        
                        <div class="splide" id="primary-slider">
                            <div class="splide__track" data-splide-el="track" id="<?=$itemIds['BIG_SLIDER_ID']?>" data-entity="images-slider-block">
                                <ul class="splide__list" data-entity="images-container">
                                <?foreach ($actualItem['MORE_PHOTO'] as $key => $photo): ?>
                                    <li class="splide__slide">
                                        <a href="<?=$photo['SRC']?>" class="gallery" data-fancybox="demo" data-entity="image" data-id="<?=$photo['ID']?>">
                                            <img src="<?=$photo['SRC']?>" alt="" class="img-fluid" style="max-width:440px">
                                        </a>
                                    </li>
                               <?endforeach ?>     

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div class="catalog-detail__subslider subslider">
                        <div class="splide" id="secondary-slider">
                            <div class="splide__arrows">
                                <button class="splide__arrow splide__arrow--prev">
                                    <img src="/local/templates/rvi/assets/img/arrow-left-sm.svg" alt="">
                                </button>
                                <button class="splide__arrow splide__arrow--next">
                                    <img src="/local/templates/rvi/assets/img/arrow-right-sm.svg" alt="">
                                </button>
                            </div>
                            <div class="splide__track" data-splide-el="track">
                                <ul class="splide__list">
                                 <?foreach ($actualItem['MORE_PHOTO'] as $key => $photo): ?>
                                    <li class="splide__slide slide-nav">
                                        <img src="<?=$photo['SRC']?>" alt="" class="subslider__img" data-index="<?=$key ?>">
                                    </li>
                                <?endforeach ?>         
                                     
                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
                <div class="col-lg-6 col-xxl-5">
                    <span class="catalog-detail__price" id="<?=$itemIds['PRICE_ID']?>"> <?=$price['PRINT_RATIO_PRICE']?></span>
                    <div class="d-flex mb-4">
                        <select name="" id="" class="mr-4 catalog-detail__filter catalog-detail__filter--objectiv">
                            <option value="">6.0</option>
                        </select>

                        <select name="" id="" class="catalog-detail__filter catalog-detail__filter--color">
                            <option value="">Белый</option>
                        </select>
                    </div>
                    <div class="d-flex mb-4">
                        <img src="/local/templates/rvi/assets/img/ruler-md.svg" alt="" class="mr-4">
                        <img src="/local/templates/rvi/assets/img/arch-md.svg" alt="" class="mr-4">
                        <img src="/local/templates/rvi/assets/img/compare.svg" alt="" class="mr-4">
                    </div>
                    <div class="d-flex mb-4">
                        <div class="catalog-detail__spec spec-detail">
                            <img src="/local/templates/rvi/assets/img/sertificate-md.svg" alt="">
                            <span class="spec-detail__text">ПП № 969</span>
                        </div>
                    </div>
                    <? if( $arResult[ 'PROPERTY_ICONS'] ): ?>
                    <div class="d-flex flex-wrap">
                        <? foreach ( $arResult[ 'PROPERTY_ICONS' ] as $item): ?>
                        <div class="catalog-detail__prop prop-detail">
                            <img src=<?= $item[ 'SRC' ] ?> alt=<?= strtolower( $item[ 'CODE' ] ); ?> class="prop-detail__img">
                            <span class="prop-detail__text"><?= $item[ 'VALUE' ] ?></span>
                        </div>
                        <? endforeach; ?>

                    </div>
                    <? endif; ?>

                </div>
                <div class="col-lg-6 col-xxl-3">
                    <div class="catalog-detail__exist exist">
                        <h3 class="exist__title">Информация о наличии</h3>
                        <p class="universal__text">Свободный остаток: <b>22</b> шт.</p>
                        <p class="universal__text">В резервах: <b>33</b> шт.</p>
                        <p class="universal__text">В транзите: <b>20</b> шт.</p>
                        <p class="universal__text">Дата поступления: <b>20.09.2021</b> г.</p>
                        <p class="universal__text">Розничная цена: <b>24 500</b> руб.</p>
                        <p class="universal__text">МРЦ: <b>17 150</b> руб.</p>
                        <p class="universal__text">Цена закупки: <b>12 250</b> руб.</p>
                        <p class="universal__text">Рекомендуемая замена: </p>
                        <a href="#" class="universal__link"><b>RVi-1NCE2120 (2,8) white</b></a>


                                    
                        <div  id="<?=$itemIds['BASKET_ACTIONS_ID']?>" ><button class="button mt-3 mb-5" id="<?=$itemIds['ADD_BASKET_LINK']?>" ><img src="/local/templates/rvi/assets/img/cart-sm.svg" alt="" class="mr-2">Добавить</button></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <hr>
                    </hr>
                    <a class="catalog-detail__collapse" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
                        <div><img src="/local/templates/rvi/assets/img/characteristics-md.svg" alt=""></div>
                        <span class="catalog-detail__section">Технические характеристики</span>
                    </a>

                    <div class="collapse" id="collapseExample1">
                    
<?foreach(  $arResult['PROPERTY_GROUPS'] as $group):
$name=false?>		
                    <div class="technical__block">
<?foreach($group['LIST'] as $props): 
if(empty($arResult['PROPERTY_VALUES'][$props['CODE']] ))continue;
if($name===false){
    $name=$group['NAME'] ;
} else {
    $name="";
}
?>						
                        <div class="technical__item">
                            <div class="technical__title"><?=$name ?></div>
                            <div class="technical__name"><?=$props['NAME'] ?></div>
                            <div class="technical__value"><?=$arResult['PROPERTY_VALUES'][$props['CODE']] ?></div>
                        </div>
<?endforeach ?>						

                    </div>
<?endforeach ?>
                    </div>

                    <hr>
                    </hr>
                </div>
                <div class="col-12">
                    <a class="catalog-detail__collapse" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                        <div><img src="/local/templates/rvi/assets/img/accessories-md.svg" alt=""></div>
                        <span class="catalog-detail__section">Аксессуары</span>
                    </a>

                    <div class="collapse" id="collapseExample2">



                        <div class="accessories__category">
                            <div class="accessories__header">
                                <p class="accessories__title">Угловой монтаж</p>
                            </div>
                            <div class="accessories__item-box">
                                <div class="accessories__item access-item">
                                    <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                    <div class="access__picture">
                                        <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                    </div>
                                </div>
                                <div class="accessories__item access-item">
                                    <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                    <div class="access__picture">
                                        <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                    </div>
                                </div>
                                <div class="accessories__item access-item">
                                    <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                    <div class="access__picture">
                                        <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                    </div>
                                </div>
                                <div class="accessories__item access-item">
                                    <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                    <div class="access__picture">
                                        <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="splide" id="slider-accessories">
                                <div class="splide__track" data-splide-el="track">
                                    <ul class="splide__list">
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="splide__arrows" data-splide-el="controls">
                                    <button class="splide__arrow splide__arrow--prev" data-splide-dir="<"><img src="/local/templates/rvi/assets/img/arrow-left-md.svg" alt=""></button>
                                    <button class="splide__arrow splide__arrow--next" data-splide-dir=">"><img src="/local/templates/rvi/assets/img/arrow-right-md.svg" alt=""></button>
                                </div>
                            </div> -->
                        </div>
                        <div class="accessories__category">
                            <div class="accessories__header">
                                <p class="accessories__title">Крепление на опору</p>
                            </div>
                            <div class="accessories__items-container">
                                <div class="accessories__item-box">
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                </div>
                                <div class="accessories__item-box">
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                    <div class="accessories__item access-item">
                                        <a href="#" class="access__name">RVi-2NCD2044 <span class="access__count">(6)</span></a>
                                        <div class="access__picture">
                                            <img src="/local/templates/rvi/assets/img/camera2.png" alt="camera2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="splide" id="slider-accessories">
                                <div class="splide__track" data-splide-el="track">
                                    <ul class="splide__list">
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="splide__arrows" data-splide-el="controls">
                                    <button class="splide__arrow splide__arrow--prev" data-splide-dir="<"><img src="/local/templates/rvi/assets/img/arrow-left-md.svg" alt=""></button>
                                    <button class="splide__arrow splide__arrow--next" data-splide-dir=">"><img src="/local/templates/rvi/assets/img/arrow-right-md.svg" alt=""></button>
                                </div>
                            </div> -->
                        </div>
                    </div>

                    <hr>
                    </hr>
                </div>
                <div class="col-12">
                    <a class="catalog-detail__collapse" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample4">
                        <div><img src="/local/templates/rvi/assets/img/compatibility-md.svg" alt=""></div>
                        <span class="catalog-detail__section">Совместимость с ПО и регистраторами </span>
                    </a>

                    <div class="collapse" id="collapseExample5">
                        <div class="row py-5">
                            <div class="col-12 col-lg-9">
                                <div class="catalog-detail__table">
                                    <div class="catalog-detail__header">Поддержка</div>
                                    <div class="catalog-detail__header justify-content-center">ПО OPERATOR</div>
                                    <div class="catalog-detail__header justify-content-center">ПО INTEGRATOR</div>

                                    <div class="catalog-detail__cell align-items-center">
                                        <img src="/local/templates/rvi/assets/img/arrow-top-sm.svg" class="mr-2" alt="">
                                        <b>Функции управления </b>
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center"></div>
                                    <div class="catalog-detail__cell justify-content-center"></div>

                                    <div class="catalog-detail__cell">
                                        <input type="checkbox" name="" id="" class="mr-2" checked>
                                        Обнаружение и получение информации об устройстве
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center">ok</div>
                                    <div class="catalog-detail__cell justify-content-center">ok</div>

                                    <div class="catalog-detail__cell">
                                        <input type="checkbox" name="" id="" class="mr-2">
                                        Принудительная перезагрузка
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center">N/A</div>
                                    <div class="catalog-detail__cell justify-content-center">N/A</div>
                                </div>
                                <div class="catalog-detail__table">


                                    <div class="catalog-detail__cell align-items-center">
                                        <img src="/local/templates/rvi/assets/img/arrow-top-sm.svg" class="mr-2" alt="">
                                        <b>Кодеки</b>
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center"></div>
                                    <div class="catalog-detail__cell justify-content-center"></div>

                                    <div class="catalog-detail__cell">
                                        <input type="checkbox" name="" id="" class="mr-2" checked>
                                        Обнаружение и получение информации об устройстве
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center">ok</div>
                                    <div class="catalog-detail__cell justify-content-center">ok</div>

                                    <div class="catalog-detail__cell">
                                        <input type="checkbox" name="" id="" class="mr-2">
                                        Принудительная перезагрузка
                                    </div>
                                    <div class="catalog-detail__cell justify-content-center">N/A</div>
                                    <div class="catalog-detail__cell justify-content-center">N/A</div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="catalog-detail__exist exist">
                                    <p class="universal__text mb-5">Видеорегистраторы</p>
                                    <div><a href="#" class="universal__link">RVi-2NR16240</a></div>
                                    <div><a href="#" class="universal__link">RVi-2NR16240</a></div>
                                    <div><a href="#" class="universal__link">RVi-2NR16240</a></div>
                                    <div><a href="#" class="universal__link">RVi-2NR16240</a></div>
                                    <div><a href="#" class="universal__link">RVi-2NR16240</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr>
                    </hr>
                </div>
                <div class="col-12">
                    <a class="catalog-detail__collapse" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
                        <div><img src="/local/templates/rvi/assets/img/download.svg" alt=""></div>
                        <span class="catalog-detail__section">Скачать</span>
                    </a>

                    <div class="collapse" id="collapseExample3">
                        <div class="download__block">
                            <div class="download__item">
                                <div class="download__title">Документация</div>
                                <div class="download__value">
                                    <img src="" alt="">
                                    <a href="#" class="download__link"></a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/documentation-sm.svg" alt="">
                                    <a href="#" class="download__link">Инструкция «Быстрый старт» RVi-2NCD2044, RVi-2NCD6034</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/documentation-sm.svg" alt="">
                                    <a href="#" class="download__link"> Паспорт RVi-2NCD2044 (2.8/4/6/12)</a>
                                </div>
                            </div>

                        </div>

                        <div class="download__block">
                            <div class="download__item">
                                <div class="download__title">Прошивки</div>
                                <div class="download__value">
                                    <img src="" alt="">
                                    <a href="#" class="download__link"></a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/chip-sm.svg" alt="">
                                    <a href="#" class="download__link">
                                        RVi-1NCT2020 (2.8,3.6) RVi-1NCE2020 (2.8,3.6), RVi-1NCD2020 (2.8, 3.6), RVi-IPC32VB (2.8,4), RVi-1NCT2023 (2.8-12), RVi-1NCD2023 (2.8-12), RVi-1NCE2010 (2.8) white, RVi-1NCD2010 (2.8) white, RVi-1NCT2010 (2.8) white от 14.11.19</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/chip-sm.svg" alt="">
                                    <a href="#" class="download__link">
                                        RVi-1NCT2020 (2.8), RVi-1NCT2020 (3.6), RVi-1NCE2020 (3.6), RVi-1NCE2020 (2.8), RVi-1NCD2020 (2.8), RVi-1NCD2020 (3.6), RVi-IPC32VB (4) (дата производства от 2019 г), RVi-IPC32VB (2.8) (дата производства от 2019 г) от 29 04 2020</a>
                                </div>
                            </div>
                        </div>


                        <div class="download__block">
                            <div class="download__item">
                                <div class="download__title">Программное обеспечение</div>
                                <div class="download__value">
                                    <img src="" alt="">
                                    <a href="#" class="download__link"></a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/zip-sm.svg" alt="">
                                    <a href="#" class="download__link">Инструкция «Быстрый старт» RVi-2NCD2044, RVi-2NCD6034</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/zip-sm.svg" alt="">
                                    <a href="#" class="download__link"> Паспорт RVi-2NCD2044 (2.8/4/6/12)</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/exe-sm.svg" alt="">
                                    <a href="#" class="download__link">Инструкция «Быстрый старт» RVi-2NCD2044, RVi-2NCD6034</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/exe-sm.svg" alt="">
                                    <a href="#" class="download__link"> Паспорт RVi-2NCD2044 (2.8/4/6/12)</a>
                                </div>
                            </div>

                        </div>

                        <div class="download__block">
                            <div class="download__item">
                                <div class="download__title">Сертификаты</div>
                                <div class="download__value">
                                    <img src="" alt="">
                                    <a href="#" class="download__link"></a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/sertificate-sm.svg" alt="">
                                    <a href="#" class="download__link">Инструкция «Быстрый старт» RVi-2NCD2044, RVi-2NCD6034</a>
                                </div>
                            </div>
                            <div class="download__item">
                                <div class="download__title"></div>
                                <div class="download__value">
                                    <img src="/local/templates/rvi/assets/img/sertificate-sm.svg" alt="">
                                    <a href="#" class="download__link"> Паспорт RVi-2NCD2044 (2.8/4/6/12)</a>
                                </div>
                            </div>
                        </div>


                    </div>

                    <hr>
                    </hr>
                </div>
                <div class="col-12">
                    <a class="catalog-detail__collapse" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4">
                        <div><img src="/local/templates/rvi/assets/img/buy-with-md.svg" alt=""></div>
                        <span class="catalog-detail__section">С этим товаром покупают</span>
                    </a>

                    <div class="collapse" id="collapseExample4">
                        <div class="d-block d-lg-flex justify-content-center">
                            <div class="splide" id="slider-buy-with">
                                <div class="splide__track" data-splide-el="track">
                                    <ul class="splide__list row justify-content-center">
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="splide__slide">
                                            <div href="#" class="item">
                                                <a href="#" class="item__title">RVi-2NCD2044 (2.8) white</a>
                                                <p class="universal__text">Код товара: 1469028</p>
                                                <div class="item__spec">
                                                </div>
                                                <a href="" class="item__img">
                                                    <img src="/local/templates/rvi/assets/img/camera2.png" alt="">
                                                </a>

                                                <div class="d-flex flex-column flex-xxl-row justify-content-between align-items-start align-items-xxl-center mt-3">
                                                    <span class="item__price order-2 order-xxl-1">13 000 руб.</span>
                                                    <div class="d-flex mb-3 order-1 order-xxl-2">
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/indicator2.svg" alt="Наличие">
                                                        </a>
                                                        <a href="#" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/cart-md.svg" alt="В корзину">
                                                        </a>
                                                        <a href="/compare.html" class="item__compare">
                                                            <img src="/local/templates/rvi/assets/img/compare.svg" alt="Сравнить">
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="splide__arrows" data-splide-el="controls">
                                    <button class="splide__arrow splide__arrow--prev" data-splide-dir="<"><img src="/local/templates/rvi/assets/img/arrow-left-md.svg" alt=""></button>
                                    <button class="splide__arrow splide__arrow--next" data-splide-dir=">"><img src="/local/templates/rvi/assets/img/arrow-right-md.svg" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr>
                    </hr>
                </div>
<?
if(!empty($arResult['PROPERTIES']['FAQ_LIST']['VALUE'])){
$arParams['FAQ_LIST']=array_merge($arParams['FAQ_LIST'],$arResult['PROPERTIES']['FAQ_LIST']['VALUE']);
}


if(!empty($arParams['FAQ_LIST'])):

global $faqFilter;
$faqFilter['ID']=$arParams['FAQ_LIST'];
?>                      
                
<?$APPLICATION->IncludeComponent(
"bitrix:news.list", 
"faq.element", 
array(
"COMPONENT_TEMPLATE" => ".default",
"IBLOCK_TYPE" => "content",
"IBLOCK_ID" => "7",
"NEWS_COUNT" => "20",
"SORT_BY1" => "SORT",
"SORT_ORDER1" => "ASC",
"SORT_BY2" => "SORT",
"SORT_ORDER2" => "ASC",
"FILTER_NAME" => "faqFilter",
"FIELD_CODE" => array(
    0 => "",
    1 => "",
),
"PROPERTY_CODE" => array(
    0 => "",
    1 => "",
),
"CHECK_DATES" => "Y",
"DETAIL_URL" => "",
"AJAX_MODE" => "N",
"AJAX_OPTION_JUMP" => "N",
"AJAX_OPTION_STYLE" => "Y",
"AJAX_OPTION_HISTORY" => "N",
"AJAX_OPTION_ADDITIONAL" => "",
"CACHE_TYPE" => "A",
"CACHE_TIME" => "36000000",
"CACHE_FILTER" => "N",
"CACHE_GROUPS" => "Y",
"PREVIEW_TRUNCATE_LEN" => "",
"ACTIVE_DATE_FORMAT" => "d.m.Y",
"SET_TITLE" => "Y",
"SET_BROWSER_TITLE" => "N",
"SET_META_KEYWORDS" => "N",
"SET_META_DESCRIPTION" => "N",
"SET_LAST_MODIFIED" => "N",
"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
"ADD_SECTIONS_CHAIN" => "N",
"HIDE_LINK_WHEN_NO_DETAIL" => "N",
"PARENT_SECTION" => "",
"PARENT_SECTION_CODE" => "",
"INCLUDE_SUBSECTIONS" => "N",
"STRICT_SECTION_CHECK" => "N",
"DISPLAY_DATE" => "Y",
"DISPLAY_NAME" => "Y",
"DISPLAY_PICTURE" => "Y",
"DISPLAY_PREVIEW_TEXT" => "Y",
"PAGER_TEMPLATE" => ".default",
"DISPLAY_TOP_PAGER" => "N",
"DISPLAY_BOTTOM_PAGER" => "Y",
"PAGER_TITLE" => "Новости",
"PAGER_SHOW_ALWAYS" => "N",
"PAGER_DESC_NUMBERING" => "N",
"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
"PAGER_SHOW_ALL" => "N",
"PAGER_BASE_LINK_ENABLE" => "N",
"SET_STATUS_404" => "N",
"SHOW_404" => "N",
"MESSAGE_404" => ""
),
false
);?>
<?endif ?>

            </div>
        </div>
    </div>
</div>
</section>













<?
if ($haveOffers)
{
$offerIds = array();
$offerCodes = array();

$useRatio = $arParams['USE_RATIO_IN_RANGES'] === 'Y';

foreach ($arResult['JS_OFFERS'] as $ind => &$jsOffer)
{
$offerIds[] = (int)$jsOffer['ID'];
$offerCodes[] = $jsOffer['CODE'];

$fullOffer = $arResult['OFFERS'][$ind];
$measureName = $fullOffer['ITEM_MEASURE']['TITLE'];

$strAllProps = '';
$strMainProps = '';
$strPriceRangesRatio = '';
$strPriceRanges = '';

if ($arResult['SHOW_OFFERS_PROPS'])
{
    if (!empty($jsOffer['DISPLAY_PROPERTIES']))
    {
        foreach ($jsOffer['DISPLAY_PROPERTIES'] as $property)
        {
            $current = '<dt>'.$property['NAME'].'</dt><dd>'.(
                is_array($property['VALUE'])
                    ? implode(' / ', $property['VALUE'])
                    : $property['VALUE']
                ).'</dd>';
            $strAllProps .= $current;

            if (isset($arParams['MAIN_BLOCK_OFFERS_PROPERTY_CODE'][$property['CODE']]))
            {
                $strMainProps .= $current;
            }
        }

        unset($current);
    }
}

if ($arParams['USE_PRICE_COUNT'] && count($jsOffer['ITEM_QUANTITY_RANGES']) > 1)
{
    $strPriceRangesRatio = '('.Loc::getMessage(
            'CT_BCE_CATALOG_RATIO_PRICE',
            array('#RATIO#' => ($useRatio
                    ? $fullOffer['ITEM_MEASURE_RATIOS'][$fullOffer['ITEM_MEASURE_RATIO_SELECTED']]['RATIO']
                    : '1'
                ).' '.$measureName)
        ).')';

    foreach ($jsOffer['ITEM_QUANTITY_RANGES'] as $range)
    {
        if ($range['HASH'] !== 'ZERO-INF')
        {
            $itemPrice = false;

            foreach ($jsOffer['ITEM_PRICES'] as $itemPrice)
            {
                if ($itemPrice['QUANTITY_HASH'] === $range['HASH'])
                {
                    break;
                }
            }

            if ($itemPrice)
            {
                $strPriceRanges .= '<dt>'.Loc::getMessage(
                        'CT_BCE_CATALOG_RANGE_FROM',
                        array('#FROM#' => $range['SORT_FROM'].' '.$measureName)
                    ).' ';

                if (is_infinite($range['SORT_TO']))
                {
                    $strPriceRanges .= Loc::getMessage('CT_BCE_CATALOG_RANGE_MORE');
                }
                else
                {
                    $strPriceRanges .= Loc::getMessage(
                        'CT_BCE_CATALOG_RANGE_TO',
                        array('#TO#' => $range['SORT_TO'].' '.$measureName)
                    );
                }

                $strPriceRanges .= '</dt><dd>'.($useRatio ? $itemPrice['PRINT_RATIO_PRICE'] : $itemPrice['PRINT_PRICE']).'</dd>';
            }
        }
    }

    unset($range, $itemPrice);
}

$jsOffer['DISPLAY_PROPERTIES'] = $strAllProps;
$jsOffer['DISPLAY_PROPERTIES_MAIN_BLOCK'] = $strMainProps;
$jsOffer['PRICE_RANGES_RATIO_HTML'] = $strPriceRangesRatio;
$jsOffer['PRICE_RANGES_HTML'] = $strPriceRanges;
}

$templateData['OFFER_IDS'] = $offerIds;
$templateData['OFFER_CODES'] = $offerCodes;
unset($jsOffer, $strAllProps, $strMainProps, $strPriceRanges, $strPriceRangesRatio, $useRatio);

$jsParams = array(
'CONFIG' => array(
    'USE_CATALOG' => $arResult['CATALOG'],
    'SHOW_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
    'SHOW_PRICE' => true,
    'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'] === 'Y',
    'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'] === 'Y',
    'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
    'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
    'SHOW_SKU_PROPS' => $arResult['SHOW_OFFERS_PROPS'],
    'OFFER_GROUP' => $arResult['OFFER_GROUP'],
    'MAIN_PICTURE_MODE' => $arParams['DETAIL_PICTURE_MODE'],
    'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
    'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'] === 'Y',
    'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
    'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
    'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
    'USE_STICKERS' => true,
    'USE_SUBSCRIBE' => $showSubscribe,
    'SHOW_SLIDER' => $arParams['SHOW_SLIDER'],
    'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
    'ALT' => $alt,
    'TITLE' => $title,
    'MAGNIFIER_ZOOM_PERCENT' => 200,
    'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
    'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
    'BRAND_PROPERTY' => !empty($arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']])
        ? $arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']]['DISPLAY_VALUE']
        : null
),
'PRODUCT_TYPE' => $arResult['PRODUCT']['TYPE'],
'VISUAL' => $itemIds,
'DEFAULT_PICTURE' => array(
    'PREVIEW_PICTURE' => $arResult['DEFAULT_PICTURE'],
    'DETAIL_PICTURE' => $arResult['DEFAULT_PICTURE']
),
'PRODUCT' => array(
    'ID' => $arResult['ID'],
    'ACTIVE' => $arResult['ACTIVE'],
    'NAME' => $arResult['~NAME'],
    'CATEGORY' => $arResult['CATEGORY_PATH']
),
'BASKET' => array(
    'QUANTITY' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
    'BASKET_URL' => $arParams['BASKET_URL'],
    'SKU_PROPS' => $arResult['OFFERS_PROP_CODES'],
    'ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
    'BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE']
),
'OFFERS' => $arResult['JS_OFFERS'],
'OFFER_SELECTED' => $arResult['OFFERS_SELECTED'],
'TREE_PROPS' => $skuProps
);
}
else
{
$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
if ($arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !$emptyProductProperties)
{
?>
<div id="<?=$itemIds['BASKET_PROP_DIV']?>" style="display: none;">
    <?
    if (!empty($arResult['PRODUCT_PROPERTIES_FILL']))
    {
        foreach ($arResult['PRODUCT_PROPERTIES_FILL'] as $propId => $propInfo)
        {
            ?>
            <input type="hidden" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]" value="<?=htmlspecialcharsbx($propInfo['ID'])?>">
            <?
            unset($arResult['PRODUCT_PROPERTIES'][$propId]);
        }
    }

    $emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
    if (!$emptyProductProperties)
    {
        ?>
        <table>
            <?
            foreach ($arResult['PRODUCT_PROPERTIES'] as $propId => $propInfo)
            {
                ?>
                <tr>
                    <td><?=$arResult['PROPERTIES'][$propId]['NAME']?></td>
                    <td>
                        <?
                        if (
                            $arResult['PROPERTIES'][$propId]['PROPERTY_TYPE'] === 'L'
                            && $arResult['PROPERTIES'][$propId]['LIST_TYPE'] === 'C'
                        )
                        {
                            foreach ($propInfo['VALUES'] as $valueId => $value)
                            {
                                ?>
                                <label>
                                    <input type="radio" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]"
                                        value="<?=$valueId?>" <?=($valueId == $propInfo['SELECTED'] ? '"checked"' : '')?>>
                                    <?=$value?>
                                </label>
                                <br>
                                <?
                            }
                        }
                        else
                        {
                            ?>
                            <select name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]">
                                <?
                                foreach ($propInfo['VALUES'] as $valueId => $value)
                                {
                                    ?>
                                    <option value="<?=$valueId?>" <?=($valueId == $propInfo['SELECTED'] ? '"selected"' : '')?>>
                                        <?=$value?>
                                    </option>
                                    <?
                                }
                                ?>
                            </select>
                            <?
                        }
                        ?>
                    </td>
                </tr>
                <?
            }
            ?>
        </table>
        <?
    }
    ?>
</div>
<?
}

$jsParams = array(
'CONFIG' => array(
    'USE_CATALOG' => $arResult['CATALOG'],
    'SHOW_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
    'SHOW_PRICE' => !empty($arResult['ITEM_PRICES']),
    'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'] === 'Y',
    'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'] === 'Y',
    'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
    'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
    'MAIN_PICTURE_MODE' => $arParams['DETAIL_PICTURE_MODE'],
    'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
    'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'] === 'Y',
    'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
    'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
    'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
    'USE_STICKERS' => true,
    'USE_SUBSCRIBE' => $showSubscribe,
    'SHOW_SLIDER' => $arParams['SHOW_SLIDER'],
    'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
    'ALT' => $alt,
    'TITLE' => $title,
    'MAGNIFIER_ZOOM_PERCENT' => 200,
    'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
    'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
    'BRAND_PROPERTY' => !empty($arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']])
        ? $arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']]['DISPLAY_VALUE']
        : null
),
'VISUAL' => $itemIds,
'PRODUCT_TYPE' => $arResult['PRODUCT']['TYPE'],
'PRODUCT' => array(
    'ID' => $arResult['ID'],
    'ACTIVE' => $arResult['ACTIVE'],
    'PICT' => reset($arResult['MORE_PHOTO']),
    'NAME' => $arResult['~NAME'],
    'SUBSCRIPTION' => true,
    'ITEM_PRICE_MODE' => $arResult['ITEM_PRICE_MODE'],
    'ITEM_PRICES' => $arResult['ITEM_PRICES'],
    'ITEM_PRICE_SELECTED' => $arResult['ITEM_PRICE_SELECTED'],
    'ITEM_QUANTITY_RANGES' => $arResult['ITEM_QUANTITY_RANGES'],
    'ITEM_QUANTITY_RANGE_SELECTED' => $arResult['ITEM_QUANTITY_RANGE_SELECTED'],
    'ITEM_MEASURE_RATIOS' => $arResult['ITEM_MEASURE_RATIOS'],
    'ITEM_MEASURE_RATIO_SELECTED' => $arResult['ITEM_MEASURE_RATIO_SELECTED'],
    'SLIDER_COUNT' => $arResult['MORE_PHOTO_COUNT'],
    'SLIDER' => $arResult['MORE_PHOTO'],
    'CAN_BUY' => $arResult['CAN_BUY'],
    'CHECK_QUANTITY' => $arResult['CHECK_QUANTITY'],
    'QUANTITY_FLOAT' => is_float($arResult['ITEM_MEASURE_RATIOS'][$arResult['ITEM_MEASURE_RATIO_SELECTED']]['RATIO']),
    'MAX_QUANTITY' => $arResult['PRODUCT']['QUANTITY'],
    'STEP_QUANTITY' => $arResult['ITEM_MEASURE_RATIOS'][$arResult['ITEM_MEASURE_RATIO_SELECTED']]['RATIO'],
    'CATEGORY' => $arResult['CATEGORY_PATH']
),
'BASKET' => array(
    'ADD_PROPS' => $arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y',
    'QUANTITY' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
    'PROPS' => $arParams['PRODUCT_PROPS_VARIABLE'],
    'EMPTY_PROPS' => $emptyProductProperties,
    'BASKET_URL' => $arParams['BASKET_URL'],
    'ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
    'BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE']
)
);
unset($emptyProductProperties);
}

if ($arParams['DISPLAY_COMPARE'])
{
$jsParams['COMPARE'] = array(
'COMPARE_URL_TEMPLATE' => $arResult['~COMPARE_URL_TEMPLATE'],
'COMPARE_DELETE_URL_TEMPLATE' => $arResult['~COMPARE_DELETE_URL_TEMPLATE'],
'COMPARE_PATH' => $arParams['COMPARE_PATH']
);
}
?>
<script>
BX.message({
ECONOMY_INFO_MESSAGE: '<?=GetMessageJS('CT_BCE_CATALOG_ECONOMY_INFO2')?>',
TITLE_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_ERROR')?>',
TITLE_BASKET_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_BASKET_PROPS')?>',
BASKET_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_BASKET_UNKNOWN_ERROR')?>',
BTN_SEND_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_SEND_PROPS')?>',
BTN_MESSAGE_BASKET_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_BASKET_REDIRECT')?>',
BTN_MESSAGE_CLOSE: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE')?>',
BTN_MESSAGE_CLOSE_POPUP: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE_POPUP')?>',
TITLE_SUCCESSFUL: '<?=GetMessageJS('CT_BCE_CATALOG_ADD_TO_BASKET_OK')?>',
COMPARE_MESSAGE_OK: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_OK')?>',
COMPARE_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_UNKNOWN_ERROR')?>',
COMPARE_TITLE: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_TITLE')?>',
BTN_MESSAGE_COMPARE_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT')?>',
PRODUCT_GIFT_LABEL: '<?=GetMessageJS('CT_BCE_CATALOG_PRODUCT_GIFT_LABEL')?>',
PRICE_TOTAL_PREFIX: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_PRICE_TOTAL_PREFIX')?>',
RELATIVE_QUANTITY_MANY: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY'])?>',
RELATIVE_QUANTITY_FEW: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW'])?>',
SITE_ID: '<?=CUtil::JSEscape($component->getSiteId())?>'
});

var <?=$obName?> = new JCCatalogElement(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<?
unset($actualItem, $itemIds, $jsParams);