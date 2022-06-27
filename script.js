function calculate() {
  var alturaVar = document.getElementById('altura').value
  var pesoVar = document.getElementById('peso_input').value
  let calc = (pesoVar / (alturaVar * alturaVar)) * 10000
  let element = document.getElementById('dado')
  if (isNaN(calc)) {
    element.innerHTML = 'Digite os valores acima!'
  } else {
    element.innerHTML = 'Seu IMC é: ' + calc.toFixed(2)
    if (calc < 18.5) {
      document.getElementById('magreza').style.backgroundColor = 'purple'
    } else if (calc > 18.5 && calc <= 25) {
      document.getElementById('normal').style.backgroundColor = 'purple'
    } else if (calc > 25 && calc <= 30) {
      document.getElementById('sobrepeso').style.backgroundColor = 'purple'
    } else if (calc > 30 && calc <= 35) {
      document.getElementById('obesidade').style.backgroundColor = 'purple'
    } else if (calc > 35 && calc <= 40) {
      document.getElementById('obesidadeGrave').style.backgroundColor = 'purple'
    }
  }
}
