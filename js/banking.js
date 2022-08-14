// deposit button handeling
const dipositButton = document.getElementById("depositButton");
dipositButton.addEventListener("click", function() {
    const depositInput = document.getElementById("depositInput");
    const dipositAmount = document.getElementById("dipositAmount");
    const balanceAmount = document.getElementById("balanceAmount");
    const userDeposit = parseFloat(depositInput.value);
    const totallDeposit = parseFloat(dipositAmount.innerText);
    let updateBalance = parseFloat(balanceAmount.innerText);
    dipositAmount.innerText = totallDeposit + userDeposit;
    let blance = updateBalance + userDeposit;
    balanceAmount.innerText = blance;
    depositInput.value = "";
});

// handel withdray

const withdrawButton = document.getElementById("withdrawButton");

withdrawButton.addEventListener("click", function() {
    const userWithdrawAmount = document.getElementById("withDrawInput");
    const balanceAmount = document.getElementById("balanceAmount");
    const totallWithdraw = document.getElementById("withdrawAmount");
    // convert them in numbner;
    const withdrawInputAmount = parseFloat(userWithdrawAmount.value);
    const balanceInNumber = parseFloat(balanceAmount.innerText);
    const totallWithdrawInNumber = parseFloat(totallWithdraw.innerText);
    // calculation;
    console.log(withdrawInputAmount, balanceInNumber, totallWithdrawInNumber);
    balanceAmount.innerText = balanceInNumber - withdrawInputAmount;
    totallWithdraw.innerText = totallWithdrawInNumber + withdrawInputAmount;

    userWithdrawAmount.value = "";
});

/*
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
}) */