// Caesar Cipher

function caesarCipher(input, key) {
    return input.toUpperCase().replace(/[A-Z]/g,
        c => String.fromCharCode((c.charCodeAt(0) - 65 + key) % 26 + 65));
}

console.log(caesarCipher('Some random text', 4))