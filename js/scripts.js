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

let toppingPrice = {
    onSmallSize: {
        Pepperoni: [150, 200, 320, 550, 200, 400, 390, 390],
        Onion: [160, 240, 370, 570, 240, 400, 410, 450],
        Bacon: [170, 230, 370, 570, 204, 440, 410, 440]
    },
    onMediumSize: {
        Pepperoni: [170, 270, 380, 650, 250, 470, 490, 450],
        Onion: [180, 280, 410, 650, 260, 470, 490, 450],
        Bacon: [170, 270, 380, 650, 250, 470, 490, 450]
    },
    onLargeSize: {
        Pepperoni: [190, 290, 410, 750, 300, 480, 490, 490],
        Onion: [190, 290, 410, 750, 300, 480, 490, 510],
        Bacon: [200, 300, 420, 770, 320, 490, 500, 530]
    }
};
let sizePrice = {
    smallSize: [730, 1200, 1320, 950, 1000, 1700, 1390, 1790],
    mediumSize: [900, 1300, 1720, 1250, 1400, 2200, 1690, 2090],
    largeSize: [1700, 2400, 2320, 1950, 1700, 2800, 2390, 2790]
}

