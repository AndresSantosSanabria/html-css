const textArea = document.querySelector("#encriptar");
const resultado = document.querySelector("#solucion");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptar
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value ="";
    resultado.style.backgroundImage = "none";
}

function Desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar
}

function btnDesencriptar() {
    const textoEncriptado = Desencriptar(textArea.value);
    resultado.value = textoEncriptado;
    textArea.value ="";
    resultado.style.backgroundImage = "none";
}

function Copy() {
    resultado.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    resultado.value="";
    resultado.style.backgroundImage = "url(Img/ImagenResultado.png)";
    
}

