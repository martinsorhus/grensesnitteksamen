import { beverages, desserts } from './storeObjects.js';
import buttonsPressed from './buttonsPressedState.js';
import { settingUpNewOrderScreen } from './setUpNewOrderScreen.js';
import { createOrderHistory } from './settingUpPreviousOrdersScreen.js';
import { addOrder } from './addToCart.js';
import { checkout } from './addToCart.js';

const mainPageContainer = document.querySelector(".mainBox");
const tabs = document.getElementsByClassName("tablinks");
const totalPriceLabel = document.querySelector(".sum");
const checkOutBtn = document.querySelector(".checkOutBtn");

$(tabs[0]).click(function(){
  $(".mainBox").empty();
  settingUpNewOrderScreen();
});

$(tabs[1]).click(function(){
  $(".mainBox div").empty();
  createOrderHistory();
});
$(checkOutBtn).click(function(){
  checkout();
  $(".order div").empty();
  totalPriceLabel.innerHTML = "0kr";
});


document.body.addEventListener("click", event => {
    if (event.target.matches('.addBtn')) {

        let priceButtonPressed = event.target.textContent;

        let parentElement = event.target.parentElement.id;

        let typeOfProduct = event.target.value.toString();

        let searchForDigits = priceButtonPressed.replace(/\D/g, '');

        addOrder(typeOfProduct, parentElement, searchForDigits);

        let convertedTotalPrice = Number(totalPriceLabel.innerHTML.replace(/\D/g, ''));

        convertedTotalPrice += parseInt(searchForDigits);

        totalPriceLabel.innerHTML = convertedTotalPrice + "kr";

    }
})
