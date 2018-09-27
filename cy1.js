const cy1 = document.querySelector('#cyOne');
const sketch = document.getElementById('sketch');
const handout = document.getElementById('hand');
const swatch = document.getElementById('swatch');
const table = document.querySelector('table');

cy1.addEventListener('mouseover', () => {
  cy1.style.color = 'blue';
})

cy1.addEventListener('mouseout', () => {
  cy1.style.color = 'black';

})

sketch.addEventListener('mouseover', () => {
  sketch.style.color = 'blue';
})

sketch.addEventListener('mouseout', () => {
  sketch.style.color = 'black';

})

handout.addEventListener('mouseover', () => {
  handout.style.color = 'blue';
})

handout.addEventListener('mouseout', () => {
  handout.style.color = 'black';

})

swatch.addEventListener('mouseover', () => {
  swatch.style.color = 'blue';
})

swatch.addEventListener('mouseout', () => {
  swatch.style.color = 'black';

})

table.addEventListener('mouseover', () => {
  table.style.color = 'blue';
})

table.addEventListener('mouseout', () => {
  table.style.color = 'black';

})

cy1.addEventListener('click', () => {
  cy1.style.color = 'red';
})

sketch.addEventListener('click', () => {
  sketch.style.color = 'red';
})

handout.addEventListener('click', () => {
  handout.style.color = 'red';
})

swatch.addEventListener('click', () => {
  swatch.style.color = 'red';
})

table.addEventListener('click', () => {
  table.style.color = 'red';
})

