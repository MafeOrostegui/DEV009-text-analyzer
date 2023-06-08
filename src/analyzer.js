const analyzer = { 

  getWordCount: (text) => {

    const $arrayWords=text.trim().replace(/\sz+/gi, ' ').split(' ');

    let $countWords=0;

    for(let i=0; i<$arrayWords.length; i++){

      $countWords+=1;
    }

    return $countWords;

  },
  

  getCharacterCount: (text) => {

    const $countCharacteres=text.length;

    return $countCharacteres;

  },


  getCharacterCountExcludingSpaces: (text) =>{
 
    const $countCharactersNoBlank=text.trim().replace(/[\s[¿!¡;,:.?#@()"]/gi,'').length;

    return $countCharactersNoBlank;
  },


  getAverageWordLength: (text) => {

    const $arrayOfCadena=text.trim().replace(/\sz+/gi,'').split(' '),
      $longitudElementArray=$arrayOfCadena.map(x => x.length);

    const $sum=$longitudElementArray.reduce((a, b)=> a += b),
      $longitudProm = Number(($sum/$longitudElementArray.length).toFixed(2));

    return $longitudProm;

  },


  getNumberCount: (text) => {

    const $arrayNumbers=text.trim().split(' ');

    let $totalNumbers=0;

    for (let x of $arrayNumbers){

      if(x.match(/[0-9]+/gi) && !x.match(/[a-z]/ig)){

        x=parseInt(x)

        $totalNumbers+=1;
      }
    }
    return $totalNumbers

  },


  getNumberSum: (text) => {

    const $array=text.trim().replace(/\sz+/gi, ' ').split(' ');

    let $additionTotal=0;


    for(let num of $array){

      if(num.match(/[0-9]+/gi) && !num.match(/[a-z]/ig)){

        num=parseFloat(num)
            
        $additionTotal+=num;

      }

    }
    return $additionTotal;
  },
  
};



export default analyzer;

