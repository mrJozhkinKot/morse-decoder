const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    arr = [];

    for (let i=0; i<expr.length; i=i+10) {
        arr.push(expr.slice(i, i+10));
        }
      arr.map ( function(el, i) {
        if (el === '**********')  arr.splice(i, 1,' ');
       }
    )
    
     let code = arr.map ( function(el) {
       return el.replace(/00/g,'').replace(/10/g, '.').replace(/11/g, '-');
       }
    )
    
    for (let i=0; i<code.length; i++) {
        if (code[i] === ' ') {code[i] = ' ';}
        else {code [i] = MORSE_TABLE[code[i]]};
 }
 

     return code.join('');
    }



module.exports = {
    decode
}