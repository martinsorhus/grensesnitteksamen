import { beverages, desserts } from './storeObjects.js';
import { settingUpNewOrderScreen } from './setUpNewOrderScreen.js';
import { createOrderHistory } from './settingUpPreviousOrdersScreen.js';
import { addOrder } from './addToCart.js';
import { checkout } from './addToCart.js';

const mainPageContainer = document.querySelector(".mainBox");
const totalPriceLabel = document.querySelector(".sum");
const checkOutBtn = document.querySelector(".checkOutBtn");
if(mainPageContainer != null) {
	const tabs = document.getElementsByClassName("tablinks");
	$(tabs[0]).click(function() {
		$(".mainBox div").empty();
		$(".mainBox").empty();
		settingUpNewOrderScreen();
	});
	$(tabs[1]).click(function() {
		$(".mainBox div").empty();
		createOrderHistory();
	});
	$(checkOutBtn).click(function() {
		checkout();
		$(".order div").empty();
		$(".order").empty();
		totalPriceLabel.innerHTML = "0kr";
	});
} else {
	const tabs = document.getElementsByClassName("tablinks");
	$(tabs[0]).click(function() {
		$("#dessertContainer div").empty();
		$("#dessertContainer").empty();
		if($("#dessertContainer").css("display") == "none") {
			openPage("dessertContainer");
			settingUpNewOrderScreen("desserts");
		} else {
			$("#dessertContainer").css("display", "none");
		}
	});
	$(tabs[1]).click(function() {
		$("#drikkeContainer div").empty();
		$("#drikkeContainer").empty();
		if($("#drikkeContainer").css("display") == "none") {
			openPage("drikkeContainer");
			settingUpNewOrderScreen("drinks");
		} else {
			$("#drikkeContainer").css("display", "none");
		}
	});
	$(tabs[2]).click(function() {

		if($("#orderContainer").css("display") == "none") {
			openPage("orderContainer");
		} else {
			$("#orderContainer").css("display", "none");
		}
	});

	function openPage(pageName) {
		// Hide all elements with class="tabcontent" by default */
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for(i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		document.getElementById(pageName).style.display = "flex";
	}
}
document.body.addEventListener("click", event => {
	if(event.target.matches('.addBtn')) {
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
