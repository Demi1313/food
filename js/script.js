'use strict';

import  tabs from './modules/tabs';
        import modal from './modules/modal';
        import timer from './modules/timer';
        import cards from './modules/cards';
        import calc from './modules/calc';
        import forms from './modules/forms';
        import slider from './modules/slider';
        import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);

    tabs('.tabheader__item', '.tabcontent', '.tabcontainer', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-06-08');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
});

 