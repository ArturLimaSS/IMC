horas = int(input("Digite a quantidade de horas trabalhadas: "))
salario = int(input("Digite o valor da Hora trabalhada: "))

salarioBruto = (salario * horas)
calculo = salarioBruto * (3/100)
salarioReceber = (salarioBruto) - (calculo)
print(salarioReceber)