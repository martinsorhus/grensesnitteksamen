import { beverages, desserts } from '../../ansatt/js/storeObjects.js';

const drinkOptionsContainer = document.querySelector(".drinkOptionsContainer");

const dessertOptionsContainer = document.querySelector(".dessertOptionsContainer");

function fillDrinkMenu () {
    for ( const beverage of beverages ) {

        const beverageContainer = document.createElement("div");
        beverageContainer.className = "beverageContainer";
        beverageContainer.id = beverage.type;


        const beverageName = document.createElement("H3");
        beverageName.innerHTML = beverage.type;
        beverageName.className = "beverageNameLabel typeOfItem";

        const beverageSmallPriceBtn = document.createElement("button");
        beverageSmallPriceBtn.className = "beverageButton addBtn";

        const beverageMediumPriceBtn = document.createElement("button");
        beverageMediumPriceBtn.className = "beverageButton addBtn";

        const beverageBigPriceBtn = document.createElement("button");
        beverageBigPriceBtn.className = "beverageButton addBtn";

        beverageSmallPriceBtn.innerText = beverage.small_price + 'kr';
        beverageMediumPriceBtn.innerText = beverage.medium_price + 'kr';
        beverageBigPriceBtn.innerText = beverage.big_price + 'kr';

        beverageSmallPriceBtn.value = "Small";
        beverageMediumPriceBtn.value = "Medium";
        beverageBigPriceBtn.value = "Big";

        beverageContainer.appendChild(beverageName);
        beverageContainer.appendChild(beverageSmallPriceBtn);
        beverageContainer.appendChild(beverageMediumPriceBtn);
        beverageContainer.appendChild(beverageBigPriceBtn);

        drinkOptionsContainer.appendChild(beverageContainer);

    }
}

function fillDessertMenu () {

    for ( const dessert of desserts ) {

        const dessertContainer = document.createElement("div");
        dessertContainer.className = "dessertContainer";
        dessertContainer.id = dessert.type;

        const dessertName = document.createElement("H3");
        dessertName.innerHTML = dessert.type;
        dessertName.className = "dessertNameLabel typeOfItem";


        const dessertPurchaseButtonContainer = document.createElement("button");
        dessertPurchaseButtonContainer.className = "dessertPurchaseButtonContainer addBtn";

        dessertPurchaseButtonContainer.innerText = dessert.price + 'kr';

        dessertContainer.appendChild(dessertName);
        dessertContainer.appendChild(dessertPurchaseButtonContainer);

        dessertOptionsContainer.appendChild(dessertContainer);
    }
}