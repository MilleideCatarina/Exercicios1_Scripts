function calcular() {
    var horas = parseFloat(document.getElementById('horas').value)
    var salario_min = parseFloat(document.getElementById('salario_min').value)

    var valor_h = salario_min / 2;
    var sal_bruto = horas * valor_h;
    var imposto = sal_bruto * 0.03;
    var salario = sal_bruto - imposto;

    document.write("<h1> Seu salário = " + `${salario}` + "</h1>");


}