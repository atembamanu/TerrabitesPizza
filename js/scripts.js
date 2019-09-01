//business logic
"use strict";
let pizzaPricesIDs = [];
let pizzaCards = [];
let addToBasketBtns = [];
let viewBasket = [];
let addToBasket = [];
let msubs = [];
let pCrust = '';
let pTopping = '';
let pSize = '';
let i = 0;
let crustPrice = {
    onSmallSize: {
        Crispy: [150, 200, 320, 550, 200, 400, 390, 390],
        Stuffed: [160, 240, 370, 570, 240, 400, 410, 450],
        GlutterFree: [170, 230, 370, 570, 204, 440, 410, 440]
    },
    onMediumSize: {
        Crispy: [170, 270, 380, 650, 250, 470, 490, 450],
        Stuffed: [180, 280, 410, 650, 260, 470, 490, 450],
        GlutterFree: [170, 270, 380, 650, 250, 470, 490, 450]
    },
    onLargeSize: {
        Crispy: [190, 290, 410, 750, 300, 480, 490, 490],
        Stuffed: [190, 290, 410, 750, 300, 480, 490, 510],
        GlutterFree: [190, 290, 410, 750, 300, 480, 490, 520]
    }
};
