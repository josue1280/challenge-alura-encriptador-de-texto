
function quitarAcentos(cadena) {
        const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
        return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}




function encriptar() {

        var texto = document.querySelector("#text").value;

        var textoC = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");


        document.querySelector("#texto1").textContent = textoC;
       
                document.querySelector("#texto1").innerHTML = textoC


               
       


}






var botonencrip = document.querySelector("#en1"); botonencrip.onclick = encriptar;

function desencriptar() {


        var texto = document.querySelector("#text").value;
        var textoC = texto.replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");

        
                document.querySelector("#texto1").textContent = textoC;

                document.querySelector("#texto1").innerHTML = textoC

                
       

}




var botondesencrip = document.querySelector("#en2"); botondesencrip.onclick = desencriptar;






