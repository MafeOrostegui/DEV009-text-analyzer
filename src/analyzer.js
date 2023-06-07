const d = document;



const analyzer = { 
  

  getWordCount: (e, totalWords) => {

    const $words=e.target.value;

    const $countWords=$words.trim().replace(/\sz+/gi, ' ').split(' ').length;
    d.querySelector(totalWords).innerHTML=`<p>${$countWords}</p>`
      
  },

  getCharacterCount: (e, totalCharacters) => {

    const $characteres=e.target.value,
      $countCharacteres=$characteres.length;

    d.querySelector(totalCharacters).innerHTML=`<p>${$countCharacteres}</p>`;

  },

  getCharacterCountExcludingSpaces: (e, totalCharactersNoBlank ) =>{

    const $inputUsuario = e.target.value,
      $countCharactersNoBlank=$inputUsuario.trim().replace(/[\s[¿!¡;,:.?#@()"]/gi,'').length;
      
    d.querySelector(totalCharactersNoBlank).innerHTML=`<p>${$countCharactersNoBlank}</p>`;

  },


  getAverageWordLength: (e, longitud) => {

    const $cadena=e.target.value,
      $arrayOfCadena=$cadena.trim().replace(/\sz+/gi,'').split(' '),
      $longitudElementArray=$arrayOfCadena.map(x => x.length);

    const $sum=$longitudElementArray.reduce((a, b)=> a += b),
      $longitudProm = $sum/$longitudElementArray.length;
      
   
    d.querySelector(longitud).innerHTML=`<p>${$longitudProm.toFixed(2)}</p>`;


  },

  getNumberCount: (e, totalNumbers) => {

    const $numbers= e.target.value,
      $countNumbers=$numbers.trim().match(/[0-9]+/gi).length;

    d.querySelector(totalNumbers).innerHTML=`<p>${$countNumbers}</p>`;

  },

  getNumberSum: (e, additionNumbers) => {

    const $string=e.target.value,
      $array=$string.trim().replace(/\sz+/gi, ' ').split(' ');

    let $additionTotal=0;


    for(let num of $array){

      if(/[0-9]+/gi.test(num)){

        num=parseInt(num)
            
        $additionTotal+=num;

      }

      d.querySelector(additionNumbers).innerHTML=`<p>${$additionTotal}</p>`;
    }
  },

};



export default analyzer;

3