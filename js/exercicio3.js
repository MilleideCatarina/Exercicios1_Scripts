function calcular() {
    var salario = parseFloat(document.getElementById('salario').value)



    if (salario < 1000) {
        document.write("<h1> Seu salário com o reajuste de 15% = " + `${salario * 1.15}` + "</h1>");

    }
    else if (salario >= 1000 && salario <= 1500) {
        document.write("<h1> Seu salário com o reajuste de 10% = " + `${salario * 1.10}` + "</h1>");

    } else if (salario > 1500) {
        document.write("<h1> Seu salário com o reajuste de 5% = " + `${salario * 1.05}` + "</h1>");
    }
    else {
        document.write("<h1> Seu salário não tera reajuste :( </h1>");

    }
}