const pw = document.querySelector("#pw");
const confirm = document.querySelector("#confirm");
const body = document.querySelector("body")
let passwords = [
  ["Enter the original name of Art C's sculpture", "childatplay"],
  ["Which artist sculpted The Bronze David?","donatello"],
  ["Fill in the blank: archaic, classical, ___", "hellenistic"],
  ["Blind one-line sketches are called ___ sketches", "contour"]
]

let random = Math.floor(Math.random()*passwords.length);
pw.placeholder = `${passwords[random][0]} (all lowercase, no spaces)`

confirm.addEventListener("click", () => {
    let password = passwords[random]
      if (password[1] === pw.value) {
        confirm.innerHTML = '<a href="home.html">Sign in</a>';
        confirm.style.backgroundColor = "green";
        confirm.style.width =  "100px";

    } else if (password[1] != pw.value) {
        pw.value = ""
        alert("Incorrect password, please try again")
    }
})
