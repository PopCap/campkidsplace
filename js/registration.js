var regDiv = document.getElementById("regInfo");
var parentForm = document.getElementById("parentForm");
var contButton = document.getElementById("continue");
var backButton = document.getElementById("back");
var submitButton = document.getElementById("submit");
var camperTotal = document.getElementById("regTotal");
var counter = 1;
var options = ["Kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th"];

contButton.addEventListener('click', addCamperForms);
backButton.addEventListener('click', removeCamperForms);
submitButton.addEventListener('click', reloadPage);
submitButton.classList.add("hideForm");

function addCamperForms() {
    for (let i = 0; i < camperTotal.value; i++) {
        generateCamperForms();
        counter++;
    }
    parentForm.classList.add("hideForm");
    contButton.classList.add("hideForm");
    submitButton.classList.remove("hideForm");

}

function removeCamperForms() {
    var elements = regDiv.getElementsByClassName("camperForm");
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    parentForm.classList.remove("hideForm");
    contButton.classList.remove("hideForm");
    submitButton.classList.add("hideForm");
    counter = 1;
}

function reloadPage() {
    location.reload();
}

function generateCamperForms() {
    form = document.createElement('form');
    form.classList.add("camperForm");

    nameField = document.createElement('INPUT');
    nameField.setAttribute("type", "text");
    nameField.setAttribute("id", "nameField");

    nameLabel = document.createElement('Label');
    nameLabel.innerHTML = 'Camper ' + counter +'\'s Name: ';
    nameLabel.setAttribute('id', 'nameLabel')
    nameLabel.setAttribute('for', "nameField")

    gradeField = document.createElement('select');
    gradeField.setAttribute("name", "Grade");
    gradeField.setAttribute("id", "gradeField");

    gradeLabel = document.createElement('Label');
    gradeLabel.innerHTML = 'Grade Entering in Fall: ';
    gradeLabel.setAttribute("id", "gradeLabel");
    // create options for select element

    op1 = document.createElement('option');
    op1.setAttribute("value", options[0]);
    op1.innerHTML = options[0];
    op2 = document.createElement('option');
    op2.setAttribute("value", options[1]);
    op2.innerHTML = options[1];
    op3 = document.createElement('option');
    op3.setAttribute("value", options[2]);
    op3.innerHTML = options[2];
    op4 = document.createElement('option');
    op4.setAttribute("value", options[3]);
    op4.innerHTML = options[3];
    op5 = document.createElement('option');
    op5.setAttribute("value", options[4]);
    op5.innerHTML = options[4];
    op6 = document.createElement('option');
    op6.setAttribute("value", options[5]);
    op6.innerHTML = options[5];
    op7 = document.createElement('option');
    op7.setAttribute("value", options[6]);
    op7.innerHTML = options[6];
    op8 = document.createElement('option');
    op8.setAttribute("value", options[7]);
    op8.innerHTML = options[7];

    gradeField.appendChild(op1);
    gradeField.appendChild(op2);
    gradeField.appendChild(op3);
    gradeField.appendChild(op4);
    gradeField.appendChild(op5);
    gradeField.appendChild(op6);
    gradeField.appendChild(op7);
    gradeField.appendChild(op8);

    form.appendChild(nameLabel);
    form.appendChild(nameField);
    form.appendChild(gradeLabel);
    form.appendChild(gradeField);
    
    regDiv.appendChild(form);
}