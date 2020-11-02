const orderHistoryContainer = document.createElement("div");

orderHistoryContainer.className = "orderHistoryContainer";

const mainPageContainer = document.querySelector(".mainBox");

export function createOrderHistory () {

  const allPreviousOrders = JSON.parse(window.localStorage.getItem("orderHistory")) || [];
  mainPageContainer.innerHTML = "";

  for(const order of allPreviousOrders){
    const orderContainer = document.createElement("div");
    let totalCost = 0;
    orderContainer.className = "orderContainer";
    orderContainer.id = "";

    for(const product of order){
      const productContainer = document.createElement("div");
      productContainer.className = "";

      const productDetailsContainer = document.createElement("div");
      productDetailsContainer.className = "productDetailsContainer";

      const productName = document.createElement("H3");
      productName.innerHTML = product.type + " " + product.name;
      productName.className = "typeOfItem";

      const productPrice = document.createElement("Label");
      productPrice.innerHTML = "(" + product.price+"kr x " + product.amount + ")";
      productPrice.className = "";

      const productCost = document.createElement("H4");
      productCost.innerHTML = product.cost + "kr";
      productCost.className = "";

      productDetailsContainer.appendChild(productPrice);
      productDetailsContainer.appendChild(productCost);

      productContainer.appendChild(productName);
      productContainer.appendChild(productDetailsContainer);
      orderContainer.appendChild(productContainer);

      orderHistoryContainer.appendChild(orderContainer);
      totalCost += product.cost;
    }
    const totalCostLabel = document.createElement("H2");
    totalCostLabel.innerHTML = "Total: " + totalCost + "kr";
    totalCostLabel.className = "orderTotal";
    orderContainer.appendChild(totalCostLabel);

    mainPageContainer.appendChild(orderHistoryContainer);
  }
}
