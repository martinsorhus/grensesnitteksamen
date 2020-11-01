import { beverages, desserts } from './storeObjects.js';
import buttonsPressed from './buttonsPressedState.js';
import { settingUpNewOrderScreen } from './setUpNewOrderScreen.js';





function resetState () {

    for ( let pButton in buttonsPressed ) {
        pButton = false;
    }

} 

const newOrderBtn = document.querySelector(".newOrderBtn");

newOrderBtn.addEventListener("click", () => {

    if ( !buttonsPressed.newOrderButton ) {

        resetState();
    
        buttonsPressed.newOrderButton = true;

        displayContentInMainBox();
    }  else {
        return;
    }
})

const previousOrdersBtn = document.querySelector(".previousOrderBtn");

previousOrdersBtn.addEventListener("click", () => {

    if ( !buttonsPressed.previousOrdersButton ) {

        resetState();

        buttonsPressed.previousOrdersButton = true;
    }


})

const checkOutBtn = document.querySelector(".checkOutBtn");

checkOutBtn.addEventListener("click", () => {
    
    resetState();

    buttonsPressed.checkOutButton = true;
})


function displayContentInMainBox () {

    if ( buttonsPressed.newOrderButton ) {
        settingUpNewOrderScreen();
    } else if ( buttonsPressed.previousOrdersButton ) {
    
    }
}

let order = JSON.parse(window.localStorage.getItem("ActiveOrder")) || [];

/* document.body.addEventListener("click", event => {
    if(event.target.closest('.typeOfItem')) {
        let typeOfItemPurchased = event.target.textContent;
        console.log(typeOfItemPurchased)
    }
}) */ 


document.body.addEventListener("click", event => {
    if (event.target.matches('.addBtn')) {

        let priceButtonPressed = event.target.textContent;

        let parentElement = event.target.parentElement.textContent;

        let nameOfProduct;

        let searchForDigits = /\d+/;

        for (let i=0; i < parentElement.length; i++) {
            while ( i !== searchForDigits ) {
                nameOfProduct += i;
            }
        }

        console.log(priceButtonPressed);
        console.log(nameOfProduct);
        
    }
})











