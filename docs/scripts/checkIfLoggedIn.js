// export { checkIfLoggedIn };

(function settingUpLocalStorage () {

    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));

    window.localStorage.setItem("isLoggedIn", JSON.stringify(false));

})();

function checkLoggedIn () {
    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
    alert(isLoggedIn);
}

// window.onload = settingUpLocalStorage;


function changeValueLoggedIn () {

    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn"));
    window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
}

checkIfLoggedIn();