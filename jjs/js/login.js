document.getElementById("login-btn").addEventListener('click', function(){
    // console.log("clicked");
    const emailInput = document.getElementById("Email-input");
    const emaliname = emailInput.value;
    const passwordInput = document.getElementById("password-input");
    const passaword = passwordInput.value;
    if (emaliname =="sojibulislamsayem@gmail.com" && passaword == "ilovemoney"){
        window.location.href = "banking.html";
        // console.log("log in");
    }
})