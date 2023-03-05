function verificar() {
    //window.alert(`FUNCIONOU`)
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`idade`)
    var res = document.getElementById(`res`)


    if (fano.value.length == 1 || fano.value > ano || fano.value.length == 0) {
        window.alert(`Dados incorretos e tente novamente`)
    } else {
        var sexo = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
       // res.innerHTML = (`<p>Minha idade calculada é <strong>${idade}</strong></p>`)
    }

}

