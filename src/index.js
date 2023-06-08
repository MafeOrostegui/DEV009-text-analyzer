import analyzer from "./analyzer.js";

const $textArea=document.querySelector('textarea');


document.addEventListener('keyup', ()=>{
  analyzer.getWordCount($textArea.value);
  analyzer.getCharacterCount($textArea.value);
  analyzer.getCharacterCountExcludingSpaces($textArea.value);
  analyzer.getAverageWordLength($textArea.value);
  analyzer.getNumberCount($textArea.value);
  analyzer.getNumberSum($textArea.value);
});


const $btn=document.getElementById("reset-button");
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
