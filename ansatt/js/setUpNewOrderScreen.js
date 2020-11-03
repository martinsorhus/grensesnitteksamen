import { beverages, desserts } from './storeObjects.js';

const drinkContainer = document.getElementById("drikkeContainer");
const dessertContainer = document.getElementById("dessertContainer");

const mainPageContainer = document.querySelector(".mainBox");

function creatingDrinkMenu (container) {
    for ( const beverage of beverages) {
        const beverageProductContainer = document.createElement("div");
        beverageProductContainer.className = "productContainer";
        beverageProductContainer.id = beverage.type;

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

        beverageProductContainer.appendChild(beverageName);
        beverageProductContainer.appendChild(beverageSmallPriceBtn);
        beverageProductContainer.appendChild(beverageMediumPriceBtn);
        beverageProductContainer.appendChild(beverageBigPriceBtn);

        drinkContainer.appendChild(beverageProductContainer);
    }
    if(container != drinkContainer){
    container.appendChild(drinkContainer);
  }
}

function creatingDessertMenu (container) {
    for ( const dessert of desserts ) {
        const dessertProductContainer = document.createElement("div");
        dessertProductContainer.className = "productContainer";
        dessertProductContainer.id = dessert.type;

        const dessertName = document.createElement("H3");
        dessertName.innerHTML = dessert.type;
        dessertName.className = "dessertNameLabel typeOfItem";


        const dessertPurchaseButtonContainer = document.createElement("button");
        dessertPurchaseButtonContainer.className = "dessertPurchaseButtonContainer addBtn";

        dessertPurchaseButtonContainer.innerText = dessert.price + 'kr';

        dessertProductContainer.appendChild(dessertName);
        dessertProductContainer.appendChild(dessertPurchaseButtonContainer);

        dessertContainer.appendChild(dessertProductContainer);
    }
    if(container != dessertContainer){
    container.appendChild(dessertContainer);
  }
}

export function settingUpNewOrderScreen (category) {
    if(mainPageContainer != null){
      drinkContainer.className = "itemContainer";
      dessertContainer.className = "itemContainer";
      mainPageContainer.style.display = "flex";
      creatingDrinkMenu(mainPageContainer);
      creatingDessertMenu(mainPageContainer);
  } else {
      if(category == "drinks"){
      creatingDrinkMenu(drikkeContainer);
  } else if(category == "desserts"){
      creatingDessertMenu(dessertContainer);
    }
  }
}
