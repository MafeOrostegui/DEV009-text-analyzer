const analyzer = { 

  getWordCount: (totalWords) => {

    const $words=document.querySelector('textarea').value,
      $arrayWords=$words.trim().replace(/\sz+/gi, ' ').split(' ');

    let $countWords=0;

    for(let i=0; i<$arrayWords.length; i++){
      $countWords+=1;
      document.querySelector(totalWords).innerHTML=`<p>${$countWords}</p>`
    }
    return $countWords;   
  },
  

  getCharacterCount: (totalCharacters) => {

    const $characters=document.querySelector('textarea').value,
      $countCharacteres=$characters.length;

    document.querySelector(totalCharacters).innerHTML=`<p>${$countCharacteres}</p>`; 
  },


  getCharacterCountExcludingSpaces: (totalCharactersNoBlank ) =>{
 
    const $charactersNoBlank=document.querySelector('textarea').value,
      $countCharactersNoBlank=$charactersNoBlank.trim().replace(/[\s[¿!¡;,:.?#@()"]/gi,'').length;
      
    document.querySelector(totalCharactersNoBlank).innerHTML=`<p>${$countCharactersNoBlank}</p>`; 
  },


  getAverageWordLength: (longitud) => {

    const $wordsLength=document.querySelector('textarea').value,
      $arrayOfCadena=$wordsLength.trim().replace(/\sz+/gi,'').split(' '),
      $longitudElementArray=$arrayOfCadena.map(x => x.length);

    const $sum=$longitudElementArray.reduce((a, b)=> a += b),
      $longitudProm = $sum/$longitudElementArray.length;
      
   
    document.querySelector(longitud).innerHTML=`<p>${$longitudProm.toFixed(2)}</p>`; 
  },


  getNumberCount: (totalNumbers) => {

    const $numbers=document.querySelector('textarea').value,
      $arrayNumbers=$numbers.trim().split(' ');

    let $totalNumbers=0;

    for (let x of $arrayNumbers){

      if(x.match(/[0-9]+/gi) && !x.match(/[a-z]/ig)){

        x=parseInt(x)

        $totalNumbers+=1;
      }
    }
    document.querySelector(totalNumbers).innerHTML=`<p>${$totalNumbers}</p>`; 
  },


  getNumberSum: (additionNumbers) => {

    const $additionNumbers=document.querySelector('textarea').value,
      $array=$additionNumbers.trim().replace(/\sz+/gi, ' ').split(' ');

    let $additionTotal=0;


    for(let num of $array){

      if(num.match(/[0-9]+/gi) && !num.match(/[a-z]/ig)){

        num=parseFloat(num)
            
        $additionTotal+=num;

      }
      document.querySelector(additionNumbers).innerHTML=`<p>${$additionTotal}</p>`;
    }
  },

};



export default analyzer;

