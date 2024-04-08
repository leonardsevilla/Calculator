let expression = '';
let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let history = [];

function appendToDisplay(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    let result = eval(display.value);
    history.push(display.value + ' = ' + result);
    display.value = result;
    updateHistory();
    expression = '';
  } catch (error) {
    display.value = 'Error';
  }
}

function updateHistory() {
  historyList.innerHTML = '';
  history.forEach(entry => {
    let li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

function displayResult(result) {
  document.getElementById('display').value = result;
}

function calculatePercentage() {
  const number = eval(expression);
  const result = number / 100;
  displayResult(result);
  history.push(number + '% = ' + result);
  expression = '';
  displayHistory();
}

function clearAll() {
  expression = '';
  clearDisplay();
}

function clearEntry() {
  expression = '';
  clearDisplay(); 
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('display').value = expression;
}

function calculateSquare() {
  const number = eval(expression);
  const result = Math.pow(number, 2); 
  displayResult(result);
  history.push(number + '² = ' + result); 
  expression = ''; 
  displayHistory(); 
}

function calculateSquareRoot() {
  const number = eval(expression);
  const result = Math.sqrt(number);
  displayResult(result);
  history.push('√(' + number + ') = ' + result);
  expression = '';
  displayHistory();
}

function toggleSign() {
  let number = parseFloat(expression);
  number *= -1; 
  expression = number.toString(); 
  document.getElementById('display').value = expression; 
}

function appendToDisplay(value) {
  expression += value; 
  document.getElementById('display').value = expression; 
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '0'; 
}

function clearHistory() {
  history = [];
  displayHistory();
}

function displayHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}
