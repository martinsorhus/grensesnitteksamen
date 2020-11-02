import { beverages, desserts } from './storeObjects.js';

const drinkContainerLeftSide = document.createElement("div");
const dessertContainerRightSide = document.createElement("div");

drinkContainerLeftSide.className = "itemContainer";
dessertContainerRightSide.className = "itemContainer";
const mainPageContainer = document.querySelector(".mainBox");

function creatingDrinkMenu () {

    for ( const beverage of beverages) {

        const beverageContainer = document.createElement("div");
        beverageContainer.className = "beverageContainer";
        beverageContainer.id = beverage.type;

        const beverageName = document.createElement("H3");
        beverageName.innerHTML = beverage.type;
        beverageName.className = "beverageNameLabel typeOfItem";


        /* const beverageButtonContainer = document.createElement("div");
        beverageButtonContainer.className = "beverageButtonContainer"; */

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
        /* beverageButtonContainer.appendChild(beverageSmallPriceBtn);
        beverageButtonContainer.appendChild(beverageMediumPriceBtn);
        beverageButtonContainer.appendChild(beverageBigPriceBtn); */

        beverageContainer.appendChild(beverageName);
        beverageContainer.appendChild(beverageSmallPriceBtn);
        beverageContainer.appendChild(beverageMediumPriceBtn);
        beverageContainer.appendChild(beverageBigPriceBtn);
         // beverageContainer.appendChild(beverageButtonContainer);

        drinkContainerLeftSide.appendChild(beverageContainer);


    }

    mainPageContainer.appendChild(drinkContainerLeftSide);

}

function creatingDessertMenu () {

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

        dessertContainerRightSide.appendChild(dessertContainer);
    }

    mainPageContainer.appendChild(dessertContainerRightSide);
}

export function settingUpNewOrderScreen () {

    mainPageContainer.style.display = "flex";

    creatingDrinkMenu();
    creatingDessertMenu();

}
