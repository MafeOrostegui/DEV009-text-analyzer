import analyzer from "./analyzer.js";

const $textArea=document.querySelector('textarea');

//importación de los métodos del objeto analyzer

document.addEventListener('keyup', ()=>{

  const totalWord=analyzer.getWordCount($textArea.value);
  const totalCharacter=analyzer.getCharacterCount($textArea.value);
  const totalCharacterExcluding=analyzer.getCharacterCountExcludingSpaces($textArea.value);
  const longitudProm=analyzer.getAverageWordLength($textArea.value);
  const numbers=analyzer.getNumberCount($textArea.value);
  const sumaNumbers=analyzer.getNumberSum($textArea.value);

  document.querySelector(".total-words").innerHTML=`${totalWord}`;
  document.querySelector(".total-characters").innerHTML=`${totalCharacter}`;
  document.querySelector(".total-characters-noblank").innerHTML=`${totalCharacterExcluding}`;
  document.querySelector(".prom-longitud").innerHTML=`${longitudProm}`;
  document.querySelector(".total-numbers").innerHTML=`${numbers}`;
  document.querySelector(".addition-numbers").innerHTML=`${sumaNumbers}`;
});


const $btn=document.getElementById("reset-button");
$btn.addEventListener("click", cleanTextArea);


//función para limpiar el textarea y asignarle valores 0 

function cleanTextArea(){

  $textArea.reset();

}


