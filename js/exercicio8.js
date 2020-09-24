var cand1 = 0;
var cand2 = 0;
var nulo = 0;
var branco = 0;

function votar() {
    var voto = parseInt(document.getElementById('voto').value);

    if (voto == 1) {
        cand1++;

    }
    else if (voto == 2) {
        cand2++;

    } else if (voto == 3) {
        nulo++;

    }
    else if (voto == 4) {
        branco++;

    } else {
        document.write("<h1> Voto inválido - escolha uma das opções válidas </h1>");


    }

}

function apurar() {

    var soma = (cand1 + cand2 + nulo + branco);

    var pcand1 = (cand1 * 100) / soma;

    var pcand2 = (cand2 * 100) / soma;

    var pnulo = (nulo * 100) / soma;

    var pbranco = (branco * 100) / soma;

    document.write("<h1> (1) O percentual de votos do candidato 1 foi: " + `${pcand1}` + "% O percentual de votos do candidato 2 foi: " + `${pcand2}` + "% </h1>");
    document.write("<h1> (2) O percentual de votos nulos foi: " + `${pnulo}` + "% </h1>");
    document.write("<h1> (3) O percentual de votos brancos foi: " + `${pbranco}` + "% </h1>");
}