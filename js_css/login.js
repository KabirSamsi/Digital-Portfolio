const pw = document.querySelector("#pw");
const confirm = document.querySelector("#confirm");
const password = "childatplay";
const body = document.querySelector("body")

confirm.addEventListener("click", () => {
    if (pw.value != password) {
      pw.value = ""
      alert("Incorrect password, please try again")

    } else if (pw.value == password) {
        confirm.innerHTML = '<a href="home.html">Sign in</a>';
        confirm.style.backgroundColor = "green";
        confirm.style.borderColor = "green";
        confirm.style.width =  "100px";

    }
})
