const pw = document.querySelector("#pw");
const confirm = document.querySelector("#confirm");
const body = document.querySelector("body")
let passwords = [
  ["Enter the original name of Art C's sculpture", "!@xh%!@rl128901wag$!@poab$@92"],
  ["Which artist sculpted The Bronze David?","#w125om142age*#&!oll*$%"],
  ["Fill in the blank: archaic, classical, ___", "#s2eolvnrs421gix$"],
  ["Blind one-line sketches are called ___ sketches", "#x12o$#m2&*(tl$!ui^&"]
]

let random = Math.floor(Math.random()*passwords.length);
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let reversed_letters = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
pw.placeholder = `${passwords[random][0]} (all lowercase, no spaces)`

const xomvvrg = message => {
  uimao = ""
  counter = 0
  while (counter < message.length) {
    if (counter%2 == 1) {
      uimao += (message[counter])
    } else if (counter%2 == 0) {
      uimao += (reversed_letters[letters.indexOf(message[counter])])
    }
    counter ++;
  }
  return uimao
}

confirm.addEventListener("click", () => {
    let choice = passwords[random]
    let final = "";
    for (let letter of choice[1]) {
      if (letters.indexOf(letter) != -1) {
        final += letter
      }
    }
    let otherchoice = xomvvrg(final)
    if (otherchoice === pw.value) {
      confirm.innerHTML = '<a href="home.html">Sign in</a>';
      confirm.style.backgroundColor = "green";
      confirm.style.width =  "100px";

    } else if (otherchoice != pw.value) {
        pw.value = ""
        alert("Incorrect password, please try again")
    }
})
