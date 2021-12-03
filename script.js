// Elements
const calculateBox = document.querySelector('.calculate-holder');
const btnCalculate = document.querySelector('.calculate');
const btnCalculateAgain = document.querySelector('.calculate-again');
const tipMoney = document.querySelector('.tip-message');
const inputPrice = document.querySelector('.bill-price');

// Functions
function calculateTip() {
    calculateBox.style.display = 'none';
    btnCalculateAgain.style.display = 'unset';
    let price = document.querySelector('.bill-price').value;
    if (price <= 0) {
        tipMoney.innerHTML = 'Enter a number above 0!';
    }
    if (price <= 10) {
        tipMoney.innerHTML = `Tip is ${price * 2 / 100}`;
    }
    if (price > 10 && price <= 100) {
        tipMoney.innerHTML = `Tip is ${price * 3 / 100}`;
    }
    if (price > 100 && price <= 200) {
        tipMoney.innerHTML = `Tip is ${price * 4 / 100}`;
    }
    if (price > 200) {
        tipMoney.innerHTML = `Tip is ${price * 5 / 100}`;
    }
}

function reloadApp() {
    window.location.reload();
}

function calculateOnEnter(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        btnCalculate.click();
    }
}

// Event listeners
btnCalculate.addEventListener('click', calculateTip);

btnCalculateAgain.addEventListener('click', reloadApp);

inputPrice.addEventListener('keyup', calculateOnEnter);