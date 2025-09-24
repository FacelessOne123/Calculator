const displayScreen = document.getElementById('displayScreen');
let defaultValue = displayScreen.textContent = '0';

function insertNumber(number){
    const displayScreen = document.getElementById('displayScreen');
    const maxlength = 11;

    if (displayScreen.textContent.length < maxlength){
    if(displayScreen.textContent === defaultValue){
        displayScreen.textContent = number;
    } else{
        displayScreen.textContent += number;
    }
    }
}

function eraseNumerator(){
    const displayScreen = document.getElementById('displayScreen');
    displayScreen.textContent = displayScreen.textContent.substring(0,
    displayScreen.textContent.length - 1);

    if(displayScreen.textContent === ''){
    displayScreen.textContent = defaultValue;
    }
}

function clearInput(){
    const displayScreen = document.getElementById('displayScreen');
    displayScreen.textContent = defaultValue;  
}

function equalTo(){
    const displayScreen = document.getElementById('displayScreen');
    if(displayScreen.textContent){
        displayScreen.textContent= eval(displayScreen.textContent)
    }else{
        return false;
    }
}