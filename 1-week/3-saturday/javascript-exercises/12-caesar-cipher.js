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