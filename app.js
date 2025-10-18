const displayScreen = document.getElementById('displayScreen');
let defaultValue = displayScreen.textContent = '0';


function insertNumber(number) {
  const displayScreen = document.getElementById('displayScreen'); //get calculator screen
  const maxlength = 11; //maxlength for calculator screen
  const currentValue = displayScreen.textContent; //get currenvalue of calculator screen
  const operators = ['+', '-', '*', '/']; //operator list
  const lastChar = currentValue.slice(-1); //change the lastcharacter

  //change the lastchar into the new numberinput
  if(operators.includes(number) && operators.includes(lastChar)){
  displayScreen.textContent = currentValue.slice(0, -1) + number;
  return;
  }

  // prevent multiple operators 
  if (operators.includes(number)) {
    if (operators.includes(lastChar) || lastChar === '.') return;
    displayScreen.textContent += number;
    return;
  }
  // prevent multiple dots 
  if (number === '.') {

    // prevent double operator or decimal
    if (lastChar === '.' || operators.includes(lastChar)) return;

    const lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes('.')) return;
  }

  // checker for the currentvalue and if its not decmila
  if (currentValue === '0' && number !== '.') {
    displayScreen.textContent = number;
    return;
  }
  // maxlength checker
  if (currentValue.length >= maxlength) return;
  displayScreen.textContent += number;
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