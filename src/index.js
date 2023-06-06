import analyzer from "./analyzer.js";



const d = document;


d.addEventListener('DOMContentLoaded', (e) =>{

  analyzer.getWordCount('user-input', '.total-words');
  analyzer.getCharacterCount('user-input', '.total-characters');
  analyzer.getCharacterCountExcludingSpaces('user-input', '.total-characters-noblank');
  analyzer.getAverageWordLength('user-input', '.total-numbers');
  analyzer.getNumberCount('user-input', '.addition-numbers');
  analyzer.getNumberSum('user-input', '.prom-longitud');

})


