

function encriptarTexto() {
    document.getElementById("textoResultado").innerHTML = "";
    let texto = document.getElementById("textoOriginal").value;
    let textoEncriptado = texto.replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("textoResultado").innerHTML = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("textoResultado").innerText;
    let textoDesencriptado = texto.replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
    document.getElementById("textoResultado").innerText = textoDesencriptado;
}
