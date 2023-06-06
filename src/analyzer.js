const d= document;


const analyzer = { 


  getWordCount: (text, totalWords) => {

    addEventListener('keyup', (e)=>{

      const $texArea=e.target.value,
        $countWords=$texArea.trim().replace(/\sz+/gi, ' ').split(' ').length;

      d.querySelector(totalWords).innerHTML=`<p>${$countWords}</p>`
    })

  },

  getCharacterCount: (text, totalCharacters) => {

    addEventListener('keyup',(e)=>{

      const $characteres=e.target.value,
        $countCharacteres=$characteres.length;

      d.querySelector(totalCharacters).innerHTML=`<p>${$countCharacteres}</p>`;
    })

  },

  getCharacterCountExcludingSpaces: (text, totalCharactersNoBlank ) => {

    addEventListener('keyup', (e)=>{

      const $inputUsuario = e.target.value,
        $countCharactersNoBlank=$inputUsuario.trim().replace(/[\s[¿!¡;,:.?#@()"]/gi,'').length;
      
      d.querySelector(totalCharactersNoBlank).innerHTML=`<p>${$countCharactersNoBlank}</p>`;
    })

  },

  getAverageWordLength: (text, totalNumbers) => {  

    addEventListener('keyup', (e)=>{

      const $numbers= e.target.value,
        $countNumbers=$numbers.trim().match(/[0-9]+/gi).length;

      d.querySelector(totalNumbers).innerHTML=`<p>${$countNumbers}</p>`
    })
    

  },
  getNumberCount: (text, additionNumbers) => {

    addEventListener('keyup', (e)=>{

      const $string=e.target.value,
        $array=$string.trim().replace(/\sz+/gi, ' ').split(' ');

      let $additionTotal=0;


      for(let num of $array){

        if(/[0-9]+/gi.test(num)){

          num=parseInt(num)
              
          $additionTotal+=num;

        }

        d.querySelector(additionNumbers).innerHTML=`<p>${$additionTotal}</p>`

      }          
    })   
  },

  getNumberSum: (text, longitud) => {

    addEventListener('keyup', (e)=>{

      const $cadena=e.target.value,
        $arrayOfCadena=$cadena.trim().replace(/\sz+/gi, '').split(' '),
        $longitudElementArray=$arrayOfCadena.map(x => x.length);
      
      const $sum=$longitudElementArray.reduce((a, b)=> a += b),
        $longitudProm= $sum/$longitudElementArray.length;
          
       
      d.querySelector(longitud).innerHTML=`<p>${$longitudProm.toFixed(2)}</p>`

    })
  }


};

export default analyzer;

