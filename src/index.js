import analyzer from "./analyzer.js";


document.addEventListener('keyup', ()=>{
  analyzer.getWordCount('.total-words');
  analyzer.getCharacterCount('.total-characters');
  analyzer.getCharacterCountExcludingSpaces('.total-characters-noblank');
  analyzer.getAverageWordLength('.prom-longitud');
  analyzer.getNumberCount('.total-numbers');
  analyzer.getNumberSum('.addition-numbers');  
});


const $btn=document.getElementById("reset-button"),
  $textArea=document.querySelector('textarea');
$btn.addEventListener("click", cleanTextArea);


function cleanTextArea(){

  $textArea.reset();
  document.getElementsByClassName("total-words").innerHTML=0;
  document.getElementsByClassName("total-characters").innerHTML=0;
  document.getElementsByClassName("total-characters-noblank").innerHTML=0;
  document.getElementsByClassName("prom-longitud").innerHTML=0;
  document.getElementsByClassName("total-numbers").innerHTML=0;
  document.getElementsByClassName("addition-numbers").innerHTML=0;
}

