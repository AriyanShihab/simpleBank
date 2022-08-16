// deposit button handeling
const dipositButton = document.getElementById("depositButton");
dipositButton.addEventListener("click", function() {
    // do reffarence
    const depositInput = document.getElementById("depositInput");
    const dipositAmount = document.getElementById("dipositAmount");
    const balanceAmount = document.getElementById("balanceAmount");
    // input validation
    if (depositInput.value === "") {
        alert(
            "vai tumi ki amake boka paiso? ami jhanker vai student! koto tk diposit korba bolo;"
        );
        return;
    }
    // conver to Number
    const userDeposit = parseFloat(depositInput.value);
    const totallDeposit = parseFloat(dipositAmount.innerText);
    let updateBalance = parseFloat(balanceAmount.innerText);

    // basic calulation

    dipositAmount.innerText = totallDeposit + userDeposit;
    let blance = updateBalance + userDeposit;
    balanceAmount.innerText = blance;
    depositInput.value = "";
});

// handel withdraw

const withdrawButton = document.getElementById("withdrawButton");

withdrawButton.addEventListener("click", function() {
    // getting dom reffarence
    const userWithdrawAmount = document.getElementById("withDrawInput");
    const balanceAmount = document.getElementById("balanceAmount");
    const totallWithdraw = document.getElementById("withdrawAmount");
    if (userWithdrawAmount.value === "") {
        alert(
            "vai tumi ki amake boka paiso? ami jhanker vai student! koto tk withdraw korba bolo;"
        );
        return;
    }
    // convert them in numbner;
    const withdrawInputAmount = parseFloat(userWithdrawAmount.value);
    const balanceInNumber = parseFloat(balanceAmount.innerText);
    const totallWithdrawInNumber = parseFloat(totallWithdraw.innerText);
    // calculation;
    if (balanceInNumber < withdrawInputAmount) {
        alert("vai ki kortaso tumi? tomar babar bank a ato tk nai");
        userWithdrawAmount.value = "";
        return;
    }
    balanceAmount.innerText = balanceInNumber - withdrawInputAmount;
    totallWithdraw.innerText = totallWithdrawInNumber + withdrawInputAmount;

    userWithdrawAmount.value = "";
});