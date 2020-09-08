// Caesar Cipher decoder

function decrypt(str, key) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (65 <= c && c <= 90) { result += String.fromCharCode(mod(c - 65 - key, 26) + 65); } // Uppercase
        else if (97 <= c && c <= 122) { result += String.fromCharCode(mod(c - 97 - key, 26) + 97); } // Lowercase
        else { result += str.charAt(i); }
    }
    return result;
}

function mod(x, y) {
    return (x % y + y) % y;
}

console.log(decrypt("UQOG VGZV", 2));