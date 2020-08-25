// Caesar Cipher

function caesarCipher(input, offset) {
    let charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    for (i = 0; i <= charset.length; i++) {
        for (j = offset; j <= 52; j++) {
            let encodedText = input.toUpperCase();
            console.log(encodedText);
        }
    }


}

caesarCipher("Some text", 3);

// let ceaserCipher = (str) => {
//     //Deciphered reference letters
//     let decoded = {
//       a: 'n', b: 'o', c: 'p',
//       d: 'q', e: 'r', f: 's',
//       g: 't', h: 'u', i: 'v',
//       j: 'w', k: 'x', l: 'y',
//       m: 'z', n: 'a', o: 'b',
//       p: 'c', q: 'd', r: 'e',
//       s: 'f', t: 'g', u: 'h',
//       v: 'i', w: 'j', x: 'k',
//       y: 'l', z: 'm'    
//     }

//     //convert the string to lowercase
//     str = str.toLowerCase();

//     //decipher the code
//     let decipher = '';
//     for(let i = 0 ; i < str.length; i++){
//       decipher += decoded[str[i]];
//     }

//     //return the output
//     return decipher;
//   }