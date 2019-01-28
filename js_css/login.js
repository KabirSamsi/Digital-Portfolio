const pw = document.querySelector("#pw");
const confirm = document.querySelector("#confirm");
const body = document.querySelector("body")
let passwords = [
  ["Enter the original name of Art C's sculpture", "childatplay"],
  ["Which artist sculpted The Bronze David?","donatello"],
  ["Which period was after the Classical Era?", "hellenistic"],
  ["What are blind, one-line sketches called?", "contoursketches"]
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
