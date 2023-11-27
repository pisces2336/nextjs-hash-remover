const input = document.getElementById('js_input');
const output = document.getElementById('js_output');
const trigger = document.getElementById('js_trigger');
const marks = ' ",.#[>~+|:\n';
const regBase = '__.{5}\\';

trigger.addEventListener('click', () => {
  let str = input.value;
  Array.prototype.forEach.call(marks, mark => {
    let reg = new RegExp(regBase + mark, 'g');
    str = str.replace(reg, mark);
    console.log(reg);
    console.log(str);
  });
  output.value = str;
});