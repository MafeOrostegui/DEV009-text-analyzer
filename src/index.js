import analyzer from "./analyzer.js";


document.addEventListener('keyup', (e)=>{
  analyzer.getWordCount(e,'.total-words');
  analyzer.getCharacterCount(e, '.total-characters');
  analyzer.getCharacterCountExcludingSpaces(e, '.total-characters-noblank');
  analyzer.getAverageWordLength(e, '.prom-longitud');
  analyzer.getNumberCount(e, '.total-numbers');
  analyzer.getNumberSum(e, '.addition-numbers');  
})


const $btn=document.getElementById("reset-button"),
  $textArea=document.querySelector('textarea');
$btn.addEventListener("click", cleanTextArea);


function cleanTextArea(){

  $textArea.reset();

}
