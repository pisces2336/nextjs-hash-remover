const input = document.getElementById('js_input');
const output = document.getElementById('js_output');

const languages = document.getElementsByName('language');
const lowerSelecter = document.getElementById('js_underscoreLowerSelecter');
const upperSelecter = document.getElementById('js_underscoreUpperSelecter');
const numHashSlecter = document.getElementById('js_numHashSelecter');

const trigger = document.getElementById('js_trigger');

const marksObj = {
  'html': ' "',
  'css': ' ,.#[>~+|:',
};

trigger.addEventListener('click', () => {
  let language = '';
  languages.forEach(lang => {
    if (lang.checked) {
      language = lang.value;
    }
  });

  const lowerIdx = lowerSelecter.selectedIndex;
  const lower = lowerSelecter.options[lowerIdx].value;

  const upperIdx = upperSelecter.selectedIndex;
  const upper = upperSelecter.options[upperIdx].value;

  const numHashIdx = numHashSlecter.selectedIndex;
  const numHash = numHashSlecter.options[numHashIdx].value;

  const regBase = `_{${lower},${upper}}.{${numHash}}\\`;

  let str = input.value;
  const marks = marksObj[language];
  Array.prototype.forEach.call(marks, mark => {
    let reg = new RegExp(regBase + mark, 'g');
    console.log(reg);
    str = str.replace(reg, mark);
  });

  output.value = str;
});