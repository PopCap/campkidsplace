var regDiv = document.getElementById("regInfo");
var parentForm = document.getElementById("parentForm");
var contButton = document.getElementById("continue");
var backButton = document.getElementById("back");
var camperTotal = document.getElementById("regTotal");

var styleTop = document.createElement('style');

var camperFormStyle = '\
@keyframes infinityBannerTop {\
    0% {\
        transform: translateX(0);\
    }\
    100% {\
        transform: translateX(TRANSLATE_DISTANCE);\
    }\
}\'';
contButton.addEventListener('click', addCamperForms);

function addCamperForms() {
    for (let i = 0; i < camperTotal.value; i++) {
        generateCamperForms();
    }
    parentForm.classList.add("hideForm");
}

function generateCamperForms() {
    for (let i = 0; i < camperTotal.value; i++) {
        form = document.createElement('form');
        form.classList.add("camperForm");
    }
}