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
        var genero = ''
        var img = document.getElementById(`foto`)

        if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "/img/")
            } else if (idade < 21) {
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 50) {
                img.setAttribute("src", "foto-adulto-f.png")
            } else {
                img.setAttribute("src", "foto-idoso-f.png")
            }
        } else if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "foto-bebe-m.png")
            } else if (idade <= 21) {
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "foto-adulto-m.png")
            } else {
                img.setAttribute("src", "foto-idoso-m.png")
            }
        }
        res.style.textAlign = 'center'
        img.style.textAlign = 'center'
        res.innerHTML = (`<p>Sua idade calculada é <strong>${idade}</strong> anos </p> e detectamos que você é <strong>${genero}</strong>`)
        res.appendChild(img) //elemento pra aparecer a imagem
    }

}

