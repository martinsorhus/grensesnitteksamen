function settingUpLocalStorage () {

    let isLoggedIn = JSON.parse(window.localStorage.getItem("isLoggedIn")) || [];

    window.localStorage.setItem("isLoggedIn", JSON.stringify(false));

}

window.onload = settingUpLocalStorage;


function changeValueLoggedIn () {
    window.localStorage.setItem("isLoggedIn", JSON.stringify(true));
}

changeValueLoggedIn();