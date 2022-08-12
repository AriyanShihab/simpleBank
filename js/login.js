const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(mail);
    console.log(password);
    if (mail == "my@bank.com" && password == "1234") {
        window.location.href = "../markup/banking.html";
    } else {
        alert(`wrong login info`);
    }
});