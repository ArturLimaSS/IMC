function calculate() {
    var alturaVar = document.getElementById('altura').value
    var pesoVar = document.getElementById('peso_input').value
    let calc = (pesoVar / (alturaVar * alturaVar)) * 10000
    let element = document.getElementById('dado')


    if (isNaN(calc)) {
        element.innerHTML = 'Digite os valores acima!'
        element.style.display = "block"


    } else {
        element.innerHTML = 'Seu IMC é: ' + calc.toFixed(2)
        element.style.display = "block"
        if (calc < 18.5) {
            document.getElementById("magreza").style.backgroundColor = "rgb(210, 228, 209)"
            document.getElementById("normal").style.backgroundColor = "white"
            document.getElementById("sobrepeso").style.backgroundColor = "white"
            document.getElementById("obesidade").style.backgroundColor = "white"
            document.getElementById("obesidadeGrave").style.backgroundColor = "white"
        } else if (calc > 18.5 && calc < 24.9) {
            document.getElementById("magreza").style.backgroundColor = "white"
            document.getElementById("normal").style.backgroundColor = "rgb(210, 228, 209)"
            document.getElementById("sobrepeso").style.backgroundColor = "white"
            document.getElementById("obesidade").style.backgroundColor = "white"
            document.getElementById("obesidadeGrave").style.backgroundColor = "white"
        } else if (calc > 25 && calc < 29.9) {
            document.getElementById("magreza").style.backgroundColor = "white"
            document.getElementById("normal").style.backgroundColor = "white"
            document.getElementById("sobrepeso").style.backgroundColor = "rgb(210, 228, 209)"
            document.getElementById("obesidade").style.backgroundColor = "white"
            document.getElementById("obesidadeGrave").style.backgroundColor = "white"
        } else if (calc > 30 && calc < 39.9) {
            document.getElementById("magreza").style.backgroundColor = "white"
            document.getElementById("normal").style.backgroundColor = "white"
            document.getElementById("sobrepeso").style.backgroundColor = "white"
            document.getElementById("obesidade").style.backgroundColor = "rgb(210, 228, 209)"
            document.getElementById("obesidadeGrave").style.backgroundColor = "white"
        } else if (calc > 40) {
            document.getElementById("magreza").style.backgroundColor = "white"
            document.getElementById("normal").style.backgroundColor = "white"
            document.getElementById("sobrepeso").style.backgroundColor = "white"
            document.getElementById("obesidade").style.backgroundColor = "white"
            document.getElementById("obesidadeGrave").style.backgroundColor = "rgb(210, 228, 209)"
        }

    }
}