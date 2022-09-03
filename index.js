// Login button start here
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = "none";
    const mainPage = document.getElementById('main_page');
    mainPage.style.display = "block";
})
// Login button end here

// dipopsite button start here 
const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click', function () {

    const dipositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDiposit', dipositNumber);
    updateSpanText('currentBalance', dipositNumber);

})
// dipopsite button end here 

// diposite,withdraw,balance value function start here
function updateSpanText(id, dipositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = dipositNumber + currentNumber;
    document.getElementById(id).innerText = total;
    
    
}
// diposite,withdraw value function end here

// input value function start here
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber =parseFloat(amount);
    document.getElementById(id).value ="";
    return amountNumber;
}
// input value function end here

// withdraw button function start here
const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', function () {
    
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);
})
// withdraw button function end here
