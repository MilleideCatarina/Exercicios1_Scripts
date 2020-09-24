var op1 = 0;
var op2 = 0;
var op3 = 0;
var op4 = 0;
var qtde = 0;
var idades = 0;

function responder() {
    var nota = parseInt(document.getElementById('nota').value);
    var idade = parseInt(document.getElementById('idade').value);


    if (idade >= 0) {

        idades = idades + idade;

        if (nota == 1) {
            op1++;
            qtde++;

        }
        else if (nota == 2) {
            op2++;
            qtde++;

        } else if (nota == 3) {
            op3++;
            qtde++;

        }
        else if (nota == 4) {
            op4++;
            qtde++;

        } else {
            document.write("<h1> Valor inválido - escolha uma das opções válidas </h1>");

        }
    } else {
        document.write("<h1> Idade inválida - digite uma idade válida </h1>");
    }

}

function resultado() {
    var mediaidade = idades / qtde;

    document.write("<h1> A. A quantidade de pessoas que responderam a pesquisa foi " + `${qtde}` + "</h1");
    document.write("<h1> </h1>");
    document.write("<h1> B. A média de idade das pessoas que responderam a pesquisa foi " + `${mediaidade}` + "</h1");


    var soma = (op1 + op2 + op3 + op4);

    var pop1 = (op1 * 100) / soma;

    var pop2 = (op2 * 100) / soma;

    var pop3 = (op3 * 100) / soma;

    var pop4 = (op4 * 100) / soma;

    document.write("<h1> </h1>");
    document.write("<h1> C.  O percentual de nota para: </h1>");
    document.write("<h1>ótimo: " + `${pop1}` + "% </h1>");
    document.write("<h1>bom: " + `${pop2}` + "% </h1>");
    document.write("<h1>regular: " + `${pop3}` + "% </h1>");
    document.write("<h1>ruim: " + `${pop4}` + "% </h1>");


}

