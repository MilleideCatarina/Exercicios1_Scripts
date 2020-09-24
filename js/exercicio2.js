function calcularcat() {
    var idade = parseInt(document.getElementById('idade').value)


    if (idade >= 5 && idade <= 7) {
        document.write("<h1> Categoria Infatil A </h1>");
    }
    else if (idade >= 8 && idade <= 10) {
        document.write("<h1> Categoria Infatil B </h1>");

    } else if (idade >= 11 && idade <= 13) {
        document.write("<h1> Categoria Juvenil A </h1>");
    }
    else if (idade >= 14 && idade <= 17) {
        document.write("<h1> Categoria Juvenil B </h1>");
    } else if (idade > 17) {
        document.write("<h1> Categoria Senior </h1>");
    } else {
        document.write("<h1> Não se Encaixa em Nenhuma Categoria </h1>");

    }
}