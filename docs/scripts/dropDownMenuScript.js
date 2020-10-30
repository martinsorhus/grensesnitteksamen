// import { checkIfLoggedIn } from 'checkIfLoggedIn';

let collappsable = document.querySelector(".menuIcon");

// const takeAway = document.querySelector(".takeAwayButtonDiv");

const contentTable = document.querySelector(".menuDropDown");

let menuButtonClicked = false;

collappsable.addEventListener("click", () => {
    if ( !menuButtonClicked ) {
        contentTable.style.display = "block";
        menuButtonClicked = true;
    } else {
        contentTable.style.display = "none";
        menuButtonClicked = false;
    }
})




/* collappsable.addEventListener("click", () => {
    // menuButtonClicked = false ? openMenu() : closeMenu();
    contentTable.style.transform = "translate(300px, 0px)";
    contentTable.style.transition = "all 1s";
}); 

function openMenu() {
    // Opprette liste og elementer
    const listContainer = document.createElement("div");
    listContainer.style.display = "flex";
    const earlierOrdersBtn = document.createElement("P");
    const earlierBtnText = document.createTextNode("Tidligere bestillinger");
    earlierOrdersBtn.appendChild(earlierBtnText);
    listContainer.appendChild(earlierOrdersBtn);
    collappsable.appendChild(listContainer);
}

function closeMenu() {

}
/* if (contentTable.style.maxHeight == "0") {        
    contentTable.style.maxHeight = "300px";
    contentTable.style.height = "300px";
    // contentTable.style.display = "block";
    collappsable.innerHTML = "X";
    // createMenuItems();
}  else {
        contentTable.style.height = "0";
        collappsable.innerHTML = "=";
} 

collappsable.addEventListener("click", () => {
    if (contentTable.style.maxHeight !== "0") {
        contentTable.style.maxHeight = "0";
        collappsable.innerHTML = "=";
    }
});

function createMenuItems () {
    
    
} */
