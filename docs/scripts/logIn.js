
(function settingUpLocalStorage () {

    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));

    window.localStorage.setItem("isLoggedIn", JSON.stringify(false));

})();




function changeValueLoggedIn () {

    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
    window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
}





// DENNE MÅ FLYTTES
function checkLoggedIn () {
    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
    alert(isLoggedIn);
}
