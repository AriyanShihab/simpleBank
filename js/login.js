const formSubmit = document.getElementById("formSubmit");
console.log(formSubmit);

formSubmit.addEventListener("click", () => {
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (mail == "my@bank.com" && password == "1234") {
        formSubmit.setAttribute("href", "./markup/banking.html");
    } else {
        alert(`wrong login info`);
    }
    console.log(`clickes`);
});