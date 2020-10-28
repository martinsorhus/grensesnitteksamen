const collappsable = document.getElementsByClassName("menuIcon")[0];

const takeAway = document.getElementsByClassName("takeAwayButtonDiv")[0];

const contentTable = document.getElementsByClassName("menuDropDown")[0];

const earlierOrdersBtn = document.createElement("P");

earlierOrdersBtn.innerHTML = "Tidligere Bestillinger";



collappsable.addEventListener("click", () => {
    alert("HEY");
});


(function () {
    takeAway.appendChild(collappsable);

    takeAway.style.backgroundColor = "blue";
})();
