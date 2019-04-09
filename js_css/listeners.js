const home = document.querySelector('#home'),
  cy1 = document.querySelector('#cy1'),
  cy2 = document.querySelector('#cy2'),
  cy3 = document.querySelector('#cy3'),
  cy4 = document.querySelector('#cy4'),
  cy5 = document.querySelector('#cy5'),
  biome = document.querySelector('#biome'),
  body = document.querySelector('body');

const backgrounds = {
  fifty_blue: "https://raw.githubusercontent.com/KabirSamsi/Digital-Portfolio/master/backgrounds/blue.png",
  rainbow: "https://raw.githubusercontent.com/KabirSamsi/Digital-Portfolio/master/backgrounds/rainbow.png"
}

const background_options = document.querySelectorAll('.dropdown-item')
console.log(background_options)

for (let option of background_options) {
  option.addEventListener('click', () => {
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/KabirSamsi/Digital-Portfolio/master/backgrounds/${backgrounds[option.id]}")`
  })
}


const ael_on = (element) => element.addEventListener("mouseover", () => element.style.color = "blue"),
  ael_off = (element) => element.addEventListener("mouseout", () => element.style.color = "black"),
  ael_click = (element) => element.addEventListener("click", () => element.style.color = "red");

let elements = [home, cy1, cy2, cy3, cy4, cy5, biome];

for (let element of elements) {
  ael_on(element);
  ael_off(element);
  ael_click(element);
}
