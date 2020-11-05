import { beverages, desserts } from './storeObjects.js';
import { settingUpNewOrderScreen } from './setUpNewOrderScreen.js';
import { createOrderHistory } from './settingUpPreviousOrdersScreen.js';
import { deleteOrderHistory } from './settingUpPreviousOrdersScreen.js';
import { addOrder } from './addToCart.js';
import { checkout } from './addToCart.js';

const mainPageContainer = document.querySelector(".mainBox");
const totalPriceLabel = document.querySelector(".sum");
const checkOutBtn = document.querySelector(".checkOutBtn");
var orderVolume;

var searchForDigits;

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
	var tabs = document.querySelectorAll("#dessertButton, #beverageButton, #currentOrderButton, #previousOrderButton");
	var r = null;

	r = $.grep(tabs, function(e){ return e.id == "dessertButton"; });
	$(r).click(function() {
		$("#dessertContainer div").empty();
		$("#dessertContainer").empty();
		if($("#dessertContainer").css("display") == "none") {
			openPage("dessertContainer");
			settingUpNewOrderScreen("desserts");
			document.getElementById("dessertContainer").scrollIntoView({ behavior: 'smooth', block: 'start'});
		} else {
			$("#dessertContainer").css("display", "none");
		}
	});

	r = $.grep(tabs, function(e){ return e.id == "beverageButton"; });
	$(r).click(function() {
		$("#drikkeContainer div").empty();
		$("#drikkeContainer").empty();
		if($("#drikkeContainer").css("display") == "none") {
			openPage("drikkeContainer");
			settingUpNewOrderScreen("drinks");
			document.getElementById("drikkeContainer").scrollIntoView({ behavior: 'auto', block: 'start'});

		} else {
			$("#drikkeContainer").css("display", "none");
		}
	});

	r = $.grep(tabs, function(e){ return e.id == "currentOrderButton"; });
	$(r).click(function() {
		if($("#currentOrderContainer").css("display") == "none" & $("#previousOrderContainer").css("display") == "none") {
			openPage("currentOrderContainer");
			$(".orderVolumeIcon").css("display", "none");

			$('#currentOrderButton').text("Tilbake");
			$('#previousOrderButton').text("Checkout");
			$('#previousOrderButton').addClass("checkOutBtn");
		} else {
			$('#currentOrderButton').text("Din bestilling");
			$('#previousOrderButton').text("Tidligere bestillinger");

			$(".orderVolumeIcon").css("display", "block");
			$("#currentOrderContainer").css("display", "none");
			$("#previousOrderContainer").css("display", "none");
		}
	});

	r = $.grep(tabs, function(e){ return e.id == "previousOrderButton"; });
	$(r).click(function() {
		if($("#previousOrderContainer").css("display") == "none" & $("#currentOrderContainer").css("display") == "none") {
			openPage("previousOrderContainer");
			$(".orderVolumeIcon").css("display", "none");

			$('#currentOrderButton').text("Tilbake");
			$('#previousOrderButton').text("Slett historikk");

			createOrderHistory();
		} else if ($("#currentOrderContainer").css("display") !== "none") {
			checkout();
			$(".order").empty();
			updateTotalValue(0, "clear");
			updateOrderVolumeCount();
			
			$("#currentOrderContainer").css("display", "none");
			$(".orderVolumeIcon").css("display", "block");

			$('#currentOrderButton').text("Din bestilling");
			$('#previousOrderButton').text("Tidligere bestillinger");
		} else if ($("#previousOrderContainer").css("display") !== "none") {
			deleteOrderHistory();
			$("#orderHistoryContainer").empty();
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
		let parentElement = event.target.parentElement.parentElement.id;
		let typeOfProduct = event.target.value.toString();
		searchForDigits = priceButtonPressed.replace(/\D/g, '');
		addOrder(typeOfProduct, parentElement, searchForDigits);
		updateTotalValue(searchForDigits, "add");
	}
})

export function updateTotalValue(number, type) {
	if(type == "add"){
		let convertedTotalPrice = Number(totalPriceLabel.innerHTML.replace(/\D/g, ''));
		convertedTotalPrice += parseInt(number);
		totalPriceLabel.innerHTML = convertedTotalPrice + "kr";
	} else if (type == "subtract") {

		let convertedTotalPrice = Number(totalPriceLabel.innerHTML.replace(/\D/g, ''));
		convertedTotalPrice -= parseInt(number);
		totalPriceLabel.innerHTML = convertedTotalPrice + "kr";
	} else if (type == "clear") {
		totalPriceLabel.innerHTML = number + "kr";
	}
}

export function updateOrderVolumeCount () {
	orderVolume = $(".order > div").length;
	$("#orderVolumeCount").text(orderVolume);
}
