import { beverages, desserts } from './storeObjects.js';

const mainOrderContainer = document.querySelector(".order");

export function addOrder(type, name, price){
  //EKS (Small, Filterkaffe, 28)
  //Prøver å finne produkt med id, id er satt til å være '"#order"+type+name' eks, #OrderSmallFilterKaffe,  #orderBrownie.
  // r her er lik name uten whitespace for å unngå mellomrom i id.
  var r = name.replace(/ /g, "");
  var orderId = document.querySelector("#order"+type+r);

  //Om produktet ikke finnes i ordren legg den til.
  //Her blir id satt til containeren til hver unike ordre.
  if (orderId == null){
    const orderContainer = document.createElement("div");
    orderContainer.className = "productContainer";
    orderContainer.id = "order"+type+r;

    const orderName = document.createElement("H3");
    orderName.innerHTML = type + " " + name;
    orderName.className = "beverageNameLabel typeOfItem";

    const orderDetailsContainer = document.createElement("div");
    orderDetailsContainer.className = "orderDetailsContainer";

    const orderPrice = document.createElement("label");
    orderPrice.innerHTML = price + 'kr';

    const orderSubtractBtn = document.createElement("button");
    orderSubtractBtn.className = "subtract"
    orderSubtractBtn.innerHTML = "-";

    const orderInput = document.createElement("input");
    orderInput.type = "number";
    orderInput.step = "1"
    orderInput.value = 1;
    orderInput.min = 0;

    const orderAddBtn = document.createElement("button");
    orderAddBtn.className = "add"
    orderAddBtn.innerHTML = "+";

    orderDetailsContainer.appendChild(orderSubtractBtn);
    orderDetailsContainer.appendChild(orderInput);
    orderDetailsContainer.appendChild(orderAddBtn);

    orderContainer.appendChild(orderName);
    orderContainer.appendChild(orderPrice);
    orderContainer.appendChild(orderDetailsContainer);
    mainOrderContainer.appendChild(orderContainer)

    //Etter et nytt produkt er lagt til, legger vi ved 2 eventlisteners til både subtract og add knappene
    // og bruker stepUp/Down funksjonen til number inputs for å justere menge
    orderAddBtn.addEventListener("click", event => {
        event.target.parentNode.querySelector('input[type=number]').stepUp();
    }, false);

    orderSubtractBtn.addEventListener("click", event => {
      event.target.parentNode.querySelector('input[type=number]').stepDown();

        //På minus knappen vil vi også sjekke om mengden er nådd null for å så spørre om varen skal slettes.
        if(event.target.parentNode.querySelector('input[type=number]').value == 0){
          var a = confirm("Fjern produkt?");
          if(a == true){
            event.target.parentNode.parentNode.remove();
          }else {
            event.target.parentNode.querySelector('input[type=number]').value = 1;
          }
        }
    }, false);

  //Dersom produktet finnes skal vi heller finne dette, og øke det spesifike produktet sin input med "1" med bruk av step funksjonen.
  } else if (orderId != null){
    let order = document.querySelector('#'+orderId.id);
    let orderDetails = order.querySelector('.orderDetailsContainer');
    orderDetails.querySelector('input[type=number]').stepUp();
  }


}

export function checkout() {
  //var orderObj = [];
  let totalOrder = document.getElementsByClassName("productContainer");

  const allPreviousOrders = JSON.parse(window.localStorage.getItem("orderHistory")) || [];

  for(const order of totalOrder){
    let product = {
        type: "",
        name: "",
        price: 0,
        amount: 0,
        cost: 0
    }

    let productName = order.getElementsByClassName("typeOfItem")[0].innerHTML;
    let orderDetails = order.querySelector(".orderDetailsContainer");

    product.name = productName.split(" ")[1];
    product.type = productName.split(" ")[0];

    var r = order.querySelector('label').innerHTML;
    product.price = r.replace(/\D/g, '');
    product.amount = orderDetails.querySelector('input[type=number]').value;
    product.cost = product.price * product.amount;

    allPreviousOrders.push(product);
  }
  window.localStorage.setItem("orderHistory", JSON.stringify(allPreviousOrders));
}
