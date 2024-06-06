function showSecondForm() {
    document.querySelector('form').classList.add('secActive');
    document.querySelector('form').classList.remove('thirdActive');
}

function showFirstForm() {
    document.querySelector('form').classList.remove('secActive');
    document.querySelector('form').classList.remove('thirdActive');
}

function showThirdForm() {
    document.querySelector('form').classList.add('thirdActive');
    document.querySelector('form').classList.remove('secActive');
}

function showFourthForm() {
    document.querySelector('form').classList.add('fourthActive');
    document.querySelector('form').classList.remove('secActive');
}
function showFifthForm() {
    document.querySelector('form').classList.add('fifthActive');
    document.querySelector('form').classList.remove('secActive');
}
function nextButtonClick() {
    var qualification = document.getElementById('highestQualification').value;
    console.log(qualification);
    
    if (qualification == 'sslc' || qualification == 'hsc') {
        showFifthForm();
    } else {
        showFourthForm();
    }
}



backBtn.addEventListener("click", () => form.classList.remove('secActive'));