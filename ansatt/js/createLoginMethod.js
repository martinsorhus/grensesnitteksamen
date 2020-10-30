let box = document.createElement("H1");
box.innerHTML = "HEIIII";

const description = document.querySelector(".logInDescription");
const inputFieldName = document.querySelector(".inputFieldLogInName");
const submitBtn = document.querySelector(".logInBtn");

const mainBox = document.querySelector(".inputContainer");

let createLoginBtn = document.querySelector(".sideBarBtn");

let screenIsCreateLogins = false;

createLoginBtn.addEventListener("click", () => {

    if(!screenIsCreateLogins) {

        description.innerHTML = "Opprett ny innlogging, 4 siffer og navn";
        inputFieldName.style.display = "block";
        submitBtn.innerHTML = "Opprett";
        screenIsCreateLogins = true;
        createLoginBtn.innerHTML = "Tilbake";
    } else {
        description.innerHTML ="Logg inn med ansattkode";
        inputFieldName.style.display = "none";
        submitBtn.innerHTML = "Logg inn";
        screenIsCreateLogins = false;
        createLoginBtn.innerHTML = "Opprett innlogging";

    }
})

const inputCode = document.querySelector(".inputFieldLogIn");

submitBtn.addEventListener("click", () => {

    let hasErrorMessageShown = false;

    if (screenIsCreateLogins) {
        if((!inputFieldName.value) || (!inputCode.value)) {

            if(!hasErrorMessageShown) {
                const errorMessage = document.createElement("H3");
                errorMessage.style.color = "red";
                errorMessage.style.textAlign = "center";
                errorMessage.innerText = "Fyll inn begge feltene for å opprette en innloggingsmetode";
                mainBox.appendChild(errorMessage);
                hasErrorMessageShown = true;

            }
            
        } else {
    
            const validLogins = JSON.parse(window.localStorage.getItem("GyldigeInnlogginger")) || [];
    
            validLogins.push({name: inputFieldName.value, kode: inputCode.value});
    
            window.localStorage.setItem("GyldigeInnlogginger", JSON.stringify(validLogins));
    
            event.target.reset();
        }
    } else {

        const kodeListe = JSON.parse(window.localStorage.getItem("GyldigeInnlogginger")) || [];

        for(const kode of kodeListe) {
            if (kode.kode === inputCode.value) {
                alert("riktig");
        } else {
            alert("feil");
        }
        

        }

    }


})