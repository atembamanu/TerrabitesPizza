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


let UserChoice = function (size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;

}
//user interface logic
$(document).ready(function () {
    $("#scrollToProducts").click(function () {
        window.scrollTo($("#pizza_pricing"));
    });
    $('#pizza01').mouseenter(function () {
        $('#btnpizza01').show('slow');
        $('.badge01').show('slow');

    }).mouseleave(function () {
        $('#btnpizza01').hide('slow');
        $('.badge01').hide('slow');

    });
    $('#pizza02').mouseenter(function () {
        $('#btnpizza02').show('slow');
        $('.badge02').show('slow');

    }).mouseleave(function () {
        $('#btnpizza02').hide('slow');
        $('.badge02').hide('slow');

    });
    $('#pizza03').mouseenter(function () {

        $('#btnpizza03').show('slow');
        $('.badge03').show('slow');

    }).mouseleave(function () {

        $('#btnpizza03').hide('slow');
        $('.badge03').hide('slow');

    });
    $('#pizza04').mouseenter(function () {

        $('#btnpizza04').show('slow');
        $('.badge04').show('slow');

    }).mouseleave(function () {

        $('#btnpizza04').hide('slow');
        $('.badge04').hide('slow');

    });
    $('#pizza05').mouseenter(function () {

        $('#btnpizza05').show('slow');
        $('.badge05').show('slow');

    }).mouseleave(function () {

        $('#btnpizza05').hide('slow');
        $('.badge05').hide('slow');

    });
    $('#pizza06').mouseenter(function () {
        $('#btnpizza06').show('slow');
        $('.badge06').show('slow');

    }).mouseleave(function () {
        $('#btnpizza06').hide('slow');
        $('.badge06').hide('slow');

    });
    $('#pizza07').mouseenter(function () {

        $('#btnpizza07').show('slow');
        $('.badge07').show('slow');

    }).mouseleave(function () {

        $('#btnpizza07').hide('slow');
        $('.badge07').hide('slow');

    });
    $('#pizza08').mouseenter(function () {
        $('#btnpizza08').show('slow');
        $('.badge08').show('slow');
    }).mouseleave(function () {
        $('#btnpizza08').hide('slow');
        $('.badge08').hide('slow');

    });
