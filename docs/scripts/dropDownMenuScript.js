const collappsable = document.getElementsByClassName("menuIcon");

const takeAway = document.getElementsByClassName("takeAwayButtonDiv");

const contentTable = document.getElementsByClassName("menuDropDown");

const earlierOrdersBtn = document.createElement("P");

earlierOrdersBtn.innerHTML = "Tidligere Bestillinger";



collappsable.addEventListener("click", () => {

    alert("HEY");
});


(function () {
    takeAway.appendChild(collappsable);

    takeAway.style.backgroundColor = "blue";
})();
