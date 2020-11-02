import { beverages, desserts } from './storeObjects.js';
import buttonsPressed from './buttonsPressedState.js';
import { settingUpNewOrderScreen } from './setUpNewOrderScreen.js';
import { createOrderHistory } from './settingUpPreviousOrdersScreen.js';
import { addOrder } from './addToCart.js';
import { checkout } from './addToCart.js';

// const newOrderButton = document.querySelector(".newOrderBtn");
// newOrderButton.onclick = openTab(event, '.newOrderContainer');

function openTab (evt, nameTab) {

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.querySelector(nameTab).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();

/* function resetState () {

    for ( let pButton in buttonsPressed ) {
        pButton = false;
    }

} */
/* const newOrderBtn = document.querySelector(".newOrderBtn");

newOrderBtn.addEventListener("click", () => {

    if ( !buttonsPressed.newOrderButton ) {

        resetState();

        buttonsPressed.newOrderButton = true;

        displayContentInMainBox();
    }  else {
        return;
    }
}) */

/* const previousOrdersBtn = document.querySelector(".previousOrderBtn");

previousOrdersBtn.addEventListener("click", () => {

    if ( !buttonsPressed.previousOrdersButton ) {

        resetState();

        buttonsPressed.previousOrdersButton = true;
        displayContentInMainBox();
    } else {
      return;
    }


}) 
*/

/* const checkOutBtn = document.querySelector(".checkOutBtn");

checkOutBtn.addEventListener("click", () => {

    resetState();

    buttonsPressed.checkOutButton = true;
    checkout();
})

 


function displayContentInMainBox () {

    if ( buttonsPressed.newOrderButton ) {
        settingUpNewOrderScreen();
    } else if ( buttonsPressed.previousOrdersButton ) {
        createOrderHistory();
    }
}
*/


/* document.body.addEventListener("click", event => {
    if(event.target.closest('.typeOfItem')) {
        let typeOfItemPurchased = event.target.textContent;
        console.log(typeOfItemPurchased)
    }
}) */

const totalPriceLabel = document.querySelector(".sum");


document.body.addEventListener("click", event => {
    if (event.target.matches('.addBtn')) {

        let priceButtonPressed = event.target.textContent;

        let parentElement = event.target.parentElement.id;

        let typeOfProduct = event.target.value.toString();

        let searchForDigits = priceButtonPressed.replace(/\D/g, '');

        addOrder(typeOfProduct, parentElement, searchForDigits);

        let convertedTotalPrice = Number(totalPriceLabel.innerHTML); 
        
        convertedTotalPrice += parseInt(searchForDigits);

        totalPriceLabel.innerHTML = convertedTotalPrice;


    }
})


